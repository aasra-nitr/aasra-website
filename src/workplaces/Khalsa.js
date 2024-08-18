import React, { useEffect, useState } from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
import workplaceData from "../components/workplaceData";
import { useParams } from "react-router-dom";


function Khalsa() {
  const [sector,setSector] = useState("");
  const params = useParams();

  useEffect(() => {
    const sectorElement = workplaceData.find((sector) => sector.heading === params.heading);
    setSector(sectorElement);
  },[params.heading])
  
  console.log(sector);

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
              <h1 className="heading"> More About Khalsa</h1>
              <p className="sector_para">
              As this session comes to a close, we look forward to our busy lives picking back up. We are all in terrible shape as a result of this year. Even in these trying times, the social service group AASRA, founded in 2005, has been working ceaselessly for the improvement of the youngsters from disadvantaged backgrounds. One such AASRA location where all employees are devoted and conscientious is KHALSA.In the year 2015, Khalsa opened as a location of employment. 7.3 kilometres separate it from NIT, Rourkela. This business, which at first had only a few members and kids, has grown to include up to 63 kids who are mentored by 20 members. When on campus, all members visit this dwelling four days a week as per the assigned time slots. As a unit, we, all the members and children, have been overcoming all the hurdles and obstacles in our way and will continue to do so.It has been easy sailing for everyone thanks to the capable leadership of our Captain and Vice-Captain. Due to the skillful work of our treasurer, who deserves praise for his efforts, there has never been a financial shortfall. We sincerely appreciate everything the seniors have done for this workplace throughout the years.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading">Khalsa Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/KhalsaVCBibek.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Bibek</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/KhalsaCap-Deba.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Debaprasad</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/KhalsaVCJagyasai.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Jagyasai</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Khalsa Member's Name</h1>
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

export default Khalsa;



