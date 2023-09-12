import { useAuthContext } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
    const {user} =useAuthContext();
    if(!user){
        return <Navigate to='/login'/>;
    }
    return children;
};

export default ProtectedRoute;