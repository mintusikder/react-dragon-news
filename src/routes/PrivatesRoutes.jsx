import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivatesRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(user) {
        return children
    }
    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivatesRoutes;