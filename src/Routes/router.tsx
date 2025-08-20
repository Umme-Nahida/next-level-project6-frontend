import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[
      {
        path:'/',
        element:<div>this is home</div>
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