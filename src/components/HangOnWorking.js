import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/HangOnWorking.scss";

function HangOnWorking() {
  const navigate = useNavigate();

  return (
    <div className="hang-on-working-container">
      <div className="grid-background"></div>
      
      <div className="construction-card">
        {/* Animated Construction Indicator */}
        <div className="animation-wrapper">
          <div className="gear-container">
            <svg className="gear main-gear" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,35 C41.7,35 35,41.7 35,50 C35,58.3 41.7,65 50,65 C58.3,65 65,58.3 65,50 C65,41.7 58.3,35 50,35 Z M50,58 C45.6,58 42,54.4 42,50 C42,45.6 45.6,42 50,42 C54.4,42 58,45.6 58,50 C58,54.4 54.4,58 50,58 Z" fill="currentColor" />
              <path d="M92.7,46.3 L83,44.7 C82.2,42 80.9,39.4 79.2,37.1 L85.5,29.7 C86.3,28.7 86.2,27.2 85.2,26.2 L73.8,14.8 C72.8,13.8 71.3,13.7 70.3,14.5 L62.9,20.8 C60.6,19.1 58,17.8 55.3,17 L53.7,7.3 C53.5,5.9 52.3,4.9 50.9,4.9 L34.7,4.9 C33.3,4.9 32.1,5.9 31.9,7.3 L30.3,17 C27.6,17.8 25,19.1 22.7,20.8 L15.3,14.5 C14.3,13.7 12.8,13.8 11.8,14.8 L0.4,26.2 C-0.6,27.2 -0.7,28.7 0.1,29.7 L6.4,37.1 C4.7,39.4 3.4,42 2.6,44.7 L-7.1,46.3 C-8.5,46.5 -9.5,47.7 -9.5,49.1 L-9.5,65.3 C-9.5,66.7 -8.5,67.9 -7.1,68.1 L2.6,69.7 C3.4,72.4 4.7,75 6.4,77.3 L0.1,84.7 C-0.7,85.7 -0.6,87.2 0.4,88.2 L11.8,99.6 C12.8,100.6 14.3,100.7 15.3,99.9 L22.7,93.6 C25,95.3 27.6,96.6 30.3,97.4 L31.9,107.1 C32.1,108.5 33.3,109.5 34.7,109.5 L50.9,109.5 C52.3,109.5 53.5,108.5 53.7,107.1 L55.3,97.4 C58,96.6 60.6,95.3 62.9,93.6 L70.3,99.9 C71.3,100.7 72.8,100.6 73.8,99.6 L85.2,88.2 C86.2,87.2 86.3,85.7 85.5,84.7 L79.2,77.3 C80.9,75 82.2,72.4 83,69.7 L92.7,68.1 C94.1,67.9 95.1,66.7 95.1,65.3 L95.1,49.1 C95.1,47.7 94.1,46.5 92.7,46.3 Z" fill="currentColor" opacity="0.8" />
            </svg>
            <svg className="gear secondary-gear" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,35 C41.7,35 35,41.7 35,50 C35,58.3 41.7,65 50,65 C58.3,65 65,58.3 65,50 C65,41.7 58.3,35 50,35 Z M50,58 C45.6,58 42,54.4 42,50 C42,45.6 45.6,42 50,42 C54.4,42 58,45.6 58,50 C58,54.4 54.4,58 50,58 Z" fill="currentColor" />
              <path d="M92.7,46.3 L83,44.7 C82.2,42 80.9,39.4 79.2,37.1 L85.5,29.7 C86.3,28.7 86.2,27.2 85.2,26.2 L73.8,14.8 C72.8,13.8 71.3,13.7 70.3,14.5 L62.9,20.8 C60.6,19.1 58,17.8 55.3,17 L53.7,7.3 C53.5,5.9 52.3,4.9 50.9,4.9 L34.7,4.9 C33.3,4.9 32.1,5.9 31.9,7.3 L30.3,17 C27.6,17.8 25,19.1 22.7,20.8 L15.3,14.5 C14.3,13.7 12.8,13.8 11.8,14.8 L0.4,26.2 C-0.6,27.2 -0.7,28.7 0.1,29.7 L6.4,37.1 C4.7,39.4 3.4,42 2.6,44.7 L-7.1,46.3 C-8.5,46.5 -9.5,47.7 -9.5,49.1 L-9.5,65.3 C-9.5,66.7 -8.5,67.9 -7.1,68.1 L2.6,69.7 C3.4,72.4 4.7,75 6.4,77.3 L0.1,84.7 C-0.7,85.7 -0.6,87.2 0.4,88.2 L11.8,99.6 C12.8,100.6 14.3,100.7 15.3,99.9 L22.7,93.6 C25,95.3 27.6,96.6 30.3,97.4 L31.9,107.1 C32.1,108.5 33.3,109.5 34.7,109.5 L50.9,109.5 C52.3,109.5 53.5,108.5 53.7,107.1 L55.3,97.4 C58,96.6 60.6,95.3 62.9,93.6 L70.3,99.9 C71.3,100.7 72.8,100.6 73.8,99.6 L85.2,88.2 C86.2,87.2 86.3,85.7 85.5,84.7 L79.2,77.3 C80.9,75 82.2,72.4 83,69.7 L92.7,68.1 C94.1,67.9 95.1,66.7 95.1,65.3 L95.1,49.1 C95.1,47.7 94.1,46.5 92.7,46.3 Z" fill="currentColor" opacity="0.6" />
            </svg>
          </div>
          <span className="badge">Hang on, Working!</span>
        </div>

        {/* Brand/Status Heading */}
        <h1 className="construction-title">
          We're Crafting <span className="gradient-text">Something Special</span>
        </h1>

        {/* English Copy */}
        <p className="construction-desc">
          We are currently designing and building a dedicated space to showcase the beautiful stories, kids, and impact of this workplace. Check back soon for the complete experience!
        </p>

        {/* Hindi Copy - Requested by User */}
        <div className="hindi-callout">
          <span className="quote-mark">“</span>
          <p className="hindi-text">
            AASRA team abhi is workplace ki website banane par kaam kar rahi hai. Jaldi hi naye roop mein milenge!
          </p>
          <span className="quote-mark">”</span>
        </div>

        {/* Interactive Progress Tracker */}
        <div className="progress-section">
          <div className="progress-header">
            <span>Development Status</span>
            <span className="progress-percent">78%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
          <p className="progress-status-text">Integrating photos, member directories & stories...</p>
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          
          <Link to="/" className="btn btn-primary">
            Explore Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HangOnWorking;
