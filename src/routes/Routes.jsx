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
import SubCategoryNameAll from "../pages/SubCategoryNameAll";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch("https://assignment-ten-server-side-peach.vercel.app/craftItems")
      },
      {
        path: "/craftsAll",
        element: <CraftsAll></CraftsAll>,
        loader : () => fetch("https://assignment-ten-server-side-peach.vercel.app/craftsAll")
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
        loader : ({params}) => fetch(`https://assignment-ten-server-side-peach.vercel.app/myLists/${params.email}`)         
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
        path: "/subCategoryNameAll/:subCategoryName",
        element: <SubCategoryNameAll></SubCategoryNameAll>
   
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage></UpdatePage>,
        loader : ({params}) => fetch(`https://assignment-ten-server-side-peach.vercel.app/updatePage/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`https://assignment-ten-server-side-peach.vercel.app/viewDetails/${params.id}`)
      },
      {
        path: "/viewDetailsAll/:id",
        element: <PrivateRoutes> 
                     <ViewDetailsAll></ViewDetailsAll>
                  </PrivateRoutes>,
        loader: ({params}) => fetch(`https://assignment-ten-server-side-peach.vercel.app/viewDetails/${params.id}`)
      },
  


    ],
  },
]);

export default router