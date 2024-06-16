import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"register",
                element:<Re
            }
        ]
    }
])


export default router