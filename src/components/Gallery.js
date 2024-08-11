import React from "react";
import "../css/Gallery.scss";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Gallery() {
  return (
    <>
      <header className="gallery_section">
        <div className="images_section">
          <Carousel transitionTime={500} showThumbs={false} autoPlay={true} showArrows={false} infiniteLoop={true} showStatus={false} swipeable={true}>
            <div className="gallery_image">
              <img src="../images/gallery_image_1.jpg" alt="fgknfkng 1" />
            </div>
            <div className="gallery_image">
              <img
                src="../images/gallery_image_2.jpg"
                alt="fgknfkng 2"
              />
            </div>
            <div className="gallery_image">
              <img
                src="../images/gallery_image_3.jpg"
                alt="fgknfkng 3"
              />
            </div>
          </Carousel>
        </div>
      </header>
    </>
  );
}

export default Gallery;
