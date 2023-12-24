import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default Router;