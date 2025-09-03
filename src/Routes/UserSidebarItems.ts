import RiderForm from "@/components/Modules/Rider/RiderForm";
import RiderHistory from "@/components/Modules/Rider/RiderHistory";
import UserProfile from "@/components/Modules/Rider/UserProfile";


export const userSidebarItems = [
    {
      title: "User Dashboard",
      items: [
        {
          title: "User Profile",
          url: "/user/userProfile",
          component: UserProfile
        },
        {
          title: "Ride Request Form",
          url: "/user/requestForm",
          component: RiderForm
        },
        {
          title: "Ride History",
          url: "/user/ride_history",
          component: RiderHistory
        }
      ],
    }
  ]