import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Phones from "../Pages/Phones/Phones";
import Cart from "../Pages/Cart/Cart";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/phones",
                element:<Phones></Phones>
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            }
        ]
    }
])

export default Router;