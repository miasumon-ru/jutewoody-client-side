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
import ViewDetails from "../pages/ViewDetails";
import ViewDetailsAll from "../pages/ViewDetailsAll";
import UpdatePage from "../pages/UpdatePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch("http://localhost:5000/craftItems")
      },
      {
        path: "/craftsAll",
        element: <CraftsAll></CraftsAll>,
        loader : () => fetch("http://localhost:5000/craftsAll")
      },
      {
        path: "/craftsAdd",
        element: <PrivateRoutes>
                    <CraftsAdd></CraftsAdd>
                 </PrivateRoutes>
      },
      {
        path: "/myCraftsList/:email",
        element: <PrivateRoutes>
                     <MyCraftsList></MyCraftsList>
                 </PrivateRoutes>,
        loader : ({params}) => fetch(`http://localhost:5000/myLists/${params.email}`)         
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage></UpdatePage>,
        loader : ({params}) => fetch(`http://localhost:5000/updatePage/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails/${params.id}`)
      },
      {
        path: "/viewDetailsAll/:id",
        element: <PrivateRoutes> 
                     <ViewDetailsAll></ViewDetailsAll>
                  </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/viewDetails/${params.id}`)
      },
  


    ],
  },
]);

export default router