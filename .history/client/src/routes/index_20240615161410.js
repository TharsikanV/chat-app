import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"register",
                element:<RegisterPage/>
            },
            {
                path:'email',
                element:<Chec
            }
        ]
    }
])


export default router