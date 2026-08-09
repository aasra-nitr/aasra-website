import React from "react";
import "../css/Testimonial.scss";
import testimonialData from "../assets/testimonialdata/testimonialData";
import { Carousel } from "react-responsive-carousel";

function Testimonial() {
  return (
    <section className="testimonial_section">
      <div className="testimonial_inner">
        <div className="testimonial_intro reveal">
          <span className="testimonial_eyebrow">Alumni Speaks</span>
          <h2>Voices that shaped AASRA.</h2>
        </div>

        <div className="testimonial_carousel_wrap reveal delay-1">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            showStatus={false}
            swipeable={true}
            emulateTouch={true}
            interval={6000}
            transitionTime={500}
          >
            {testimonialData.map((data) => (
              <div className="testimonial_card" key={data.id}>
                <div className="testimonial_avatar">
                  <img
                    src={`../images/${data.image}`}
                    alt={data.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <p className="testimonial_quote">
                  {data.speaks.length > 320
                    ? data.speaks.slice(0, 320) + "…"
                    : data.speaks}
                </p>
                <h3 className="testimonial_author">{data.name}</h3>
                <p className="testimonial_batch">AASRA Alumni</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
