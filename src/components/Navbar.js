import React, { useEffect, useState } from "react";
import Aasra_logo from "../assets/aasra_logo.svg";
import "../css/Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, NavLink, useLocation } from "react-router-dom";

/*
  Map: which home section ID corresponds to which nav link path.
  Order matters — last one whose top is above the fold wins.
*/
const SECTION_NAV_MAP = [
  { sectionId: "stats", navPath: null },  // home hero area
  { sectionId: "workplaces", navPath: "/workplaces" },
  { sectionId: "events", navPath: "/events" },
  { sectionId: "about", navPath: "/about" },
  { sectionId: "executives", navPath: "/about" },  // map to about
  { sectionId: "contact", navPath: "/contact" },
];

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activePath, setActivePath] = useState(null); // null = use React Router
  const location = useLocation();
  const isHome = location.pathname === "/";

  /* ── Scroll handler ── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollY > 40);
      setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0);

      /* Active section detection — only on home page */
      if (!isHome) { setActivePath(null); return; }

      const NAV_OFFSET = 120; // px below navbar to trigger switch
      let found = null;

      for (const { sectionId, navPath } of SECTION_NAV_MAP) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        const { top } = el.getBoundingClientRect();
        if (top <= NAV_OFFSET) found = navPath;
      }

      setActivePath(found); // null = no section matched = show Home as active
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  /* Close mobile menu on route change */
  useEffect(() => { setShowNavbar(false); }, [location]);

  /*
    Determine active class for a nav link.
    On home page: compare navPath to scroll-derived activePath.
    On other pages: use React Router isActive.
  */
  const navClass = (routerIsActive, navPath) => {
    if (isHome) {
      if (navPath === null || navPath === undefined) {
        // "Home" link — active when no section is in view (top of page)
        return activePath === null ? "active" : "";
      }
      return activePath === navPath ? "active" : "";
    }
    return routerIsActive ? "active" : "";
  };

  return (
    <nav className={`nav_main${scrolled ? " nav_scrolled" : ""}`}>
      {/* Scroll progress bar */}
      <div
        className="nav_progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="nav_logo">
        <Link to="/">
          <img src={Aasra_logo} alt="AASRA logo" />
          <div className="nav_brand">
            <span className="brand_name">AASRA</span>
            <span className="brand_tagline">NIT Rourkela</span>
          </div>
        </Link>
      </div>

      {/* Desktop + mobile nav */}
      <ul
        className={showNavbar ? "mobile_nav_menu" : "nav_menu"}
        onClick={() => setShowNavbar(false)}
      >
        <li>
          <NavLink to="/" end className={({ isActive }) => navClass(isActive, null)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/workplaces" className={({ isActive }) => navClass(isActive, "/workplaces")}>
            Workplaces
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => navClass(isActive, "/events")}>
            Events
          </NavLink>
        </li>

        <li>
          <NavLink to="/magazines" className={({ isActive }) => navClass(isActive, "/magazines")}>
            Magazines
          </NavLink>
        </li>
        <li>
          <NavLink to="/constitution" className={({ isActive }) => navClass(isActive, "/constitution")}>
            Constitution
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => navClass(isActive, "/contact")}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="humburger_icon">
        <button
          type="button"
          className="hamburger_button"
          onClick={() => setShowNavbar(!showNavbar)}
          aria-label={showNavbar ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showNavbar}
        >
          {showNavbar
            ? <CancelIcon sx={{ fontSize: 28, color: "#fff" }} />
            : <MenuIcon sx={{ fontSize: 28, color: "#fff" }} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
