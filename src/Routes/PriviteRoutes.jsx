/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PriviteRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>

    }

    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PriviteRoutes;