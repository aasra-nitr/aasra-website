import React from "react";
import "../css/Sector.scss";
import { Carousel } from "react-responsive-carousel";
// import workplaceData from "../components/workplaceData";
// import { useParams } from "react-router-dom";


function Jagda() {
  // const [sector,setSector] = useState("");
  // const params = useParams();

  // useEffect(() => {
  //   const sectorElement = workplaceData.find((sector) => sector.heading === params);
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
              <h1 className="heading"> More About Jagda</h1>
              <p className="sector_para">
              Jagda is one of the workplaces of employment where teaching and learning are ongoing throughout the year. The 'Service To Humanity Foundation' or 'Manav Seva Pratisthan' is the name of the orphanage where Jagda works. Numerous kids with a single parent or financial difficulties are also housed at the ashram. Dr. Acharya, an academic at the Dr. Ambedkar Institute in Jagda, is in charge of running the orphanage. He lives in the shelter himself. With established daily time schedules, food charts, and other procedures, the facility is well-organized. The children reflect the regimented surroundings. Additionally, it includes a projector to go with the computer as well as accommodations for the youngsters to occasionally use the internet. Additionally, the quality of life is fairly good.Every member of the group has been given a specific topic to educate the pupils in class 10, who are the main focus. To guarantee that their education continues, all other children receive continuous supervision and guidance.
              </p>
            </div>
            <div className="sector_head_section">
              <h1 className="heading"> Jagda Post Holder </h1>
              <div className="sector_head_container">
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/jagdaVC-Krishnanand.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Krishnanand</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/avatar.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Abishek</p>
                    <p>Captain</p>
                  </div>
                </div>
                <div className="head_box">
                  <div className="head_image">
                    <img src="../images/JagdaVC-Dambrudhar.jpg" alt="head Image1" />
                  </div>
                  <div className="sector_post_holder">
                    <p>Dambrudhara</p>
                    <p>Vice-Captain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sector_members_section">
              <h1 className="heading">Jagda Member's Name</h1>
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

export default Jagda;



