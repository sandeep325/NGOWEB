import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./SubComponent/MissionCard";
import LatestFundraisers from "./SubComponent/LatestFundraisers";
import LatestDonations from "./SubComponent/LatestDonations";
import StoryCard from "./SubComponent/StoryCard";
import LatestNews from "./SubComponent/LatestNews";
import ValenteerForm from "./SubComponent/ValenteerForm";
const Home = () =>{

    return (
        <>

<div class="block-31" style={{position: "relative"}}>
    <div class="owl-carousel loop-block-31 ">
      <div class="block-30 block-30-sm item" style={{backgroundImage: "url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="heading mb-5">Free Website Template for Charity Websites.</h2>
              <p style={{display: "inline-block"}}><Link to="https://vimeo.com/channels/staffpicks/93951774"  data-fancybox class="ftco-play-video d-flex"><span class="play-icon-wrap align-self-center mr-4"><span class="ion-ios-play"></span></span> <span class="align-self-center">Watch Video</span></Link></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
{/* <div>IMAGE BACKGROUND IMAGE HERE </div> */}

         <div className="site-section section-counter">
    <div className="container">
      <div className="row">
        <div className="col-md-6 pr-5">
          <div className="block-48">
              <span className="block-48-text-1">Served Over</span>
              <div className="block-48-counter ftco-number" data-number="1321901">0</div>
              <span className="block-48-text-1 mb-4 d-block">Children in 150 Countries</span>
              <p className="mb-0"><Link to="#" className="btn btn-white px-3 py-2">View Our Program</Link></p>
            </div>
        </div>
        <div className="col-md-6 welcome-text">
          <h2 className="display-4 mb-3">Who Are We?</h2>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. </p>
          <p className="mb-0"><Link to="#" className="btn btn-primary px-3 py-2">Learn More</Link></p>
        </div>
      </div>
    </div>
  </div>


<MissionCard/>,
<LatestFundraisers/>,
<LatestDonations/>,
<StoryCard/>,
<LatestNews/>,
<ValenteerForm/>
  
        </>
    );
}
export default Home;