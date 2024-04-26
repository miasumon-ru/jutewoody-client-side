import { createBrowserRouter} from "react-router-dom";


import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import CraftsAll from "../pages/CraftsAll";
import CraftsAdd from "../pages/CraftsAdd";
import MyCraftsList from "../pages/MyCraftsList";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [

        {
          path: "/" ,
          element: <Home></Home> ,
        },
        {
          path: "/craftsAll" ,
          element: <CraftsAll></CraftsAll> ,
        },
        {
          path: "/craftsAdd" ,
          element: <CraftsAdd></CraftsAdd> ,
        },
        {
          path: "/myCraftsList" ,
          element: <MyCraftsList></MyCraftsList> ,
        },
        {
          path: "/login" ,
          element: <Login></Login> ,
        },
        {
          path: "/register" ,
          element: <Register></Register> ,
        }


      ],
    },
  ]);

  export default router