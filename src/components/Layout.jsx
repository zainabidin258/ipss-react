import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthProvider } from "@/context/AuthContext";

const Layout = () =>{
    return(
        <AuthProvider>
            <Navbar/>
            <Outlet/>
        </AuthProvider>
    )
};

export default Layout;