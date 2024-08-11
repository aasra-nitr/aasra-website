import React from "react";
import "../css/Footer.scss";
import Facebook_logo from "../assets/Asset 1.svg";
import Instagram_logo from "../assets/Asset 2.svg";
import Youtube_logo from "../assets/Asset 3.svg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="copyright_section">
          <p className="copyright_content">
            Copyright
            <IconButton>
              <CopyrightIcon sx={{ fontSize: 20, color: "#393E46" }} />
            </IconButton>
            2023 AASRA_NITR, designed by cvam_nitrkl
          </p>
        </div>
        <div className="footer_socialMedia">
          <div className="social_media">
            <Link to="https://www.facebook.com/aasranitr/">
              <img src={Facebook_logo} alt="Facebook logo" />
            </Link>
          </div>
          <div className="social_media">
            <Link to="https://www.instagram.com/aasra_nitr/">
              <img src={Instagram_logo} alt="Instagram logo" />
            </Link>
          </div>
          <div className="social_media">
            <Link to="https://www.youtube.com/@AasraNitrkl">
              <img src={Youtube_logo} alt="Youtube logo" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
