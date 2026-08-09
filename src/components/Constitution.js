import React from "react";
import { Link } from "react-router-dom";
import "../css/Constitution.scss";

function Constitution() {
  return (
    <div className="constitution-page">
      <div className="constitution-grid"></div>
      
      <div className="constitution-card">
        <span className="badge">Coming Soon</span>
        
        <h1 className="constitution-title">
          AASRA <span className="gradient-text">Constitution</span>
        </h1>
        
        <p className="constitution-desc">
          The constitution outlines the guidelines, core values, operations, and structure of AASRA, NIT Rourkela. Our official governing document is currently being updated for the current session.
        </p>

        <div className="info-box">
          <h3>⚖️ Revision Underway</h3>
          <p>
            The Executive Committee and Advisory Board are currently reviewing and updating the charter clauses. The official document will be available for download here soon.
          </p>
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

export default Constitution;
