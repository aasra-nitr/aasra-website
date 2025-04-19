import React from "react";
import "../css/Events.scss";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <section className="events_section">
        <h1 className="heading">EVENTS</h1>
        <div className="events_content">
          <Link to={`/events/FoundationDay`}>
            <div className="event_box">
              <div className="event_image">
                <img
                  src="../Foundation Day/FOUNDATION-DAY-2025.png"
                  alt="Foundation Day"
                ></img>
              </div>
              <h3 className="event_title">Foundation Day</h3>
            </div>
          </Link>
          <Link to={`/events/DiyaProject`}>
            <div className="event_box">
              <div className="event_image">
                <img src="../images/DIYA_PROJECT2K24.webp" alt="Diya Project"></img>
              </div>
              <h3 className="event_title">Diya Project</h3>
            </div>
          </Link>
          <Link to={`/events/LSY`}>
            <div className="event_box">
              <div className="event_image">
                <img
                  src="../LSY/LSY-2024.png"
                  alt="Little Science Yard"
                ></img>
              </div>
              <h3 className="event_title">Little Science Yard</h3>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Events;
