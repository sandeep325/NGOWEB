import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./SubComponent/MissionCard";
import LatestFundraisers from "./SubComponent/LatestFundraisers";
import LatestDonations from "./SubComponent/LatestDonations";
import StoryCard from "./SubComponent/StoryCard";
import LatestNews from "./SubComponent/LatestNews";
import ValenteerForm from "./SubComponent/ValenteerForm";
const Donate = () =>{

    return (
        <>
          <div class="block-31" style={{position: "relative"}}>
    <div class="owl-carousel loop-block-31 ">
      <div class="block-30 block-30-sm item" style={{backgroundImage: "url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center justify-content-center text-center">
            <div class="col-md-7">
              <h2 class="heading">Better To Give Than To Receive</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>

<LatestDonations/>,
<ValenteerForm/>  
        </>
    );
}
export default Donate;