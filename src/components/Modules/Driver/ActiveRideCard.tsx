import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { RideCardProps } from "@/Types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useUpdateStatusMutation } from "@/Redux/Features/DriverApi/driverApi"
import { toast } from "sonner"



export default function ActiveRideCard({ ride }: RideCardProps) {

    const [status, setStatus] = useState("");
    const [updateStatus] = useUpdateStatusMutation()

    const handleStatusChange = async (newStatus: string) => {
        setStatus(newStatus)

        try {
            // const res = await axios.patch(`/api/rides/${rideId}`, { status: newStatus })
            const res = await updateStatus({ id: ride._id, status: newStatus })
            // console.log("Updated successfully:", res)
            if(res.data){
                toast.success(res.data.message || "Status updated successfully")
            }
            if(res.error){
                toast.error((res.error as any)?.data?.message || (res.error as any)?.err?.data?.message || "failed to update status")
            }
        } catch (error) {
            // console.error("Failed to update status:", error)
            toast.error("Failed to update status")
        }
    }
    
    return (
        <Card className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg border bg-gradient-to-br from-green-50 to-gray-100">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Active Ride</span>
                    <div className="flex items-center gap-4">
                        <div className="max-w-4xl">
                            <Select onValueChange={handleStatusChange} value={status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Update Ride status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="accepted">Accepted</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                    <SelectItem value="picked_up">Picked up</SelectItem>
                                    <SelectItem value="in_transit">In Transit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Badge className="px-3 py-1 text-sm" variant="outline">
                            {ride.status}
                        </Badge>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                {/* Ride Info */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">Ride Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <p><span className="font-semibold">Pickup:</span> {ride?.pickupLocation?.address}</p>
                        <p><span className="font-semibold">Destination:</span> {ride?.destinationLocation?.address}</p>
                        <p><span className="font-semibold">Requested At:</span> {new Date(ride.timestampsHistory.requestedAt).toLocaleString()}</p>
                        <p><span className="font-semibold">Accepted At:</span> {new Date(ride.timestampsHistory.acceptedAt).toLocaleString()}</p>
                        <p><span className="font-semibold">Payment:</span> {ride.paymentMethod}</p>
                        <p><span className="font-semibold">Fare:</span> ${ride.fare}</p>
                    </div>
                </div>

                <Separator />

                {/* Rider Info */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">Rider Information</h3>
                    <p><span className="font-semibold">Name:</span> {ride.rider.name}</p>
                    <p><span className="font-semibold">Email:</span> {ride.rider.email}</p>
                </div>

                <Separator />

                {/* Driver Info */}
                <div>
                    <h3 className="font-medium text-gray-700 mb-1">Driver Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <p><span className="font-semibold">Name:</span> {ride.driver.name}</p>
                        <p><span className="font-semibold">Email:</span> {ride.driver.email}</p>
                        <p><span className="font-semibold">Active:</span> {ride.driver.isActive}</p>
                        <p><span className="font-semibold">Vehicle Type:</span> {ride.driver.vehicleInfo.vehicle_type}</p>
                        <p><span className="font-semibold">Vehicle No:</span> {ride.driver.vehicleInfo.vehicle_number}</p>
                        <p><span className="font-semibold">Model:</span> {ride.driver.vehicleInfo.vehicle_model} ({ride.driver.vehicleInfo.vehicle_color})</p>
                        <p><span className="font-semibold">Seats:</span> {ride.driver.vehicleInfo.seats_available}</p>
                        <p><span className="font-semibold">License No:</span> {ride.driver.vehicleInfo.license_number}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
