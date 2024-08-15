import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Sector02() {
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
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                  <p>sector-02 news feed</p>
                </div>
              </div>
            </div>

            <div className="sector_description">
              <h1 className="heading"> More About Sector-02</h1>
              <p className="sector_para">
              The social service organisation AASRA has been a part of NIT Rourkela for a long time. Since its inception on January 26, 2005, the organisation has touched many people's lives and worked relentlessly to achieve its goal of elevating the impoverished part BECAUSE THEY NEED US. There are currently seven workplaces, Sector-2 being one of them.AASRA developed Sector-2 workplace in 2014 with the assistance of Father Benny (chairperson of CWS hospital).  It is the location of employment that is located the closest to NIT Rourkela. The employer had a lot of trouble managing the kids when there were initially only about 15 of them. At first, only Sector-2 had daily inspections, Monday through Saturday, omitting Sunday.The children of Sector-2 have persevered despite all circumstances and stood out like gems among rocks. For the entire workplace, they have achieved success. The workplace in Sector-2 has evolved into a family for everyone. Most of the participants feel an emotional connection to the children. Because of their frequent interactions, the members and children have developed a close bond. The success of the children in life has evolved into a goal for the group. Because of this, each employee in sector 2 offers the workplace's kids his or her all.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading">Sector-02 Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector2VC-Trishna.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Trishna</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector2Cap-Shameem.jpeg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Shameem</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector2VC - Birkishor Sahu.jpeg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Birkishor</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Sector-02 Member's Name</h1>
              <div className="members_name_container">
                <span className="sector_member">Smruti Ranjan Das</span>
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

export default Sector02;



