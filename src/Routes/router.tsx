import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import AdminProfile from "@/components/Modules/Admin/AdminProfile";
import Analytics from "@/components/Modules/Admin/Analytics";
import RiderForm from "@/components/Modules/Rider/RiderForm";
import RiderHistory from "@/components/Modules/Rider/RiderHistory";
import UserProfile from "@/components/Modules/Rider/UserProfile";
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
    Component:DashboardLayout,
    path: "/admin",
    children:[...generateRoutes(adminSidebarItems)]
  },
  {
    Component:DashboardLayout,
    path: "/user",
    children:[
      {
        Component:UserProfile,
        path:'profile'
      },
      {
        Component:Analytics,
        path:'analytics'
      },
      {
        Component:RiderHistory,
        path:'riderHistory'
      }
    ]
  },
  {
    Component:Register,
    path:'/register'
  },
  {
    Component:Login,
    path:'/login'
  }
]);

export default router;