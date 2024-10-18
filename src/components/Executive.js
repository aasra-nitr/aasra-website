import React from "react";
import "../css/Executive.scss";

function Executive() {
  return (
    <section className="executives">
      <div className="executive_head_section">
        <h1 className="heading">Current Executives</h1>

        <div id="executiveCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#executiveCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#executiveCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#executiveCarousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#executiveCarousel" data-bs-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="executive_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/facad1.jpg" alt="head Image4" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Dr. A. Thirugnanam</p>
                    <p>Faculty Advisor</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/facad2.jpg" alt="head Image5" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Dr. Santosh Kumar Das</p>
                    <p>Faculty Advisor</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/facad3.jpg" alt="head Image6" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Dr. P. Balasubramanian</p>
                    <p>Faculty Advisor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="executive_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/ShaktiVP2.jpg" alt="head Image1" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Shakti Prasad Barik</p>
                    <p>Vice-President</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/President Jajneswar Biswal2.jpeg" alt="head Image2" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Jajneswar Biswal</p>
                    <p>President</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Treasurer - Bhaskar Singh.jpg" alt="head Image3" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Bhaskar Singh</p>
                    <p>Treasurer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="executive_head_container two-items">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/InternalGS-Debashish.jpg" alt="head Image4" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Debashish</p>
                    <p>Internal General Secretary</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/avatar.jpg" alt="head Image5" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Surya</p>
                    <p>External General Secretary</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="executive_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/DesignHead-Prabhu.jpg" alt="head Image4" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Prabhudutta</p>
                    <p>Design Head</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/TechHead-Smruti.jpg" alt="head Image5" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Smruti Ranjan</p>
                    <p>Tech Head</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/ContentHead-Nibedita.jpg" alt="head Image6" />
                  </div>
                  <div className="executive_post_holder">
                    <p>Nibedita</p>
                    <p>Content Head</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#executiveCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#executiveCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Executive;
