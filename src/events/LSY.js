import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/LSY.scss";
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
    year: "2021",
    title: "First Chemistry Show",
    description: "LSY debuted with an exciting chemistry show that amazed young minds."
  },
  {
    year: "2022",
    title: "Expanded to Multiple Workplaces",
    description: "LSY reached out to more workplaces, bringing science to more children."
  },
  {
    year: "2023",
    title: "Record Participation",
    description: "60 kids participated in the science fair, the largest turnout yet."
  },
  {
    year: "2024",
    title: "Digital Integration",
    description: "Incorporated digital elements and virtual demonstrations alongside physical models."
  }
];

const pastExhibits = [
  {
    title: "Hydraulic Lift",
    year: "2023",
    image: "/LSY/LSY-PROJECT-1.jpg",
    description: "A working model demonstrating hydraulic principles"
  },
  {
    title: "Tornado in a Jar",
    year: "2022",
    image: "/LSY/LSY-PROJECT-2.jpg",
    description: "Visual demonstration of vortex formation"
  },
  {
    title: "Lemon Battery",
    year: "2023",
    image: "/LSY/LSY-PROJECT-3.jpg",
    description: "Simple battery made from lemons and electrodes"
  },
  {
    title: "Volcano Eruption",
    year: "2022",
    image: "/LSY/LSY-PROJECT-4.jpg",
    description: "Chemical reaction creating a volcanic eruption"
  },
  {
    title: "Solar System Model",
    year: "2023",
    image: "/LSY/LSY-PROJECT-5.jpg",
    description: "Interactive model of our solar system"
  },
  {
    title: "Wind Energy",
    year: "2022",
    image: "/LSY/LSY-PROJECT-6.jpg",
    description: "Demonstration of wind power generation"
  }
];

const youngInnovators = [
  {
    name: "Amaan",
    age: 11,
    workplace: "Sector 6 Workplace",
    quote: "I built a motorboat using plastic bottles!",
    image: "/images/ChhendVC-Aman.jpg"
  },
  {
    name: "Priya",
    age: 10,
    workplace: "Sector 18 Workplace",
    quote: "My solar-powered fan works without batteries!",
    image: "/images/ShrutiPriya.png"
  },
  {
    name: "Rahul",
    age: 12,
    workplace: "Sector 21 Workplace",
    quote: "I made a water filter that removes impurities!",
    image: "/images/ContentHead-Nibedita.jpg"
  },
  {
    name: "Anjali",
    age: 9,
    workplace: "Jagda Workplace",
    quote: "My lemon battery lit up an LED!",
    image: "/images/Sector21Cap-Hari.jpg"
  }
];

// const volunteerQuotes = [
//   {
//     quote: "They may be small, but their ideas are limitless!",
//     author: "Rahul",
//     role: "ECE 3rd year",
//     image: "/images/ChhendVC-Aman.jpg"
//   },
//   {
//     quote: "Teaching science to kids is like watching magic happen!",
//     author: "Priya",
//     role: "CSE 2nd year",
//     image: "/images/ShrutiPriya.png"
//   },
//   {
//     quote: "Every child has a scientist inside them, we just help them discover it.",
//     author: "Amit",
//     role: "ME 4th year",
//     image: "/images/ContentHead-Nibedita.jpg"
//   }
// ];

const learningOutcomes = [
  {
    title: "Confidence",
    icon: "fas fa-star",
    description: "Building self-assurance through presentation and demonstration"
  },
  {
    title: "Hands-on Experience",
    icon: "fas fa-flask",
    description: "Practical understanding of scientific principles through experiments"
  },
  {
    title: "Public Speaking",
    icon: "fas fa-microphone",
    description: "Developing communication skills by explaining their projects"
  },
  {
    title: "College Exposure",
    icon: "fas fa-university",
    description: "Experience of a college campus environment and innovation culture"
  },
  {
    title: "Problem Solving",
    icon: "fas fa-puzzle-piece",
    description: "Critical thinking and creative solutions to scientific challenges"
  },
  {
    title: "Teamwork",
    icon: "fas fa-users",
    description: "Collaborative learning with peers and mentors"
  }
];

// const scienceExperiments = [
//   {
//     title: "Balloon Rocket",
//     description: "Learn about action and reaction forces",
//     gif: "/images/DiyaProjectMainImage.png"
//   },
//   {
//     title: "Density Tower",
//     description: "Explore the concept of density with liquids",
//     gif: "/images/DIYA_PROJECT2K24.webp"
//   },
//   {
//     title: "Static Electricity",
//     description: "Discover the power of static electricity",
//     gif: "/images/A leap of Creativity.png"
//   }
// ];

