import React from "react";
import "../css/Gallery.scss";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <header className="gallery_section">
        <div className="gallery_backdrop" />
        <div className="gallery_overlay" />
        <div className="gallery_layout page-section">
          <div className="gallery_copy reveal">
            <span className="section-eyebrow">AASRA, NIT Rourkela</span>
            <h1>Because Every Child Deserves an Opportunity.</h1>
            <p>
              AASRA is a student-run social service organization dedicated to educating underprivileged children, supporting communities, and empowering lives through volunteer work.
            </p>
            <div className="gallery_actions">
              <Link to="/contact" className="primary-button">Join Us →</Link>
              <Link to="/about" className="secondary-button">Our Journey</Link>
            </div>
            <div className="gallery_highlights">
              <span>Education that feels personal</span>
              <span>Volunteer-driven impact</span>
              <span>Hope in every workplace</span>
            </div>
          </div>

          <div className="images_section premium-card reveal delay-1">
            <Carousel transitionTime={500} showThumbs={false} autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} swipeable={true} emulateTouch={true} interval={5200}>
              <div className="gallery_image">
                <img src="/images/gallery_image_1.jpg" alt="Children learning together at AASRA" loading="lazy" />
              </div>
              <div className="gallery_image">
                <img src="/images/gallery_image_2.jpg" alt="AASRA volunteers with children" loading="lazy" />
              </div>
              <div className="gallery_image">
                <img src="/images/gallery_image_3.jpg" alt="AASRA classroom activity" loading="lazy" />
              </div>
            </Carousel>
          </div>
        </div>
      </header>
    </>
  );
}

export default Gallery;
