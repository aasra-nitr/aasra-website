import React from "react";
import "../css/ContactUs.scss";
import Facebook_logo from "../assets/Asset 1.svg";
import Instagram_logo from "../assets/Asset 2.svg";
import Youtube_logo from "../assets/Asset 3.svg";

function ContactUs() {
  return (
    <section className="contact-wrap">
      <div className="contact contact-inner page-section">
        <div className="section-intro reveal">
          <span className="section-eyebrow">Get involved</span>
          <h2 className="section-heading">Contact AASRA.</h2>
          <p className="section-copy">
            Reach out to volunteer, collaborate, or simply ask how the organization works across its teaching centers.
          </p>
        </div>
        
        <div className="contact_cards reveal delay-1">
          <article className="contact_card premium-card">
            <span>Visit</span>
            <strong>NIT Rourkela</strong>
            <p>National Institute of Technology, Rourkela, Odisha</p>
          </article>
          <article className="contact_card premium-card">
            <span>Social</span>
            <strong>@aasra_nitr</strong>
            <p>Follow project updates, event announcements, and community stories.</p>
          </article>
          <article className="contact_card premium-card">
            <span>Support</span>
            <strong>Volunteer</strong>
            <p>Join a workplace and help children learn, grow, and feel seen.</p>
          </article>
        </div>
        
        <div className="contact_section reveal delay-2">
          <div className="contact_content">
            <div className="social_connect_section premium-card">
              <h3>Connect With Us</h3>
              <p className="social_desc">
                Follow our official social media handles to stay updated with our teaching centers, events, and community impact. Feel free to send us a direct message on any platform!
              </p>
              
              <div className="social_grid">
                <a href="https://www.instagram.com/aasra_nitr/" target="_blank" rel="noreferrer" className="social_item instagram">
                  <div className="social_icon_wrap">
                    <img src={Instagram_logo} alt="Instagram" />
                  </div>
                  <div className="social_info">
                    <h4>Instagram</h4>
                    <span>@aasra_nitr</span>
                  </div>
                </a>

                <a href="https://www.facebook.com/aasranitr/" target="_blank" rel="noreferrer" className="social_item facebook">
                  <div className="social_icon_wrap">
                    <img src={Facebook_logo} alt="Facebook" />
                  </div>
                  <div className="social_info">
                    <h4>Facebook</h4>
                    <span>@aasranitr</span>
                  </div>
                </a>

                <a href="https://www.youtube.com/@AasraNitrkl" target="_blank" rel="noreferrer" className="social_item youtube">
                  <div className="social_icon_wrap">
                    <img src={Youtube_logo} alt="YouTube" />
                  </div>
                  <div className="social_info">
                    <h4>YouTube</h4>
                    <span>AasraNitrkl</span>
                  </div>
                </a>

                <a href="mailto:aasra@nitrkl.ac.in" className="social_item email">
                  <div className="social_icon_wrap">
                    <span className="email_icon">✉</span>
                  </div>
                  <div className="social_info">
                    <h4>Email Us</h4>
                    <span>aasra@nitrkl.ac.in</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="map premium-card">
              <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.6574916511827!2d84.89840587498274!3d22.253070544606345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1687694194254!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
