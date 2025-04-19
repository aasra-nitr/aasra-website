import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Magazine.scss";
import PDFThumbnail from '../components/PDFThumbnail';

const Magazine = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMagazine, setSelectedMagazine] = useState(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Magazine data
  const magazines = [
    {
      id: 1,
      title: "AASRA 2025",
      cover: "/images/magazine-2025.png",
      description: "Our latest annual magazine showcasing AASRA's impact and initiatives",
      pdfUrl: "/pdfs/magazines/aasra-2025.pdf"
    },
    {
      id: 2,
      title: "AASRA 2024",
      cover: "/images/magazine-2024.png",
      description: "A year of growth, innovation, and community impact",
      pdfUrl: "/pdfs/magazines/aasra-2024.pdf"
    },
    {
      id: 3,
      title: "AASRA 2023",
      cover: "/images/magazine-2023.png",
      description: "Celebrating our journey and achievements",
      pdfUrl: "/pdfs/magazines/aasra-2023.pdf"
    },
    {
      id: 4,
      title: "AASRA 2022",
      cover: "/images/magazine-2022.png",
      description: "Adapting and thriving in challenging times",
      pdfUrl: "/pdfs/magazines/aasra-2022.pdf"
    },
    {
      id: 5,
      title: "AASRA 2021",
      cover: "/images/magazine-2021.png",
      description: "Our inaugural magazine issue",
      pdfUrl: "/pdfs/magazines/aasra-2021.pdf"
    }
    // {
    //   id: 6,
    //   title: "AASRA 2020",
    //   cover: "/images/magazine-2020.png",
    //   description: "Our inaugural magazine issue",
    //   pdfUrl: "/pdfs/magazines/aasra-2020.pdf"
    // }
  ];

  // Handle magazine click
  const handleMagazineClick = (magazine) => {
    setSelectedMagazine(magazine);
  };

  // Close modal
  const closeModal = () => {
    setSelectedMagazine(null);
  };

  // Render magazine grid for desktop
  const renderMagazineGrid = () => {
    return (
      <div className="magazine-grid">
        {magazines.map((magazine) => (
          <div 
            key={magazine.id} 
            className="magazine-item"
            onClick={() => handleMagazineClick(magazine)}
          >
            <div className="magazine-cover">
              <img src={magazine.cover} alt={magazine.title} />
              <div className="magazine-overlay">
                <button className="view-button">View Magazine</button>
              </div>
            </div>
            <h3>{magazine.title}</h3>
            <p>{magazine.description}</p>
          </div>
        ))}
      </div>
    );
  };

  // Render magazine carousel for mobile
  const renderMagazineCarousel = () => {
    return (
      <div className="magazine-carousel-container">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={70}
          emulateTouch={true}
          swipeable={true}
          dynamicHeight={false}
          selectedItem={0}
          interval={5000}
          autoPlay={false}
          onClickItem={(index) => handleMagazineClick(magazines[index])}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="carousel-arrow carousel-arrow-prev"
              >
                <span>‹</span>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="carousel-arrow carousel-arrow-next"
              >
                <span>›</span>
              </button>
            )
          }
        >
          {magazines.map((magazine) => (
            <div key={magazine.id} className="carousel-magazine">
              <div className="magazine-cover">
                <img src={magazine.cover} alt={magazine.title} />
                <div className="magazine-overlay">
                  <button className="view-button">View Magazine</button>
                </div>
              </div>
              <h3>{magazine.title}</h3>
              <p>{magazine.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  // Render magazine modal
  const renderMagazineModal = () => {
    if (!selectedMagazine) return null;

    return (
      <div className="magazine-modal-overlay" onClick={closeModal}>
        <div className="magazine-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={closeModal}>×</button>
          <h2>{selectedMagazine.title}</h2>
          <div className="magazine-viewer">
            <iframe 
              src={selectedMagazine.pdfUrl} 
              title={selectedMagazine.title}
              width="100%" 
              height="600px" 
              frameBorder="0"
            />
          </div>
          <div className="magazine-actions">
            <a 
              href={selectedMagazine.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-button"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="magazine-page">
      <section className="magazine-hero" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/magazines/magazine-hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="magazine-hero-content">
          <h1>Our Annual Magazines</h1>
          <p>A glimpse into AASRA's yearly impact and initiatives</p>
        </div>
      </section>

      <section className="magazine-section">
        <div className="magazine-container">
          {isMobile ? renderMagazineCarousel() : renderMagazineGrid()}
        </div>
      </section>

      {renderMagazineModal()}
    </div>
  );
};

export default Magazine; 