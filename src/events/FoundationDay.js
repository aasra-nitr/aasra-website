import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/FoundationDay.scss";
import CountUp from "react-countup";

// Timeline Item Component
const TimelineItem = ({ year, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="timeline-item" onClick={() => setShowDescription(!showDescription)}>
      <div className="timeline-content">
        <div className="timeline-year">{year}</div>
        <div className="timeline-title">{title}</div>
        {showDescription && <div className="timeline-description">{description}</div>}
      </div>
    </div>
  );
};

const timelineEvents = [
  {
    year: "2005",
    title: "Foundation",
    description: "AASRA was founded on 26th January 2005 by students of NIT Rourkela."
  },
  {
    year: "2008",
    title: "Expanded to Multiple Locations",
    description: "Successfully expanded operations to multiple sectors across Rourkela."
  },
  {
    year: "2012",
    title: "Literacy Rate Impact",
    description: "Achieved significant improvement in literacy rates among underprivileged children."
  },
  {
    year: "2020",
    title: "Online Education Drive",
    description: "Launched online education initiatives during COVID-19 to ensure continuous learning."
  },
  {
    year: "2024",
    title: "Teaching Excellence",
    description: "Currently teaching over 500 children across 8 centers in Rourkela."
  }
];

const celebrationHighlights = [
  {
    title: "Cultural Performances",
    description: "Students showcase their talents through various cultural programs",
    image: "/Foundation Day/Cultural-Performance.jpg"
  },
  {
    title: "Volunteer Speeches",
    description: "Experienced volunteers share their journey and impact stories",
    image: "/Foundation Day/Volunteer-Speeches.jpg"
  },
  {
    title: "Student Achievements",
    description: "Celebrating academic excellence and personal growth of our students",
    image: "/Foundation Day/StudentAchievements2.jpg"
  }
];

const testimonials = [
  {
    quote: "AASRA has transformed not just the lives of children but also shaped me as a person. The foundation day celebrations remind us of our commitment to social change.",
    author: "Priya Sharma",
    role: "Volunteer (2018-2022)",
    image: "/images/ShrutiPriya.png"
  },
  {
    quote: "The education I received through AASRA changed my life. Today, I'm pursuing my dreams thanks to the support and guidance I received.",
    author: "Rahul Kumar",
    role: "Former Student",
    image: "/images/ChhendVC-Aman.jpg"
  },
  {
    quote: "AASRA's foundation day is a celebration of hope and determination. It's inspiring to see how far we've come in our mission.",
    author: "Dr. Meena Patel",
    role: "Faculty Advisor",
    image: "/images/ContentHead-Nibedita.jpg"
  }
];

const impactStats = [
  {
    number: 1000,
    label: "Students Helped",
    suffix: "+"
  },
  {
    number: 200,
    label: "Volunteers",
    suffix: "+"
  },
  {
    number: 7,
    label: "Centers",
    suffix: ""
  },
  {
    number: 19,
    label: "Years of Service",
    suffix: ""
  }
];

