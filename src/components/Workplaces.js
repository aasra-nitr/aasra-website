import React from "react";
import "../css/Workplaces.scss";
import workplaceData from "./workplaceData";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

function Workplaces() {
  return (
    <>
      <section className="workplaces_section">
        <h1 className="heading">workplaces</h1>
        <div className="workplaces">
          {workplaceData.map((val) => {
            return (
              <Link to={`/workplaces/${val.heading}`} key={val.id}>
              <div className="sector_card">
                <h2 className="sub_heading">{val.heading}</h2>
                <div className="content">
                  <p className="description">{val.description}</p>
                </div>
                {/* <Link to={val.link}> */}
                  <button className="sector_button">Read More</button>
                {/* </Link> */}
              </div>
              </Link>
            );
          })}
          {/* <Outlet /> */}
        </div>
      </section>
    </>
  );
}

export default Workplaces;
