import React from "react";
import { Link } from "react-router-dom";
import MissionCard from "./SubComponent/MissionCard";
import LatestFundraisers from "./SubComponent/LatestFundraisers";
import LatestDonations from "./SubComponent/LatestDonations";
import StoryCard from "./SubComponent/StoryCard";
import LatestNews from "./SubComponent/LatestNews";
import ValenteerForm from "./SubComponent/ValenteerForm";
const Gallery = () =>{

    return (
        <>
        <div class="block-31" style={{position: "relative"}}>
<div class="owl-carousel loop-block-31 ">
  <div class="block-30 block-30-sm item" style={{backgroundImage: "url('images/bg_1.jpg')"}} data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-md-7">
          <h2 class="heading">Our Gallery</h2>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>

{/* images */}



<div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <Link to="images/img_1.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_2.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_3.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_3.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_4.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_4.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>

        <div class="col-md-4">
          <Link to="images/img_1.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_2.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>

         <div class="col-md-4">
          <Link to="images/img_1.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_2.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_3.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_3.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_4.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_4.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>

        <div class="col-md-4">
          <Link to="images/img_1.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
        <div class="col-md-4">
          <Link to="images/img_2.jpg" class="img-hover" data-fancybox="gallery">
            <span class="icon icon-search"></span>
            <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid"/>
          </Link>
        </div>
      </div>
    </div>
  </div>
<ValenteerForm/>
  
        </>
    );
}
export default Gallery;