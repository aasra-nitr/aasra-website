import React from "react";
import "../css/Events.scss";
import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      title: "Foundation Day",
      year: "26 Jan",
      image: "../Foundation Day/FOUNDATION-DAY-2025.png",
      to: "/events/FoundationDay",
      description: "A celebration of AASRA's beginning, legacy, and the people who keep the mission alive.",
    },
    {
      title: "Diya Project",
      year: "Festive season",
      image: "../images/DIYA_PROJECT2K24.webp",
      to: "/events/DiyaProject",
      description: "A seasonal employment initiative that turns craftsmanship into dignity and income.",
    },
    {
      title: "Little Science Yard",
      year: "Science week",
      image: "../LSY/LSY-2024.png",
      to: "/events/LSY",
      description: "A hands-on science experience that builds curiosity, confidence, and wonder.",
    },
  ];

  return (
    <>
      <section className="events_section section-shell">
        <div className="section-intro reveal">
          <span className="section-eyebrow">Moments that define us</span>
          <h2 className="section-heading">Events that move from celebration to impact.</h2>
          <p className="section-copy">
            AASRA's events are not isolated programs; they are living chapters in the organization's story of service, learning, and community.
          </p>
        </div>
        <div className="events_timeline">
          {events.map((event, index) => (
            <Link to={event.to} key={event.title} className={`event_link reveal ${index % 2 === 0 ? "left" : "right"}`}>
              <article className="event_box premium-card">
                <div className="event_copy">
                  <span className="event_year">{event.year}</span>
                  <h3 className="event_title">{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event_cta">Read story</span>
                </div>
                <div className="event_image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;