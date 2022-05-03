import React from "react";
import { Link } from "react-router-dom";
const LatestFundraisers = () => {

    return (
        <>
            <div className="site-section fund-raisers bg-light">
    <div className="container">
      <div className="row mb-3 justify-content-center">
        <div className="col-md-8 text-center">
          <h2>Latest Fundraisers</h2>
          <p className="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p><Link to="#" className="link-underline">View All Fundraisers</Link></p>
        </div>
      </div>
    </div>

    <div className="container-fluid">


        
        <div className="col-md-12 block-11">
          <div className="nonloop-block-11 owl-carousel">

            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_1.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Water Is Life. Clean Water In Urban Area</Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>

            
            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_7.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Need Shelter for Children in Africa</Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>
            
            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_3.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Children Needs Education</Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>


            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_4.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Refugees Needs Food</Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>

            
            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_6.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Voluteer </Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>
            
            <div className="card fundraise-item">
              <Link to="#"><img className="card-img-top" src="images/img_3.jpg" alt="Image placeholder"/></Link>
              <div className="card-body">
                <h3 className="card-title"><Link to="#">Children Needs Food</Link></h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                <div className="progress custom-progress-success">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <span className="fund-raised d-block">$12,000 raised of $30,000</span>
              </div>
            </div>
           
          </div>
        </div>

    </div>
  </div>
        </>
    );
}
export default LatestFundraisers;