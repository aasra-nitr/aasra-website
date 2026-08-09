import React from "react";
import "../css/Workplaces.scss";
import workplaceData from "./workplaceData";
import { Link } from "react-router-dom";

const getSummary = (description) => {
  const sentences = description.match(/[^.!?]+[.!?]?/g) || [description];
  return sentences.slice(0, 2).join(" ").trim();
};

function Workplaces() {
  return (
    /* workplaces-wrap is full-width; section-shell inside constrains content */
    <section className="workplaces-wrap">
      <div className="workplaces_inner page-section">
        <div className="section-intro reveal">
          <span className="section-eyebrow">Where the work happens</span>
          <h2 className="section-heading">Workplaces that feel like families.</h2>
          <p className="section-copy">
            Each workplace carries its own history, children, and rhythm of care. Together they form the heart of AASRA's everyday impact.
          </p>
        </div>
        <div className="workplaces">
          {workplaceData.map((val) => {
            return (
              <Link to={`/workplaces/${val.slug}`} key={val.id} className="workplace_link reveal">
              <article className="sector_card premium-card">
                <div className="sector_media">
                  <img src={val.image} alt={val.heading} loading="lazy" />
                </div>
                <div className="content">
                  <span className="sector_tag">Teaching center</span>
                  <h3 className="sub_heading">{val.heading}</h3>
                  <p className="description">{getSummary(val.description)}</p>
                  <span className="sector_button">Read More</span>
                </div>
              </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Workplaces;
