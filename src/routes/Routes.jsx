import { createBrowserRouter } from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import CraftsAll from "../pages/CraftsAll";
import CraftsAdd from "../pages/CraftsAdd";
import MyCraftsList from "../pages/MyCraftsList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/craftsAll",
        element: <CraftsAll></CraftsAll>
      },
      {
        path: "/craftsAdd",
        element: <PrivateRoutes>
                    <CraftsAdd></CraftsAdd>
                 </PrivateRoutes>
      },
      {
        path: "/myCraftsList",
        element: <PrivateRoutes>
                     <MyCraftsList></MyCraftsList>
                 </PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }


    ],
  },
]);

export default router