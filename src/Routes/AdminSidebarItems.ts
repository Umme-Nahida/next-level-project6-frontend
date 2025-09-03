import AdminProfile from "@/components/Modules/Admin/AdminProfile";
import AllAdmin from "@/components/Modules/Admin/AllAdmin";
import AllRides from "@/components/Modules/Admin/AllRides";
import AllUser from "@/components/Modules/Admin/AllUser";
import Analytics from "@/components/Modules/Admin/Analytics";


export const adminSidebarItems = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Admin Profile",
          url: "/admin/adminProfile",
          component: AdminProfile
        },
        {
          title: "Analytics",
          url: "/admin/analytics",
          component: Analytics
        },
        {
          title: "All Ride OverSight",
          url: "/admin/all-rides",
          component: AllRides
        },
        {
          title: "Admin Management",
          url: "/admin/admin-management",
          component: AllAdmin
        },
        {
          title: "All User Management",
          url: "/admin/all-user",
          component: AllUser
        },
      ],
    }
  ]