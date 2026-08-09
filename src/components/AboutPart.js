import React from "react";

const milestones = [
  {
    year: "2006",
    title: "A Journey Starts",
    body: "An independent social service club of NIT Rourkela was founded by a handful of students and faculty with the aim of helping kids from slum areas.",
    inverted: false,
  },
  {
    year: "2009",
    title: "The AASRA Family Grows",
    body: "With the expansion of the AASRA family, more sectors were added — including Leprosy Colony and the Orphanage from Jagda.",
    inverted: true,
  },
];

function AboutPart() {
  return (
    <>
      {milestones.map((m) => (
        <li key={m.year} className={m.inverted ? "timeline-inverted" : ""}>
          <div className="timeline-circle"></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>{m.year}</h4>
              <h4>{m.title}</h4>
            </div>
            <div className="timeline-body">
              <p>{m.body}</p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default AboutPart;
