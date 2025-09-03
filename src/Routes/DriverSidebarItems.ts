import ActiveRideManage from "@/components/Modules/Driver/ActiveRideManage";
import DriverProfile from "@/components/Modules/Driver/DriverProfile";
import Earning from "@/components/Modules/Driver/Earning";
import IncomingRequest from "@/components/Modules/Driver/IncomingRequest";
import MyRideHistory from "@/components/Modules/Driver/MyRideHistory";


export const driverSidebarItems = [
    {
      title: "Driver Dashboard",
      items: [
        {
          title: "Driver Profile",
          url: "/driver/driverProfile",
          component: DriverProfile
        },
        {
          title: "Earnings",
          url: "/driver/earnings",
          component: Earning
        },
        {
          title: "My Rides History",
          url: "/driver/myRideHistory",
          component: MyRideHistory
        },
        {
          title: "Incoming Request",
          url: "/driver/incomingRequest",
          component: IncomingRequest
        },
        {
          title: "Active Rides",
          url: "/driver/activeRides",
          component: ActiveRideManage
        },
      ],
    }
  ]