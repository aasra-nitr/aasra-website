import React from "react";
import "../css/Testimonial.scss";
import testimonialData from "../assets/testimonialdata/testimonialData";

import { Carousel } from "react-responsive-carousel";

function Testimonial() {
  return (
    <>
      <section className="testimonial_section">
        <h1 className="heading">Alumni Speaks</h1>
        <div className="testimonial_content">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            showStatus={false}
            width={800}
            swipeable={true}
          >
            
           {testimonialData.map((data) => {
            return (
              <div className="testimonial_box" key={data.id}>
              <span className="image_circle">
                <img src={`../images/${data.image}`} alt={data.name}></img>
              </span>
              <h3 className="testimonial_title">{data.name}</h3>
              <p className="testimonial_para">{data.speaks}</p>
            </div>
            )
           })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
