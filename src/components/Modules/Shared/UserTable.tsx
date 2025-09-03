
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useAllUsersQuery, useBlockUserMutation, useUnBlockUserMutation } from "@/Redux/Features/AdminApi/adminApi";
import { toast } from "sonner";
import RideTableSkeleton from "./RideTableSkeleton";


export default function UserTable() {
    const [blockUser] = useBlockUserMutation()
    const [unBlockUser] = useUnBlockUserMutation()


  // filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState("");
  const [role, setRole] = useState("");


  const { data, isLoading, isError } = useAllUsersQuery({ searchTerm: searchTerm, isActive: isActive, role: role })

 if(isLoading) return <RideTableSkeleton/>
  if (isError) return <div>data not found</div>

  const users = data?.data || []



  // block user function
  const handleBlock = async (userId: string, action: string) => {
    console.log(`User ID: ${userId}, Action: ${action}`);

    const res = await blockUser({id: userId, action: action })

    if (res.data) {
      toast.success(res.data.message || `${action} Successful`)
    }


    if (res.error) {
      toast.success((res.error as any).data.message || `${action} Successful`)
    }

  };

  
  // Unblock user funcion
  const handleUnblock = async(userId: string, action: string) => {
    console.log(`User ID: ${userId}, Action: ${action}`);

    const res = await unBlockUser({id: userId, action: action })

    if (res.data) {
      toast.success(res.data.message || `${action} Successful`)
    }


    if (res.error) {
      toast.success((res.error as any).data.message || `${action} Successful`)
    }
  };


  const handleClearFilter = () => {
    setSearchTerm("")
    setIsActive("")
    setRole("")
  }
  return (
    <div className="w-full overflow-x-auto">


      {/* 🔍 Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <Input
          placeholder="Search by pickup/destination..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Select onValueChange={setIsActive} value={isActive}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="INACTIVE">Inactive</SelectItem>
            <SelectItem value="BLOCKED">Block</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setRole} value={role}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by User" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="RIDER">Rider</SelectItem>
            <SelectItem value="DRIVER">Driver</SelectItem>
          </SelectContent>
        </Select>


        <Button onClick={handleClearFilter} className="cursor-pointer">Clear All filter</Button>
      </div>


      {/* user data table */}
      {
        users.length === 0 ? <div className="text-center">No data found</div> :

          <Table>
            <TableCaption>A list of all users in the system.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="whitespace-nowrap">Created At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user: any) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${user.isBlocked
                        ? "bg-red-100 text-red-600"
                        : user.isVerified
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                      {user.isBlocked
                        ? "Blocked"
                        : user.isApproved
                          ? "Approved"
                          : "Pending"}
                    </span>
                  </TableCell>
                  <TableCell>
                    {user?.isActive === "ACTIVE"
                      ? "Active"
                      : "Inactive"}
                  </TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell>
                    {user.role !== "ADMIN" && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {user.role === "RIDER" && (
                            <>
                              {user.isBlocked ?
                                <DropdownMenuItem onClick={() =>
                                  handleUnblock(user._id, "Unblock_Rider")
                                }>
                                  Unblock Rider
                                </DropdownMenuItem>
                                :
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleBlock(user._id, "Block_Rider")
                                  }
                                >
                                  Block Rider
                                </DropdownMenuItem>}

                            </>
                          )}
                          {user.role === "DRIVER" && (
                            <>
                              {user.isApproved ?
                                <DropdownMenuItem onClick={() =>
                                  handleBlock(user._id, "Suspent_Driver")
                                } >
                                  Suspent Driver
                                </DropdownMenuItem>
                                :
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUnblock(user._id, "Approve_Driver")
                                  }
                                >
                                  Approve Driver
                                </DropdownMenuItem>}
                            </>
                          )}
                          <DropdownMenuItem
                            onClick={() => handleBlock(user._id, "DELETE")}
                            className="text-red-600"
                          >
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
      }
    </div>
  );
}
