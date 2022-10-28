import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const links = {
        borderRadius: "25px",
        textAlign: "center",
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 150px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
    };
    return (
        <header>
            <h1>
                Zwillow
                <span className="logo" role="img">
                    🌱
                </span>
            </h1>
            <NavLink className= "about" to= "/about" style={links}>About </NavLink>
    <NavLink to= "/" style={links}>Home</NavLink>
    <NavLink to= "/contact" style={links}>Contact</NavLink>
        </header>
    );
}

export default Header;