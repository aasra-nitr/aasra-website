import React from "react";
import { Link } from "react-router-dom";
import "../css/Volunteer.scss";

function Volunteer() {
  return (
    <div className="volunteer-page-container">
      <div className="grid-background"></div>
      
      <div className="volunteer-card">
        <span className="badge">Inductions Coming Soon!</span>
        
        <h1 className="volunteer-title">
          Become a <span className="gradient-text">Volunteer</span>
        </h1>
        
        <p className="volunteer-desc">
          Thank you for your interest in joining the AASRA family! Volunteering with us is an opportunity to make a direct impact on underprivileged children's lives, teach, and grow as a community leader.
        </p>

        <div className="announcement-box">
          <h3>📢 Induction Notice</h3>
          <p>
            Our inductions for the current academic session are preparing to launch. We will open application forms and details shortly. Stay tuned!
          </p>
        </div>

        <div className="social-connect">
          <p>Follow our social channels to get notified instantly:</p>
          <div className="social-links">
            <a href="https://www.instagram.com/aasra_nitr/" target="_blank" rel="noreferrer" className="social-btn instagram">
              Instagram
            </a>
            <a href="https://www.facebook.com/aasranitr/" target="_blank" rel="noreferrer" className="social-btn facebook">
              Facebook
            </a>
          </div>
        </div>

        <div className="actions">
          <Link to="/" className="btn btn-primary">
            Explore Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
