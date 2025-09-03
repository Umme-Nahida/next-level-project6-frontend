
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useAllUsersQuery } from "@/Redux/Features/AdminApi/adminApi";
import RideTableSkeleton from "./RideTableSkeleton";


export default function AdminTable() {
  const {data, isLoading, isError}= useAllUsersQuery({role: "ADMIN"})

  if(isLoading) return <RideTableSkeleton/>
  if(isError) return <div>data not found</div>
  
  const adminUsers = data?.data || []
  console.log(data)


  const handleDelete = (userId: string) => {
    console.log(`Delete request for Admin ID: ${userId}`);
    // এখানে API call করে Admin delete করতে পারো
  };


  return (
    <div className="w-full overflow-x-auto">

      
      <Table>
        <TableCaption>List of all Admin users (managed by Super Admin).</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="whitespace-nowrap">Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {adminUsers.map((admin:any) => (
            <TableRow key={admin._id}>
              <TableCell className="font-medium">{admin.name}</TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>{admin.role}</TableCell>
              <TableCell>
                {new Date(admin.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleDelete(admin._id)}
                      className="text-red-600"
                    >
                      Delete Admin
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
