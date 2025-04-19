import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/DiyaProject2024.scss';
import CountUp from 'react-countup';

const DiyaProject2024 = () => {
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
    <div className="diya-project-2024-page">
      {/* Hero Section with Carousel Background */}
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
              <img src="/images/DiyaProjectMainImage.webp" alt="Diya Project 2024" />
            </div>
            <div>
              <img src="/images/FromCraftToCommunity.jpg" alt="From Craft to Community" />
            </div>
            <div>
              <img src="/Diya Project/DiyaProject24-1.jpg" alt="Diya Crafting" />
            </div>
          </Carousel>
        </div>
        <div className="hero-content">
          <h1>Diya Project 2024</h1>
          <p>Illuminating Lives, One Diya at a Time</p>
        </div>
      </section>

      {/* Impact at a Glance Section */}
      <section className="impact-stats-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Impact at a Glance</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={5000} duration={2.5} />+
              </div>
              <div className="stat-title">Diyas Distributed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={30} duration={2.5} />+
              </div>
              <div className="stat-title">Women Empowered</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <CountUp end={500} duration={2.5} />+
              </div>
              <div className="stat-title">Pre-orders Taken</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                ₹<CountUp end={100000} duration={2.5} />+
              </div>
              <div className="stat-title">Profit Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/Diya Project/DiyaProject24-2.jpg" alt="Material distribution" />
              {/* <div className="gallery-caption">Material distribution</div> */}
              <div className="gallery-caption">DIYA PROJECT 2024</div>
            </div>
            <div className="gallery-item">
              <img src="/Diya Project/DiyaProject24-3.jpg" alt="Decorating process" />
              {/* <div className="gallery-caption">Decorating process</div> */}
              <div className="gallery-caption">DIYA PROJECT 2024</div>
            </div>
            <div className="gallery-item">
              <img src="/Diya Project/DiyaProject24-4.jpg" alt="PR or stall photos" />
              {/* <div className="gallery-caption">PR or stall photos</div> */}
              <div className="gallery-caption">DIYA PROJECT 2024</div>
            </div>
            <div className="gallery-item">
              <img src="/Diya Project/DiyaProject24-5.jpg" alt="Customers and team" />
              {/* <div className="gallery-caption">Customers and team</div> */}
              <div className="gallery-caption">DIYA PROJECT 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Highlights Section */}
      {/* <section className="story-highlights-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Story Highlights</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote">"The Diya Project has given me financial independence and a sense of pride in my work."</div>
              <div className="author">- A participating woman</div>
            </div>
            <div className="testimonial-card">
              <div className="quote">"Being part of this initiative has shown me the power of community and collective effort."</div>
              <div className="author">- A student volunteer</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Redesigned Challenges & Achievements Section */}
      <section className="challenges-achievements-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Challenges & Achievements</h2>
          </div>
          <div className="challenges-achievements-grid">
            <div className="challenge-card">
              <div className="card-icon">🎯</div>
              <h3>Innovation</h3>
              <p>Developed new diya designs while preserving traditional craftsmanship, creating unique products that stand out in the market.</p>
            </div>
            <div className="achievement-card">
              <div className="card-icon">👥</div>
              <h3>Community Growth</h3>
              <p>Started with a few women and expanded to over two workplaces with a team of 40+ artisans, creating sustainable livelihoods.</p>
            </div>
            <div className="challenge-card">
              <div className="card-icon">📈</div>
              <h3>Market Expansion</h3>
              <p>Overcame distribution challenges by implementing a pre-order system, leading to a 40% increase in sales and customer satisfaction.</p>
            </div>
            {/* <div className="achievement-card">
              <div className="card-icon">🏆</div>
              <h3>Skill Development</h3>
              <p>Implemented training workshops that enhanced artisans' craftsmanship, leading to higher quality products and increased confidence.</p>
            </div> */}
            <div className="achievement-card">
              <div className="card-icon">💼</div>
              <h3>Seasonal Employment</h3>
              <p>Successfully provided seasonal employment opportunities to needy women, enabling them to earn income during festive seasons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Moments Section */}
      {/* <section className="special-moments-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Special Moments</h2>
          </div>
          <div className="fun-facts-grid">
            <div className="fun-fact-card">
              <h3>Best-selling diya</h3>
              <p>Glitter Swirls (A2)</p>
            </div>
            <div className="fun-fact-card">
              <h3>Fastest PR</h3>
              <p>DBA Hall of Residence (Under 3 hours)</p>
            </div>
            <div className="fun-fact-card">
              <h3>Most creative design</h3>
              <p>Ombre Galaxy</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Thank You Section */}
      <section className="thank-you-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/FromCraftToCommunity.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="section-container">
          <h2>Thank You</h2>
          <p>To our artisans, volunteers, and customers who made Diya Project 2024 a success.</p>
          <div className="cta-buttons">
            <a href="/events/DiyaProject" className="btn btn-primary">Back to Main Page</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiyaProject2024; 