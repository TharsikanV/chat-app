import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";

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
                element:<CheckEmailPage/>
            },
            {
                path:'password',
                element:<CheckPasswordPage/>
            },
            {
                path:"",
                element:<Hom
            }
        ]
    }
])


export default router