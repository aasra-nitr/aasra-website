import React from "react";
import "../css/Events.scss";

function Events() {
  return (
    <>
      <section className="events_section">
        <h1 className="heading">EVENTS</h1>
        <div className="events_content">
          <div className="event_box">
            <div className="event_image">
              <img
                src="../images/foundation_day.jpg"
                alt="Foundation Day"
              ></img>
            </div>
            <h3 className="event_title">Foundation Day</h3>
          </div>
          <div className="event_box">
            <div className="event_image">
              <img src="../images/DIYA_PROJECT2K24.webp" alt="Diya Project"></img>
            </div>
            <h3 className="event_title">Diya Project</h3>
          </div>
          <div className="event_box">
            <div className="event_image">
              <img
                src="../images/A leap of Creativity.png"
                alt="Little Science Yard"
              ></img>
            </div>
            <h3 className="event_title">Little Science Yard</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
