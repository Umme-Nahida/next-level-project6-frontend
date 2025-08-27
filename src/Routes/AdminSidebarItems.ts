import AdminProfile from "@/components/Modules/Admin/AdminProfile";
import Analytics from "@/components/Modules/Admin/Analytics";


export const adminSidebarItems = [
    {
      title: "Dashboard",
      url: "#",
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
          title: "Right OverSight",
          url: "/admin/ride-oversight",
          component: Analytics
        },
      ],
    }
  ]