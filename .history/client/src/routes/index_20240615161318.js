import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"re"
            }
        ]
    }
])


export default router