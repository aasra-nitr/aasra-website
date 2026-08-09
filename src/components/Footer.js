import React from "react";
import "../css/Footer.scss";
import Facebook_logo from "../assets/Asset 1.svg";
import Instagram_logo from "../assets/Asset 2.svg";
import Youtube_logo from "../assets/Asset 3.svg";
import Aasra_logo from "../assets/aasra_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        {/* Brand Column */}
        <div className="footer_brand">
          <div className="footer_logo_wrap">
            <img src={Aasra_logo} alt="AASRA logo" />
            <div className="footer_brand_text">
              <span className="footer_brand_name">AASRA</span>
              <span className="footer_brand_sub">NIT Rourkela</span>
            </div>
          </div>
          <p className="footer_mission">
            A student-run social service organization dedicated to educating underprivileged children and empowering communities through sustained volunteer effort.
          </p>
          <div className="footer_social">
            <a href="https://www.facebook.com/aasranitr/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={Facebook_logo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/aasra_nitr/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={Instagram_logo} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@AasraNitrkl" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src={Youtube_logo} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer_col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/workplaces">Workplaces</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/magazines">Magazines</Link></li>
          </ul>
        </div>

        {/* Get Involved */}
        <div className="footer_col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/contact">Volunteer</Link></li>
            <li><Link to="/contact">Donate</Link></li>
            <li><Link to="/constitution">Our Constitution</Link></li>
            <li><Link to="/contact">Partner With Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer_col">
          <h4>Contact</h4>
          <address>
            <p>National Institute of Technology</p>
            <p>Rourkela, Odisha – 769008</p>
            <p>India</p>
          </address>
          <a href="mailto:aasra@nitrkl.ac.in" className="footer_email">aasra@nitrkl.ac.in</a>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} AASRA, NIT Rourkela. All rights reserved.</p>
        <p className="footer_credit">Designed with ♥ by the AASRA Tech Team</p>
      </div>
    </footer>
  );
}

export default Footer;
