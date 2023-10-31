/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PriviteRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    console.log(location)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>

    }

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PriviteRoutes;