import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./SubComponent/MissionCard";
// import LatestFundraisers from "./SubComponent/LatestFundraisers";
// import LatestDonations from "./SubComponent/LatestDonations";
// import StoryCard from "./SubComponent/StoryCard";
// import LatestNews from "./SubComponent/LatestNews";
// import ValenteerForm from "./SubComponent/ValenteerForm";
const About = () =>{

    return (
        <>
   <div class="block-31" style={{position: "relative"}}>
    <div class="owl-carousel loop-block-31 ">
      <div class="block-30 block-30-sm item" style={{backgroundImage: "url('images/bg_2.jpg')"}} data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7 text-center">
              <h2 class="heading">About The Organization</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="site-section mb-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12 mb-5"><h1>Our History</h1></div>
        <div class="col-md-6">
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>
            <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.</p>
            
          </div>
          <div class="col-md-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, necessitatibus officiis facere nisi et, ut adipisci a quis quisquam vitae doloremque tempora repellat quae accusantium atque eum voluptatibus aperiam cumque.</p>
            <p>Quia ratione, eum harum ab similique mollitia, nisi itaque vel voluptas ipsam dolore perferendis. Deleniti voluptatum error possimus ipsum, sed, obcaecati. Sit unde quia eum repudiandae molestiae reprehenderit harum nesciunt.</p>
          </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-md-12 mb-5 text-center mt-5">
          <h2>Leadership</h2>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-38 text-center">
            <div class="block-38-img">
              <div class="block-38-header">
                <img src="images/person_1.jpg" alt="Image placeholder"/>
                <h3 class="block-38-heading">Greeg Graham</h3>
                <p class="block-38-subheading">CEO</p>
              </div>
              <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-38 text-center">
            <div class="block-38-img">
              <div class="block-38-header">
                <img src="images/person_2.jpg" alt="Image placeholder"/>
                <h3 class="block-38-heading">Jennifer Greive</h3>
                <p class="block-38-subheading">President</p>
              </div>
              <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-38 text-center">
            <div class="block-38-img">
              <div class="block-38-header">
                <img src="images/person_3.jpg" alt="Image placeholder"/>
                <h3 class="block-38-heading">Patrick Marx</h3>
                <p class="block-38-subheading">Marketer</p>
              </div>
              <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-38 text-center">
            <div class="block-38-img">
              <div class="block-38-header">
                <img src="images/person_4.jpg" alt="Image placeholder"/>
                <h3 class="block-38-heading">Mike Coolbert</h3>
                <p class="block-38-subheading">Partner</p>
              </div>
              <div class="block-38-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="site-section">
    <div class="container">
      <div class="block-31 mb-5" style={{position: "relative"}}>
          <div class="owl-carousel loop-block-31">
            <div class="block-30 no-overlay item" style={{backgroundImage: "url('images/bg_2.jpg')"}}></div>
            <div class="block-30 no-overlay item" style={{backgroundImage: "url('images/bg_1.jpg')"}}></div>
            <div class="block-30 no-overlay item" style={{backgroundImage: "url('images/bg_3.jpg')"}}></div>
          </div>
        </div>
    </div>
  </div>
  <MissionCard/>
  
        </>
    );
}
export default About;