import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Sector21() {
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
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                  <p>Sector-21 News Feed</p>
                </div>
              </div>
            </div>

            <div className="sector_description">
              <h1 className="heading"> More About Sector-21</h1>
              <p className="sector_para">
              AASRA was started in 2005 by a group of five young enthusiasts, and over time it grew into a massive family with hundreds of students and a wide-ranging alumni network. With the goal of helping out the less fortunate members of society, it was started with the mission of giving young people access to education and senior citizens work prospects. Sector 21 is one of AASRA's eight workplaces, which it now occupies despite its tremendous growth.In sector 21, the leprosy colony serves as AASRA's office. Because of the intractable illness that some of the residents there have, the slum has that name. In some cases, slum kids lied about their residence in order to gain acceptance from the community or to be given permission to pay tuition and attend school.Therefore, the members of sector-21 working cooperatively with members of other AASRA workplaces not only visit the workplace on a regular basis to teach the children for free but also celebrate festivals, inspire and support the people in the slum, inform them about employment opportunities, basic cleanliness, etc., provide seasonal employment through the Diya project, train the slum dwellers for various competitions like TET, Navodaya Entrance Exam, etc., organise various events, and so on.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading"> Sector-21 Post Holder</h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector21Vc-archita.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Archita</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector21Cap-Hari.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Hari</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/Sector21Vc-Sruti.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Srutisudha</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Sector-21 Member's Name</h1>
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

export default Sector21;



