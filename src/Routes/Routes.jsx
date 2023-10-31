import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Booking from "../Pages/Booking/Booking";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PriviteRoutes from "./PriviteRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element:<PriviteRoutes> <CheckOut></CheckOut></PriviteRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PriviteRoutes>
                    <Booking></Booking>
                </PriviteRoutes>
            }
        ]
    },
]);
export default router