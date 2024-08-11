import React from "react";
import "../css/About.scss";
import AboutPart from "./AboutPart";

function About() {
  return (
    <>
      <section className="about">
        <div className="about_section">
          <h1 className="heading">About Us</h1>
          <div className="timeline_section">
            <ul className="timeline">
              <AboutPart />
              <li className="timeline-inverted">
                <div className="timeline-circle">
                  <h4 className="timeline_circle_para">Be Part of Our Story</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
