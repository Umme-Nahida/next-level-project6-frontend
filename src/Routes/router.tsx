import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import RiderForm from "@/components/Modules/Rider/RiderForm";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";


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
      }
    ]
  },
  {
    Component:DashboardLayout,
    path: "/",
    children:[
      {
        Component:Profile,
        path:'/profile'
      },
      {
        Component:Analytics,
        path:'/analytics'
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