function FoundationDay() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="foundation-day-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            interval={5000}
          >
            <div>
              <img src="/images/gallery_image_3.jpg" alt="Foundation Day Celebration" />
            </div>
            <div>
              <img src="/Foundation Day/FoundationDay25-1.jpg" alt="AASRA Members" />
            </div>
            <div>
              <img src="/Foundation Day/Group Photo Foundation Day.jpg" alt="Students Learning" />
            </div>
          </Carousel>
        </div>
        <div className="hero-content">
          <h1>Celebrating AASRA's Legacy of Hope & Education</h1>
          <p>Founded on 26th January 2005 — Empowering Lives Through Learning</p>
          <a href="#about" className="cta-button">Explore Our Journey</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <h2>About the Foundation Day</h2>
          <p>
            AASRA was founded 2005 by students of NIT Rourkela, driven by a mission to bring free education to underprivileged children across Rourkela. Every year on this day, we celebrate the spirit of service and commitment to social change. The choice of Republic Day (26th January) as our foundation day is symbolic - it represents our commitment to building a more equitable society through education and empowerment.
          </p>
        </div>
      </section>

      {/* Mini Documentary Section */}
      {/* <section className="documentary-section">
        <div className="documentary-container">
          <h2>Through the Years</h2>
          <div className="video-container">
            <video 
              controls
              className="documentary-video"
            >
              <source src="/videos/AASRA Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-captions">
              <div className="caption active">2005 – A Dream is Born</div>
              <div className="caption">2008 – Expanding Our Reach</div>
              <div className="caption">2012 – Making a Difference</div>
              <div className="caption">2020 – Pandemic didn't stop us</div>
              <div className="caption">2024 – Continuing the Legacy</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Student Spotlight Section */}
      {/* <section className="spotlight-section">
        <div className="spotlight-container">
          <h2>Student Success Stories</h2>
          <div className="spotlight-grid">
            <div className="spotlight-item">
              <div className="student-image">
                <img src="/images/ShrutiPriya.png" alt="Priya" />
              </div>
              <div className="student-info">
                <h3>Priya, 17</h3>
                <p className="quote">"I used to help my mother in household chores. Thanks to AASRA, I now dream of becoming a teacher."</p>
                <p className="achievement">Currently pursuing B.Ed at Rourkela College</p>
              </div>
            </div>
            <div className="spotlight-item">
              <div className="student-image">
                <img src="/images/ChhendVC-Aman.jpg" alt="Rahul" />
              </div>
              <div className="student-info">
                <h3>Rahul, 19</h3>
                <p className="quote">"AASRA gave me the confidence to pursue my dreams. Today, I'm studying Computer Science."</p>
                <p className="achievement">First year student at NIT Rourkela</p>
              </div>
            </div>
            <div className="spotlight-item">
              <div className="student-image">
                <img src="/images/ContentHead-Nibedita.jpg" alt="Anjali" />
              </div>
              <div className="student-info">
                <h3>Anjali, 16</h3>
                <p className="quote">"The teachers at AASRA are like family. They've helped me discover my passion for science."</p>
                <p className="achievement">Top performer in Class 10 Board Exams</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Interactive Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2>Our Teaching Centers</h2>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1QtbsHNxFVMKAkVi-BLRVA0-Wzffe1uo&ehbc=2E312F&noprof=1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Rourkela Map"
              className="map-image"
            ></iframe>
            {/* <div className="map-pins">
              <div className="map-pin" style={{ top: '30%', left: '25%' }} data-center="Sector 2">
                <div className="pin-marker"></div>
                <div className="pin-content">
                  <h3>Sector 2</h3>
                  <p>Established: 2005</p>
                  <p>Students: 120+</p>
                  <img src="/images/Section2.1.jpg" alt="Sector 2 Center" />
                </div>
              </div>
              <div className="map-pin" style={{ top: '45%', left: '60%' }} data-center="Sector 18">
                <div className="pin-marker"></div>
                <div className="pin-content">
                  <h3>Sector 18</h3>
                  <p>Established: 2010</p>
                  <p>Students: 85+</p>
                  <img src="/images/Section2.2.jpg" alt="Sector 18 Center" />
                </div>
              </div>
              <div className="map-pin" style={{ top: '70%', left: '40%' }} data-center="Jagda">
                <div className="pin-marker"></div>
                <div className="pin-content">
                  <h3>Jagda</h3>
                  <p>Established: 2015</p>
                  <p>Students: 150+</p>
                  <img src="/images/jagda-dambru.jpg" alt="Jagda Center" />
                </div>
              </div>
              <div className="map-pin" style={{ top: '55%', left: '75%' }} data-center="Sector 21">
                <div className="pin-marker"></div>
                <div className="pin-content">
                  <h3>Sector 21</h3>
                  <p>Established: 2018</p>
                  <p>Students: 95+</p>
                  <img src="/images/Sector21Cap-Hari.jpg" alt="Sector 21 Center" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Digital Art Wall Section */}
      {/* <section className="art-wall-section">
        <div className="art-wall-container">
          <h2>Kids' Art Wall</h2>
          <p className="section-description">Artwork and messages from our students</p>
          <div className="art-wall-grid">
            <div className="art-item">
              <img src="/images/RawDiyas.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"Thank you AASRA Didi & Bhaiya" ❤️</p>
                <span>- Priya, Age 10</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/FromCraftToCommunity.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"I love learning with AASRA"</p>
                <span>- Rahul, Age 12</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/JourneyOfADiya.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"My teachers are the best!"</p>
                <span>- Anjali, Age 9</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/DiyaPhoto1.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"AASRA makes me happy"</p>
                <span>- Deepak, Age 11</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/DiyaPhoto2.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"I want to be a doctor"</p>
                <span>- Meera, Age 13</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/DiyaPhoto3.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"Thank you for teaching me"</p>
                <span>- Vikram, Age 8</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/DiyaPhoto4.jpg" alt="Student Artwork" />
              <div className="art-caption">
                <p>"I love my AASRA family"</p>
                <span>- Riya, Age 10</span>
              </div>
            </div>
            <div className="art-item">
              <img src="/images/DiyaProjectMainImage.webp" alt="Student Artwork" />
              <div className="art-caption">
                <p>"AASRA is my second home"</p>
                <span>- Arjun, Age 12</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Founders' Message Section */}
      <section className="founders-section">
        <div className="founders-container">
          <h2>Message from Our President</h2>
          <div className="founder-content">
            <div className="founder-image">
              <img src="/images/President Jajneswar Biswal2.jpeg" alt="AASRA President" />
            </div>
            <div className="founder-message">
              <blockquote>
                "To everyone who has been a part
                of this—whether by contributing
                your time, ideas, or support—
                thank you. You are what makes
                Aasra so special.
                As we move forward, let’s continue
                to dream big, help each other, and
                make a difference wherever we
                can. Each of us has the power to
                bring positive change, and
                together, we are unstoppable.
                Thank you for being an integral
                part of our journey. I invite you to
                explore this issue with curiosity
                and pride, and I hope it inspires
                you as much as it has inspired me."
              </blockquote>
              <div className="founder-info">
                <h3>Jajneswar Biswal</h3>
                <p>President, AASRA (2024-25)</p>
                {/* <p>Professor, NIT Rourkela</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AASRA Then vs Now Section */}
      {/* <section className="comparison-section">
        <div className="comparison-container">
          <h2>AASRA Then vs Now</h2>
          <div className="comparison-carousel">
            <div className="comparison-item">
              <div className="comparison-images">
                <div className="image-container">
                  <img src="/images/Section1.1.png" alt="First day of teaching" />
                  <div className="image-label">2005</div>
                </div>
                <div className="image-container">
                  <img src="/images/Section1.2.png" alt="Present day teaching" />
                  <div className="image-label">2024</div>
                </div>
              </div>
              <div className="comparison-text">
                <h3>Teaching Environment</h3>
                <p>From teaching under a tree to dedicated learning centers with proper facilities</p>
              </div>
            </div>
            <div className="comparison-item">
              <div className="comparison-images">
                <div className="image-container">
                  <img src="/images/Section1.3.jpg" alt="Class under a tree" />
                  <div className="image-label">2005</div>
                </div>
                <div className="image-container">
                  <img src="/images/Section1.4.jpg" alt="Current center" />
                  <div className="image-label">2024</div>
                </div>
              </div>
              <div className="comparison-text">
                <h3>Learning Spaces</h3>
                <p>From makeshift classrooms to proper educational facilities with learning resources</p>
              </div>
            </div>
            <div className="comparison-item">
              <div className="comparison-images">
                <div className="image-container">
                  <img src="/images/Section1.5.jpg" alt="Number of volunteers 2005" />
                  <div className="image-label">2005</div>
                </div>
                <div className="image-container">
                  <img src="/images/Section1.6.jpg" alt="Number of volunteers 2025" />
                  <div className="image-label">2024</div>
                </div>
              </div>
              <div className="comparison-text">
                <h3>Volunteer Strength</h3>
                <p>From a handful of dedicated students to a growing community of volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* This Year's Plan Section */}
      {/* <section className="plans-section">
        <div className="plans-container">
          <h2>This Year's Plan</h2>
          <p className="section-description">Our vision for the upcoming year</p>
          <div className="plans-grid">
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Launch New Center</h3>
              <p>Opening a new teaching center in Sector-18 to reach more children</p>
            </div>
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Digital Literacy</h3>
              <p>Including digital literacy modules to prepare students for the future</p>
            </div>
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Health Checkups</h3>
              <p>Partnering with NGOs for regular health checkups for our students</p>
            </div>
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Higher Education Support</h3>
              <p>Creating a scholarship program for students pursuing higher education</p>
            </div>
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Parent Engagement</h3>
              <p>Increasing parent involvement through regular workshops and meetings</p>
            </div>
            <div className="plan-item">
              <div className="plan-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Library Expansion</h3>
              <p>Setting up libraries at all centers to promote reading habits</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="timeline-section">
        <div className="timeline-container">
          <div className="section-header">
            <h2 style={{color: "black"}}>Our Journey Through the Years</h2>
          </div>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-container">
          <h2>Our Impact</h2>
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="impact-item">
                <div className="number">
                  <CountUp end={stat.number} duration={2.5} enableScrollSpy />
                  {stat.suffix}
                </div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebration Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-container">
          <h2>Celebration Highlights</h2>
          <div className="highlights-grid">
            {celebrationHighlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <img src={highlight.image} alt={highlight.title} />
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of Change Section */}
      {/* <section className="voices-section">
        <div className="voices-container">
          <h2>Voices of Change</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="quote">{testimonial.quote}</div>
                <div className="author">
                  <img src={testimonial.image} alt={testimonial.author} />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join the Movement Section */}
      <section className="join-section">
        <div className="join-container">
          <h2>Join the Movement</h2>
          <p>
            Be part of our mission to transform lives through education. Whether you're a student, professional, or community member, there are many ways to contribute to our cause.
          </p>
          <div className="cta-buttons">
            <a href="/volunteer" className="btn btn-primary">Become a Volunteer</a>
            <a href="/donate" className="btn btn-light">Support Our Cause</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoundationDay;
