import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import '@/styles/app.css'
import 'bootstrap/dist/css/bootstrap.css';

const Links = [
    { path:'/' , text:'Home'},
    { path:'login' , text:'Login'},
    { path:'uploadImage' , text:'Upload Image'},
    { path:'imageDetails' , text:'Image Details'},
    { path:'analysisReport' , text:'Analysis Report'},
    { path:'purchaseCredits' , text:'Purchase Credits'},
    { path:'creditsHistory' , text:'Credits History'},
];
const Navbar = () => {
    const [navbarOpen,setNavbarOpen]=useState(false);
    const{user,logout}=useAuthContext();
    const navigate = useNavigate();
    const handleLogout = () =>{
        logout();
        navigate('/login');
    };
    return(
    <>
            <nav className="navbar">
                <button 
                 className="toggle"
                 onClick={()=>setNavbarOpen((prev) => !prev)}>
                    {navbarOpen ? 'close' : 'open'}
                 </button>
            <ul className={`menu-nav${navbarOpen ? 'show-menu' : ''}`}>
                {Links.map((Link)=>{
                    return(
                        <React.Fragment key={Link.text}>
                            {Link.path === 'login' ? (
                                !user && (
                                    <li>
                                        <NavLink 
                                            to={Link.path}
                                            onClick={()=>setNavbarOpen(false)}>{Link.text}</NavLink>
                                    </li>
                                )
                            ): Link.path === 'uploadImage' || Link.path === 'imageDetails' || Link.path === 'creditsHistory' || Link.path === 'purchaseCredits' || Link.path === 'imageDetails' || Link.path === 'analysisReport' ? (
                                user && (
                                    <li>
                                        <NavLink onClick={()=>setNavbarOpen(false)} to={Link.path}>
                                            {Link.text}
                                        </NavLink>
                                    </li>
                                )
                            ) : (
                                <li>
                                    <NavLink to={Link.path} onClick={()=>setNavbarOpen(false)}>{Link.text}</NavLink>
                                </li>
                            )
                            }
                        </React.Fragment>
                    )
                })}
            </ul>
        </nav>
        {user && (
            <div className="logout">
                <p>{user}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )}
    </>
)    
};
export default Navbar;