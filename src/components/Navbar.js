import React, { useState } from "react";
import Aasra_logo from "../assets/aasra_logo.svg";
import "../css/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <nav className="nav_main">
        <div className="nav_logo">
          <Link to="/">
            <img src={Aasra_logo} alt="aasra_logo" />
          </Link>
        </div>
        <ul
          className={showNavbar ? "mobile_nav_menu " : "nav_menu"}
          onClick={() => {
            setShowNavbar(false);
          }}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/workplaces">Workplaces</NavLink>
          </li>
          <li>
            <NavLink to="/constitution">Constitution</NavLink>
          </li>
          <li>
            <NavLink to="/magazines">Magazines</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>

        <div className="humburger_icon">
          <Link
            onClick={() => {
              setShowNavbar(!showNavbar);
            }}
          >
            {showNavbar ? (
              <CancelIcon sx={{ fontSize: 40, color: "#ffffff" }} />
            ) : (
              <MenuIcon sx={{ fontSize: 40, color: "#ffffff" }} />
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
