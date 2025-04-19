import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Sector05() {
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
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                  <p>Sector-05 News Feed</p>
                </div>
              </div>
            </div>

            <div className="sector_description">
              <h1 className="heading">More About Sector-05</h1>
              <p className="sector_para">
              An AASRA workplace is located in Chhend. The campus is 11 kilometres away. Aasraites take a auto to Chhend. Currently, we travel to Chhend every Saturday and Sunday eight times every month. Chhend is an orphanage, and Pradeep sir, an ex-member of the Child Welfare Committee, currently looks after it. There are around 18 kids in Chhend, are actively using our programme.Chhend was the subject of numerous worries, and financial issues were the source of all those disputes. To sustain this workplace, not enough money is available. The treasurer pays the most attention to Chhend at work. Insofar as the workplace's active employees are concerned, the sum received as monthly contributions is adequate, but not enough. We were successful in visiting both of the workplaces, sector 5 and Chhend. We frequently ran out of money trying to keep a positive relationship with those places of employment.In contrast to every other workplace, Chhend's circumstance is completely unique. The kids in this place were extremely reclusive (their world consisted of just their school and their workplace).
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading">Sector-05 Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/ChhendVC-Aman.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Aman</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/ChhendCap-Priyanka.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Priyanka</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/ChhendVC-Himanshu.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Himanshu</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Sector-05 Member's Name</h1>
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

export default Sector05;



