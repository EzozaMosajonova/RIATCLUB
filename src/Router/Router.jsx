import { createBrowserRouter } from "react-router-dom";
import App from "../App";  
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import Dashboard from "../Pages/Dashboard/Dashboard";




export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, 
        errorElement: <div>Bunday sahifa mavjud emas!</div>,
        children: [
            {
                path: "/login",  
                element: <LoginPage/>,
            },
            {
                path: "/register",  
                element: <RegisterPage/>,
            },
            {
                path: "/chanels/@me ",
                element: <Dashboard/>,  
            }
        ]
    }
]);
