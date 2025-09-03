import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAllRideOversightQuery} from "@/Redux/Features/AdminApi/adminApi"
import RideTableSkeleton from "../Shared/RideTableSkeleton"


export function RideOversightTable() {
  const [statusFilter, setStatusFilter] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  const [driverFilter, setDriverFilter] = useState("")
  const [riderFilter, setRiderFilter] = useState("")
  const [dateFilter, setDateFilter] = useState("")
  const [page, setPage] = useState(1)
  const limit = 5;

   const {data, error, isLoading} = useAllRideOversightQuery({ page,limit, searchTerm, driver:driverFilter, rider:riderFilter, date:dateFilter })
 
 if (isLoading) return <RideTableSkeleton />

  if(error){
    return <p>Error is occoured</p>
  }
console.log("alldata:", statusFilter, driverFilter, riderFilter, dateFilter)
  console.log('data', data.data.data)
  return (
    <Card className="p-4 w-full max-w-6xl mx-auto">
      <CardContent>
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Select onValueChange={(val) => setSearchTerm(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="picked_up">Picked up</SelectItem>
              <SelectItem value="in_transit">In transit</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Filter by Driver" value={driverFilter} onChange={(e) => setDriverFilter(e.target.value)} />
          <Input placeholder="Filter by Rider" value={riderFilter} onChange={(e) => setRiderFilter(e.target.value)} />
          <Input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border">
          <Table>
            <TableCaption>Ride Oversight - Filter and Manage Rides</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Rider</TableHead>
                <TableHead>Fare (৳)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.data.length > 0 ? (
                data?.data?.data.map((ride:any) => (
                  <TableRow key={ride.id}>
                    <TableCell>{ride.createdAt}</TableCell>
                    <TableCell className="capitalize">{ride.status}</TableCell>
                    <TableCell>{ride.driver?.name ? ride.driver?.name : "Unavailable"}</TableCell>
                    <TableCell>{ride.rider?.name}</TableCell>
                    <TableCell>{ride.fare}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-500">
                    No rides found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Reset Filters */}
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={() => {setStatusFilter(""); setDriverFilter(""); setRiderFilter(""); setDateFilter("")}}>Reset Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}
