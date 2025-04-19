import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Sector06() {
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
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                  <p>Sector-06 News Feed</p>
                </div>
              </div>
            </div>

            <div className="sector_description">
              <h1 className="heading">More About Sector-06</h1>
              <p className="sector_para">
              AASRA wants to assist those impoverished kids In certain ways. One of its work locations in 2013 was Sector-6. It is one of those places where kids don't get the education they deserve because of poverty. Underdeveloped, albeit not quite a slum.Anyone can fall in love with this place because of the combination of mountain temples, tiny streams, and lush vegetation. Peace of mind is brought by the evening prayers, lighting, and temple bells. Spirituality is instilled at the lovely sacred site. Sector-6 also includes 'Jagannath Ashram.' The vast majority of people in this place are wage employees. By assisting 40 students with their academics, AASRA assists close to 35 families in Sector 6. Sector-6 is approximately 15Km from NIT campus area and auto is the common mode of transport. Every time family members come to visit, the kids greet them with smiles. Along with academics, the club instructs kids in a variety of other subjects. Everyone struggles in school, but many people excel in other pursuits like sports, dance, singing, etc. In order to improve their skill and knowledge in extracurricular activities, events such as athletics, dancing, debate, etc. are held in addition to academic ones. Children gladly participate in the activities in which they excel.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading">Sector-06 Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector6VCNimai.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Nimai</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector6Cap-ratnakar.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Ratnakar</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector6VCmahaprasad.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Mahaprasad</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Sector-06 Member's Name</h1>
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

export default Sector06;



