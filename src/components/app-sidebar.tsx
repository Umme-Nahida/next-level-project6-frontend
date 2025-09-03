import * as React from "react"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link, useNavigate } from "react-router"
import Logo from "@/assets/Icons/logo"
import { getSidebarItems } from "@/Utils/getSidebarItems"
import { useGetUserQuery, useLogOutMutation } from "@/Redux/Features/authApi/authApi"
import { toast } from "sonner"
import Active from "./Active"
import { Loader2 } from "lucide-react"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, error, isLoading } = useGetUserQuery(undefined);
  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()

  const user = userData?.user?.user;

 if (isLoading) return  <Loader2 className="mr-2 h-8 w-8 animate-spin" />

  if (error) {
    console.log(error)
  }


  // This is sample data.
  const data = {
    navMain: getSidebarItems(user?.role)
  }
  // console.log(data?.user)

  const handleLogout = async () => {
    const res = await logOut(undefined)
    console.log(res)
    if (res.data) {
      toast.success(res.data.message)
      navigate("/")
    }
    if (res.error) {
      toast.error((res.error as any)?.err?.data?.message || "logout is failed")
    }
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div>
          <Link to={"/"} className="flex gap-1 items-center">
            <Logo></Logo>
            <h1>Find Rider</h1>
          </Link>
        </div>
        <div className="border border-gray-300 my-3"></div>

      </SidebarHeader>
      <SidebarContent>

        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div className="border border-gray-300 my-5"></div>
      <div className="pb-20 ml-4 space-y-1 text-md">
        <div className="ml-3 flex items-center gap-2">
          <h1>Active Status</h1>
          {
            user.role === "DRIVER" && <Active/>
          }
        </div>

        <Link to={"/"} className="flex gap-1 items-center mx-1 px-2 hover:bg-green-100 rounded-2xl">
          <h1>Home</h1>
        </Link>
        <div onClick={handleLogout} className="flex gap-1 items-center cursor-pointer mx-1 px-2 hover:bg-green-100 rounded-2xl">
          Logout
        </div>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}
