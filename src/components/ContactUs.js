import React from "react";
import "../css/ContactUs.scss";

function ContactUs() {
  return (
    <>
      <section className="contact">
        <h1 className="heading">Contact Us</h1>
        <div className="contact_section">
          <div className="contact_content">
            <div className="form_section">
              <form name="sentMessage" id="contactForm" noValidate="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name *"
                    id="name"
                    required=""
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    id="email"
                    required=""
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone *"
                    id="phone"
                    required=""
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message *"
                    id="message"
                    required=""
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  {/* <p className="help-block text-danger"></p> */}
                </div>
                <div className="form-group">
                  <button type="submit" className="form_button">
                    SEND YOUR THOUGHT
                  </button>
                </div>
              </form>
            </div>
            <div className="map">
              <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6574916511827!2d84.89840587498274!3d22.253070544606345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1687694194254!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "5px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
