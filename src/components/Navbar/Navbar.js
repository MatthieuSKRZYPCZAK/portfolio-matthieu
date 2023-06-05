import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {


    return (
        <>
            <nav className="site non-selectable">
                <ul>
                    <li className="site--home">
                        <NavLink  className={({ isActive }) => isActive ? "activeStyle" : undefined } to="/">
                            <span>A</span>ccueil
                        </NavLink> 
                    </li>
                    <li className="site--about">
                        <NavLink  className={({ isActive }) => isActive ? "activeStyle" : undefined } to="/about">
                        <span>À</span> propos
                        </NavLink> 
                    </li>
                    <li className="site--skills">
                        <NavLink  className={({ isActive }) => isActive ? "activeStyle" : undefined } to="/skills">
                        <span>C</span>ompétences
                        </NavLink> 
                    </li>
                    <li className="site--project">
                        <NavLink  className={({ isActive }) => isActive ? "activeStyle" : undefined } to="/project">
                        <span>P</span>rojets
                        </NavLink> 
                    </li>
                    <li className="site--contact">
                        <NavLink  className={({ isActive }) => isActive ? "activeStyle" : undefined } to="/contact">
                        <span>C</span>ontactez moi
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </>

    );
}

export default NavBar;