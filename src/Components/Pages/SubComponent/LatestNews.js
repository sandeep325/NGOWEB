import React from "react";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <>
           <div class="site-section bg-light">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <h2>Latest News</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div class="post-entry">
            <Link to="#" class="mb-3 img-wrap">
              <img src="images/img_4.jpg" alt="Image placeholder" class="img-fluid"/>
            </Link>
            <h3><Link to="#">Be A Volunteer Today</Link></h3>
            <span class="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><Link to="#" class="link-underline">Read More</Link></p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div class="post-entry">
            <Link to="#" class="mb-3 img-wrap">
              <img src="images/img_5.jpg" alt="Image placeholder" class="img-fluid"/>
            </Link>
            <h3><Link to="#">You May Save The Life of A Child</Link></h3>
            <span class="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><Link to="#" class="link-underline">Read More</Link></p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <div class="post-entry">
            <Link to="#" class="mb-3 img-wrap">
              <img src="images/img_6.jpg" alt="Image placeholder" class="img-fluid"/>
            </Link>
            <h3><Link to="#">Children That Needs Care</Link></h3>
            <span class="date mb-4 d-block text-muted">July 26, 2018</span>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <p><Link to="#" class="link-underline">Read More</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>
    );
}
export default LatestNews;
