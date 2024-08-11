import React from "react";
import "../css/Executive.scss";

function Executive() {
  return (
    <>
      <section className="executives">
        <div className="executive_head_section">
          <h1 className="heading"> Current Executives</h1>
          <div className="executive_head_container">
            <div className="head_box">
              <div className="head_image">
                <img src="../images/avatar.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Swastik Kumar Sahu</p>
                <p>Vice-President</p>
              </div>
            </div>
            <div className="head_box">
              <div className="head_image">
                <img src="../images/avatar.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Satwik Srimansu Sahoo</p>
                <p>President</p>
              </div>
            </div>
            <div className="head_box">
              <div className="head_image">
                <img src="../images/avatar.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Abhay Kumar</p>
                <p>Treasurer</p>
              </div>
            </div>
            <div className="head_box">
              <div className="head_image">
                <img src="../images/facad1.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Dr. A. Thirugnanam</p>
                <p>Faculty Advisor</p>
              </div>
            </div>
            <div className="head_box">
              <div className="head_image">
                <img src="../images/facad2.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Dr. Santosh Kumar Das</p>
                <p>Faculty Advisor</p>
              </div>
            </div>
            <div className="head_box">
              <div className="head_image">
                <img src="../images/facad3.jpg" alt="head Image1" />
              </div>
              <div className="executive_post_holder">
                <p>Dr. P. Balasubramanian</p>
                <p>Faculty Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Executive;
