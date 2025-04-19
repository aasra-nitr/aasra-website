import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Osap() {
  // const [sector,setSector] = useState("");
  // const params = useParams();

  // useEffect(() => {
  //   const sectorElement = workplaceData.find((sector) => sector.heading === params.heading);
  //   setSector(sectorElement);
  // },[params.heading])
  
  // console.log(sector);

  return (
    <>
    <section className="sector_section">
            <div className="sector_homepage">
              <div className="sector_gallery">
                <Carousel
                  transitionTime={500}
                  showThumbs={false}
                  autoPlay={true}
                  showArrows={false}
                  infiniteLoop={true}
                  showStatus={false}
                >
                  <div className="sector_image">
                    <img src="../images/gallery_image_1.jpg" alt="fgknfkng 1" />
                  </div>
                  <div className="sector_image">
                    <img src="../images/gallery_image_2.jpg" alt="fgknfkng 2" />
                  </div>
                  <div className="sector_image">
                    <img src="../images/gallery_image_3.jpg" alt="fgknfkng 3" />
                  </div>
                </Carousel>
              </div>
              <div className="sector_newsFeed">
                <div className="newsFeed_heading">
                  <h3>News Feed</h3>
                </div>
                <div className="newsFeed_description">
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                  <p>Osap News Feed</p>
                </div>
              </div>
            </div>

            <div className="sector_description">
              <h1 className="heading">More About OSAP</h1>
              <p className="sector_para">
              The AASRA family has expanded significantly over the past few years, and OSAP is now one of seven workplaces where it offers its services.Located around 6-7km from the NITR campus, OSAP is one of the first Aasra workplaces and was established back in the organization's early years. It offers a quiet village vibe and is surrounded by stunning mountains and nature. Named after the Odisha Special Armed Police colony where it is located, the place of business. The forest department, SAIL, and OSAP share ownership of all OSAP work sites. The OSAP community is home to 45 to 55 families. It is one of those underdeveloped locations where kids don't get the opportunities and education they need. Daily wage employees make up the majority of the population here. By frequently attending the workplace for three to four days a week, the workplace's 40 members work together to give the kids a better educational foundation.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading">OSAP Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/OsapVcPratyasha.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Pratyasha</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/OsapCapShubham.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Shubham</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/OsapVcSushmita.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Sushmita</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">OSAP Member's Name</h1>
              <div className="members_name_container">
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
                <span className="sector_member">member name</span>
              </div>
            </div>
          </section> 
    </>
  );
}

export default Osap;



