import React from "react";

function AboutPart() {
  return (
    <>
      <li>
        <div className="timeline-circle"></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>2006</h4>
            <h4>A Journey Starts</h4>
          </div>
          <div className="timeline-body">
            <p>
              A independent social service club of NIT Rourkela was founded and
              started with few students and faculties with aiming to help kids
              from slum areas.
            </p>
          </div>
        </div>
      </li>
      <li className="timeline-inverted">
        <div className="timeline-circle"></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>2009</h4>
            <h4>The AASRA Family grows</h4>
          </div>
          <div className="timeline-body">
            <p>
              With the expansion of AASRA Family more sectors were added such as
              Leprosy Colony Sectors and Orphanage from Jagda.
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default AboutPart;
