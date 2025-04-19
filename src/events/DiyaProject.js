import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CountUp from "react-countup";
// import "../css/Sector.scss";
import "../css/DiyaProject.scss";
// import { Link } from "react-scroll";
import diyaProjectData from "../assets/diyaprojectdata/diyaProjectData";

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

const StatItem = ({ value, suffix, title }) => {
  return (
    <div className="stat-item">
      <div className="stat-value">
        <CountUp end={value} duration={2.5} startOnScroll={true} />
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      <div className="stat-title">{title}</div>
    </div>
  );
};

const DiyaProject = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if we're in mobile view
  const isMobile = windowDimensions.width <= 992;

  return (
    <div className="diya-project-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-carousel">
          <Carousel
            autoPlay
            infiniteLoop
            interval={5000}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
          >
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="content-wrapper">
                  <h1>Illuminating Lives: Diya Project 2024 Begins</h1>
                  <p>
                  The Diya Project 2024, spearheaded by the Aasra Social Service Club, is a heartfelt initiative aimed at uplifting local women. This project intends to provide seasonal income to the unemployed, especially women, in various workplaces. All profits from Diwali sales will be equitably distributed, supporting their livelihoods and nurturing a spirit of community. Join us in celebrating their artistry and making a meaningful impact this festive season!
                  </p>
                  
                  <a href="#learn-more" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
                <div className="carousel-image">
                  <img src="/images/DiyaProjectMainImage2.png" alt="Diya Project 2024" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="content-wrapper">
                  <h1>The Journey of a Diya: From Craft to Community</h1>
                  <p>
                  The Diya Project 2024 begins with the supply of raw materials to local women, who craft each diya with love and care, showcasing their creativity. Aasra manages all sales and distribution, and ensures equal distribution of profits generated from these sales. Through each diya, we witness their transformation from artisans to empowered members of the community, sharing the light of their craft with the world.
                  </p>
                  
                  <a href="#artisans" className="btn btn-primary">
                    Meet Our Artisans
                  </a>
                </div>
                <div className="carousel-image">
                  <img src="/images/FromCraftToCommunity.jpg" alt="The Journey of a Diya" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="content-wrapper">
                  <h1>Celebrating Milestones: Years of Empowerment</h1>
                  <p>
                  In 2023, the Diya Project witnessed remarkable success, reflecting the hard work and dedication of our artisans. We received and shipped an enormous amount of orders for diyas both online and offline, showcasing the growing demand for our beautifully crafted diyas. This resulted in a total sales of 2.11 Lakhs and a total profit of 1.32 Lakhs, which was equitably distributed among the talented women involved in the project.
                  </p>

                  <a href="#timeline" className="btn btn-primary">
                    View Our Journey
                  </a>
                </div>
                <div className="carousel-image">
                  <img src="/images/Milestones1.png" alt="Milestones of Success" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="content-wrapper">
                  <h1>Join the Cause: Brighten Lives This Diwali</h1>
                  <p>
                  This Diwali, light up more than just your home—make a meaningful difference. Each diya is a product of the skill and dedication of local women artisans, whose creativity supports their families and uplifts the community. By choosing our diyas, you contribute to a brighter future for these artisans, fostering empowerment and lasting change. Explore our collection and be part of a celebration that spreads light, hope, and joy far beyond your own doorstep.
                  </p>

                  <a href="#order" className="btn btn-primary">
                    Order Now
                  </a>
                </div>
                <div className="carousel-image">
                  <img src="/images/JoinTheCause.jpg" alt="Join Us This Diwali" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-content">
                <div className="content-wrapper">
                  <h1>Current Year Highlights: Diya Project 2024</h1>
                  <p>
                  Curious how this year went? Take a look at the highlights of Diya Project 2024! From record-breaking sales to heartwarming stories of empowerment, discover the impact we've made together. Our artisans have created stunning designs, and our community has shown incredible support, making this year's project a resounding success.
                  </p>

                  <a href="/events/DiyaProject2024" className="btn btn-primary">
                    View 2024 Highlights
                  </a>
                </div>
                <div className="carousel-image">
                  <a href="/events/DiyaProject2024">
                    <img src="/images/DIYA_PROJECT2K24.webp" alt="Diya Project 2024 Highlights" />
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section" id="learn-more">
        <div className="section-container">
          <div className="section-header">
            <h2>Illuminating Lives: Diya Project 2024 Begins</h2>
          </div>
          <div className="section-content">
            <div className="content-text">
              <p>
              The Diya Project 2024, led by the Aasra Social Service Club, is an initiative focused on providing local women with seasonal employment and empowering them through creativity. These women skillfully decorate diyas, turning simple items into artistic expressions. The project not only enhances the beauty of Diwali but also supports the artisans by distributing all profits equitably. This income stream helps them support their families and gain financial independence. By choosing diyas from the Diya Project, you contribute to this noble cause, lighting up homes while also brightening the lives of these artisans. Each diya represents a journey of transformation—from challenge to empowerment. Join us in celebrating their creativity and making a lasting impact on the lives of women in our community this Diwali.
              </p>

            </div>
            <div className="content-image">
              <div className="image-carousel">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={true}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                >
                  <div>
                    <img src="/images/Section1.1.png" alt="Our Mission" />
                  </div>
                  <div>
                    <img src="/images/Section1.2.png" alt="Our Mission" />
                  </div>
                  <div>
                    <img src="/images/Section1.3.jpg" alt="Our Mission" />
                  </div>
                  <div>
                    <img src="/images/Section1.4.jpg" alt="Our Mission" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="artisans">
        <div className="section-container">
          <div className="section-header">
            <h2>The Journey of a Diya: From Craft to Community</h2>
          </div>
          <div className="section-content">
            <div className="content-image">
              <div className="image-carousel">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={true}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                >
                  <div>
                    <img src="/images/FromCraftToCommunity.jpg" alt="The Artisans' Craft" />
                  </div>
                  <div>
                    <img src="/images/RawDiyas.jpg" alt="Raw Diyas" />
                  </div>
                  <div>
                    <img src="/images/JourneyOfADiya.jpg" alt="Journey of a Diya" />
                  </div>
                  <div>
                    <img src="/images/Section2.1.jpg" alt="The Artisans' Craft" />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="content-text">
              <p>
              The Diya Project 2024 begins with pre-orders for beautifully decorated diyas, supported by strategic public relations to raise awareness. Based on these pre-orders, we procure the necessary raw materials for local women artisans, providing them with everything needed to start their creative work. The heart of the project lies in the meticulous decoration process, where each artisan transforms plain diyas into intricate works of art, showcasing their talent and dedication. Once ready, the Aasra Social Service Club manages all sales and distribution, ensuring a seamless experience for artisans and customers alike. Proceeds are shared equally among the artisans, directly benefiting those who worked hard to create each diya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Celebrating Milestones: Years of Empowerment</h2>
          </div>
          <div className="section-content">
            <div className="content-text">
              <p>
              In 2018, the Diya Project saw total sales of ₹1,26,090, generating a profit of ₹82,000. The following year, 2019, marked a significant rise with total sales reaching ₹2,03,680 and profits surging to ₹1,45,000. After a break in 2020, the project resumed in 2021, achieving total sales of ₹95,825 with a profit of ₹53,115. Finally, in 2022, the project reached new heights with total sales amounting to ₹2.11 Lakhs and a profit of ₹1.32 Lakhs. Each year has underscored the artisans' commitment and the growing support for our mission to empower women through meaningful work and sustainable income.
              </p>

            </div>
            <div className="content-image">
              <div className="image-carousel">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={true}
                  stopOnHover={true}
                  swipeable={true}
                  emulateTouch={true}
                >
                  <div>
                    <img src="/images/Milestones1.png" alt="Our Impact" />
                  </div>
                  <div>
                    <img src="/images/Milestones.png" alt="Our Impact" />
                  </div>
                  <div>
                    <img src="/images/Section3.1.png" alt="Our Impact" />
                  </div>
                  <div>
                    <img src="/images/Section3.2.png" alt="Our Impact" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="timeline-section" id="timeline">
        <div className="timeline-container">
          <div className="section-header">
            <h2>Our Journey Over Years</h2>
          </div>
          <div className="timeline">
            <TimelineItem
              year="2018"
              title="Project Launch"
              description="The Diya Project was launched with 10 artisans, generating ₹50,000 in sales and ₹15,000 in profits."
            />
            <TimelineItem
              year="2019"
              title="Expansion"
              description="Expanded to 25 artisans, with sales reaching ₹150,000 and profits of ₹45,000."
            />
            <TimelineItem
              year="2020"
              title="Digital Transformation"
              description="Launched online sales platform, reaching ₹300,000 in sales and ₹90,000 in profits despite challenges."
            />
            <TimelineItem
              year="2021"
              title="Community Impact"
              description="Supported 50 artisans, generating ₹500,000 in sales and ₹150,000 in profits."
            />
            <TimelineItem
              year="2022"
              title="National Recognition"
              description="Received national award for social impact, with sales reaching ₹800,000 and profits of ₹240,000."
            />
            <TimelineItem
              year="2022"
              title="Record Breaking Year"
              description="Supported 100+ artisans, with sales exceeding ₹1,200,000 and profits of ₹360,000."
            />
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="section-header">
            <h2>Impact in Numbers</h2>
          </div>
          <div className="stats-grid">
            <StatItem value={20} suffix="+" title="Years of Impact" />
            <StatItem value={100} suffix="+" title="Artisans Supported" />
            <StatItem value={50000} suffix="+" title="Diyas Crafted" />
            <StatItem value={12} suffix="L+" title="Total Revenue (₹)" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <span className="line2"></span>
          JOIN THE CAUSE
          <span className="line2"></span>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.1.png" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.2.png" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.3.jpg" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.4.jpg" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.5.jpg" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.6.jpg" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.7.jpg" alt="Diya Project Gallery" />
          </div>
          <div className="gallery-item">
            <img className="gallery-img" src="/images/Section1.8.jpg" alt="Diya Project Gallery" />
          </div>
        </div>
        <div className="order-button-container">
          <a href="https://drive.google.com/file/d/1C-0OnPMAJ412VdT2vxYoE6bjkXW0jEkL/view?usp=sharing" className="order-button">
            BROCHURE
          </a>
          <a href="https://forms.gle/XaeF2oYTxXadFf1m8" className="order-button">
            ORDER NOW
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" id="order" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/FromCraftToCommunity.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="cta-container">
          <h2>Join Us This Diwali</h2>
          <p>
            This Diwali, light up your celebrations with our handcrafted diyas. Every purchase supports our artisans and their families, 
            helping us create lasting impact in communities.
          </p>
          <a href="https://forms.gle/XaeF2oYTxXadFf1m8" className="btn btn-light" style={{ color: '#e67e22' }}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default DiyaProject;