// About Section
const AboutSection = () => {
  const aboutIcons = [
    { icon: "science.jpg", text: "Science" },
    { icon: "experiment.png", text: "Experiments" },
    { icon: "community.jpg", text: "Community" },
    { icon: "education.avif", text: "Education" }
  ];

  return (
    <section id="about"  className="about-section">
      <div className="about-container">
        <h2>What is LSY?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Little Science Yard (LSY) is a unique initiative by AASRA that brings
              science education to underprivileged children in a fun, interactive
              way. Through hands-on experiments, demonstrations, and creative
              activities, we ignite curiosity and foster a love for learning in
              young minds.
            </p>
            <p>
              Our mission is to make science accessible, engaging, and exciting for
              all children, regardless of their background. By providing
              opportunities to explore scientific concepts through play and
              experimentation, we help build critical thinking skills and inspire
              the next generation of innovators.
            </p>
          </div>
          <div className="about-icons">
            {aboutIcons.map((item, index) => (
              <div key={index} className="icon-item" style={{
                backgroundImage: `url(/images/${item.icon})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <span className="icon-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Young Innovators Section
const YoungInnovatorsSection = () => {
  const youngInnovators = [
    {
      name: "Priya Sharma",
      age: 12,
      project: "Solar-Powered Water Purifier",
      quote: "I never thought I could build something that helps my community. LSY showed me that science can solve real problems.",
      image: "/images/ChhendVC-Aman.jpg",
      description: "Priya's innovative water purifier uses solar energy to filter contaminated water, making clean drinking water accessible to her village. Her project won the regional science fair and is being implemented in three nearby communities."
    },
    {
      name: "Rahul Patel",
      age: 10,
      project: "Eco-Friendly Plastic Alternative",
      quote: "I love how LSY lets us experiment and make mistakes. That's how I discovered my plastic alternative!",
      image: "/images/ShrutiPriya.png",
      description: "Rahul developed a biodegradable material made from agricultural waste that can replace single-use plastics. His invention has caught the attention of local environmental organizations and is being tested for commercial production."
    },
    {
      name: "Ananya Reddy",
      age: 11,
      project: "Smart Irrigation System",
      quote: "LSY taught me that science is everywhere, even in farming. My project helps farmers save water and grow better crops.",
      image: "/images/ContentHead-Nibedita.jpg",
      description: "Ananya's smart irrigation system uses sensors to detect soil moisture and automatically waters crops only when needed. This technology has helped farmers in her region reduce water consumption by 40% while increasing crop yields."
    },
    {
      name: "Amaan Khan",
      age: 9,
      project: "Wind-Powered Generator",
      quote: "I made a small windmill that can charge a phone! Science is so cool!",
      image: "/images/Sector21Cap-Hari.jpg",
      description: "Amaan's miniature wind-powered generator uses recycled materials to create electricity. His invention has inspired other children in his community to explore renewable energy solutions."
    }
  ];

  // return (
  //   <section className="innovators-section">
  //     <div className="innovators-container">
  //       <h2>Meet Our Young Innovators</h2>
  //       <div className="innovators-grid">
  //         {youngInnovators.map((innovator, index) => (
  //           <div key={index} className="innovator-card">
  //             <div className="innovator-image">
  //               <img src={innovator.image} alt={innovator.name} />
  //             </div>
  //             <div className="innovator-info">
  //               <h3>{innovator.name}, {innovator.age}</h3>
  //               <div className="workplace">{innovator.project}</div>
  //               <blockquote>{innovator.quote}</blockquote>
  //               <p>{innovator.description}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

// Behind the Scenes Section
const BehindScenesSection = () => {
  const processSteps = [
    {
      icon: "📋",
      title: "Planning",
      description: "Our team carefully designs each LSY event, selecting experiments and activities that align with educational goals.",
    },
    {
      icon: "🧪",
      title: "Prepping Science Kits",
      description: "We assemble individual science kits with all necessary materials, ensuring each child has their own equipment.",
    },
    {
      icon: "👩‍🏫",
      title: "Teaching & Facilitation",
      description: "Volunteers guide children through experiments, encouraging questions and critical thinking.",
    },
    {
      icon: "📊",
      title: "Feedback & Improvement",
      description: "We gather feedback from participants and continuously improve our programs based on their experiences.",
    },
  ];

  return (
    <section className="behind-scenes-section">
      <div className="behind-scenes-container">
        <h2>Behind the Scenes</h2>
        <div className="behind-scenes-content">
          {/* <div className="video-container">
            <video
              className="behind-scenes-video"
              controls
            >
              <source src="/videos/AASRA Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-icon">
                  <span className="card-icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Learning Outcomes Section
const LearningOutcomesSection = () => {
  const outcomes = [
    {
      icon: "🧠",
      title: "Critical Thinking",
      description: "Children learn to ask questions, make observations, and draw conclusions based on evidence.",
    },
    {
      icon: "🎨",
      title: "Creativity",
      description: "Experiments encourage creative problem-solving and innovative approaches to challenges.",
    },
    {
      icon: "💪",
      title: "Confidence",
      description: "Successfully completing experiments builds self-esteem and confidence in scientific abilities.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Group activities teach teamwork, communication, and sharing of ideas and resources.",
    },
    {
      icon: "🔍",
      title: "Curiosity",
      description: "Children develop a natural curiosity about the world and a desire to understand how things work.",
    },
    {
      icon: "🚀",
      title: "Career Awareness",
      description: "Exposure to various scientific fields helps children consider STEM careers for their future.",
    },
  ];

  return (
    <section className="learning-outcomes-section">
      <div className="learning-outcomes-container">
        <h2>What Kids Gain</h2>
        <div className="outcomes-grid">
          {outcomes.map((outcome, index) => (
            <div key={index} className="outcome-item">
              <div className="outcome-icon">
                <span className="card-icon">{outcome.icon}</span>
              </div>
              <h3>{outcome.title}</h3>
              <p>{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function LSY() {
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
    <div className="lsy-page">
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
              <img src="/LSY/LSY-1.jpg" alt="Kids with Science Models" />
            </div>
            <div>
              <img src="/LSY/LSY-2.jpg" alt="Science Experiments" />
            </div>
            <div>
              <img src="/LSY/LSY-3.jpg" alt="Volunteers Teaching" />
            </div>
          </Carousel>
        </div>
        <div className="hero-content">
          <h1>Little Science Yard</h1>
          <p>Nurturing Young Minds Through Wonder and Innovation</p>
          <div className="cta-buttons">
            <a href="#gallery" className="cta-button">See the Gallery</a>
            <a href="#about" className="cta-button secondary">How We Do It</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <h2>Past Exhibits Gallery</h2>
          <div className="gallery-grid">
            {pastExhibits.map((exhibit, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image">
                  <img src={exhibit.image} alt={exhibit.title} />
                  <div className="gallery-overlay">
                    {/* <h3>{exhibit.title}</h3> */}
                    {/* <p>{exhibit.year}</p> */}
                    {/* <p className="description">{exhibit.description}</p> */}
                    <h3>2024</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Young Innovators Section */}
      {/* <YoungInnovatorsSection /> */}

      {/* Behind the Scenes Section */}
      <BehindScenesSection />

      {/* Timeline Section */}
      {/* <section className="timeline-section">
        <div className="timeline-container">
          <div className="section-header">
            <h2>LSY Over the Years</h2>
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

      {/* Volunteer Voices Section */}
      {/* <section className="volunteer-voices-section">
        <div className="volunteer-voices-container">
          <h2>Volunteer Voices</h2>
          <div className="testimonials-grid">
            {volunteerQuotes.map((testimonial, index) => (
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

      {/* Mini Science Zone Section */}
      {/* <section className="science-zone-section">
        <div className="science-zone-container">
          <h2>Mini Science Zone</h2>
          <div className="experiments-grid">
            {scienceExperiments.map((experiment, index) => (
              <div key={index} className="experiment-item">
                <div className="experiment-gif">
                  <img src={experiment.gif} alt={experiment.title} />
                </div>
                <div className="experiment-info">
                  <h3>{experiment.title}</h3>
                  <p>{experiment.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="download-section">
            <h3>DIY Science at Home</h3>
            <p>Download our guide to try these experiments at home!</p>
            <div className="download-buttons">
              <a href="/pdfs/lsy-diy-guide-en.pdf" className="download-button">
                <i className="fas fa-file-pdf"></i> English Guide
              </a>
              <a href="/pdfs/lsy-diy-guide-hi.pdf" className="download-button">
                <i className="fas fa-file-pdf"></i> Hindi Guide
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Learning Outcomes Section */}
      <LearningOutcomesSection />

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Want to Contribute to LSY?</h2>
          <p>
            Join us in inspiring the next generation of scientists and innovators. Whether you're a student, professional, or science enthusiast, there are many ways to contribute to our mission.
          </p>
          <div className="cta-buttons">
            <a href="/volunteer" className="btn btn-primary">Become a Volunteer</a>
            <a href="/donate" className="btn btn-light">Donate Science Kits</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LSY; 