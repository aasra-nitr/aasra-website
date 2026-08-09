import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import workplaceData from "./workplaceData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/Sector.scss";

function SectorDetail() {
  const { slug } = useParams();
  const [sector, setSector] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    const foundSector = workplaceData.find((item) => item.slug === slug);
    setSector(foundSector);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="sector_loading">Loading...</div>;
  }

  if (!sector) {
    return <Navigate to="/workplaces" replace />;
  }

  return (
    <section className="sector_page_wrap">
      {/* Hero Section */}
      <div className="sector_hero">
        <Carousel
          transitionTime={700}
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
          className="sector_carousel"
        >
          {/* We use generic gallery images for now, as they were the same across all pages */}
          <div className="carousel_slide">
            <img src="/images/gallery_image_1.jpg" alt={`${sector.heading} gallery 1`} />
          </div>
          <div className="carousel_slide">
            <img src="/images/gallery_image_2.jpg" alt={`${sector.heading} gallery 2`} />
          </div>
          <div className="carousel_slide">
            <img src="/images/gallery_image_3.jpg" alt={`${sector.heading} gallery 3`} />
          </div>
        </Carousel>
        <div className="sector_hero_overlay">
          <div className="page-section">
            <span className="eyebrow reveal">Workplace</span>
            <h1 className="hero_title reveal">{sector.heading}</h1>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="sector_content_wrap">
        <div className="page-section">
          <div className="sector_description reveal">
            <h2 className="section-heading">About {sector.heading}</h2>
            <p className="description_text">{sector.description}</p>
          </div>
        </div>
      </div>

      {/* Post Holders Section */}
      {sector.postHolders && sector.postHolders.length > 0 && (
        <div className="sector_leaders_wrap">
          <div className="page-section">
            <div className="section-intro reveal">
              <span className="section-eyebrow">Leadership</span>
              <h2 className="section-heading">Post Holders</h2>
            </div>
            
            <div className="leaders_grid">
              {sector.postHolders.map((leader, index) => (
                <div 
                  key={index} 
                  className={`leader_card premium-card reveal ${!leader.name ? 'empty_leader' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="leader_avatar">
                    <img 
                      src={leader.image || '/images/avatar.jpg'} 
                      alt={leader.name || 'AASRA Member'} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="leader_info">
                    <h3 className="leader_name">{leader.name || "AASRA Member"}</h3>
                    <span className="leader_role">{leader.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SectorDetail;
