import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import RiderForm from "@/components/Modules/Rider/RiderForm";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/Utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./AdminSidebarItems";
import AboutPage from "@/pages/About";
import FAQPage from "@/pages/FAQ";
import { FeaturesPage } from "@/pages/Feature";
import { Contact } from "@/pages/Contact";
import { userSidebarItems } from "./UserSidebarItems";
import { driverSidebarItems } from "./DriverSidebarItems";
import RiderDetails from "@/components/Modules/Rider/RiderDetails";
import AccountGuard from "@/components/Modules/Shared/AccountGuard";
import AccountStatusPage from "@/components/Modules/Shared/AccountStatusPage";
import { Component } from "react";
import AdminProfile from "@/components/Modules/Admin/AdminProfile";
import UserProfile from "@/components/Modules/Rider/UserProfile";
import DriverProfile from "@/components/Modules/Driver/DriverProfile";


const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[
      {
        Component:Home,
        path:'/'
      },
      {
        Component:RiderForm,
        path:'/requestForm'
      },
      {
        Component:AboutPage,
        path:'/about'
      },
      {
        Component:FAQPage,
        path:'/FAQ'
      },
      {
        Component:FeaturesPage,
        path:'/feature'
      },
      {
        Component:Contact,
        path:'/contact'
      },
    ]
  },
  {
    Component:() => (
    <AccountGuard>
      <DashboardLayout />
    </AccountGuard>
  ),
    path: "/admin",
    children:[{index:true, Component: AdminProfile} ,...generateRoutes(adminSidebarItems)]
  },
  {
    Component:() => (
    <AccountGuard>
      <DashboardLayout />
    </AccountGuard>
  ),
    path: "/user",
    children:[{index:true, Component: UserProfile}, ...generateRoutes(userSidebarItems),{path: "/user/rideDetails/:rideId", Component: RiderDetails}]
  },
  {
    Component:() => (
    <AccountGuard>
      <DashboardLayout />
    </AccountGuard>
  ),
    path: "/driver",
    children:[{index:true, Component: DriverProfile},...generateRoutes(driverSidebarItems)]
  },
  {
    Component:Register,
    path:'/register'
  },
  {
    Component:Login,
    path:'/login'
  },
  {
    Component:AccountStatusPage,
    path:'/accountSuspentUser'
  }
]);

export default router;