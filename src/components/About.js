import React from "react";
import "../css/About.scss";
import AboutPart from "./AboutPart";

function About() {
  return (
    /* about-wrap is full-width with the background; about-inner constrains the content */
    <section className="about-wrap">
      <div className="about-inner page-section">

        {/* ── Intro ── */}
        <div className="about_intro reveal">
          <span className="section-eyebrow">Our story</span>
          <h2 className="section-heading">Built by students, sustained by trust.</h2>
          <p className="section-copy">
            AASRA grew from a small volunteer effort into a long-running community of students,
            alumni, and faculty who care deeply about education and dignity.
          </p>
        </div>

        {/* ── Split: image + story card ── */}
        <div className="about_split">
          <div className="about_visual reveal delay-1">
            <img
              src="/images/foundation_day.jpg"
              alt="AASRA Foundation Day celebration"
              loading="lazy"
            />
          </div>

          <div className="about_story reveal delay-2">
            <h3>What defines AASRA</h3>
            <div className="story_divider"></div>
            <p>
              The organization was created to bring learning support, compassion, and long-term
              consistency to children and communities that need it most.
            </p>
            <p>
              The result is a culture built on commitment: teaching, celebrating, listening, and
              showing up week after week.
            </p>

            {/* Stat pills */}
            <div className="story_stats">
              <div className="stat_pill">
                <strong>18+</strong>
                <span>Years Active</span>
              </div>
              <div className="stat_pill">
                <strong>500+</strong>
                <span>Volunteers</span>
              </div>
              <div className="stat_pill">
                <strong>1000+</strong>
                <span>Lives Touched</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="timeline_section reveal delay-3">
          <div className="timeline_header">
            <div className="tl_eyebrow">Our Journey</div>
            <h3>A legacy built year by year</h3>
          </div>

          <ul className="timeline">
            <AboutPart />

            {/* End node */}
            <li className="timeline-inverted">
              <div className="timeline-circle" style={{ background: "linear-gradient(135deg, #009688, #f5b041)" }}></div>
              <div className="timeline_end_node">
                <div className="end_icon">🌟</div>
                <div className="end_text">
                  <strong>Be Part of Our Story</strong>
                  <span>Join AASRA and help us write the next chapter of impact.</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;
