import React from "react";
import { Link } from "react-router-dom";
const LatestDonations = () => {

    return (
        <>
        
        <div class="site-section fund-raisers">
    <div class="container">
      <div class="row mb-3 justify-content-center">
        <div class="col-md-8 text-center">
          <h2>Latest Donations</h2>
          <p class="lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="mb-5"><Link to="#" class="link-underline">View All Donations</Link></p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 mb-5">
          <div class="person-donate text-center">
            <img src="images/person_1.jpg" alt="Image placeholder" class="img-fluid"/>
            <div class="donate-info">
              <h2>Jorge Smith</h2>
              <span class="time d-block mb-3">Donated Just now</span>
              <p>Donated <span class="text-success">$252</span> <br/> <em>for</em> <Link to="#" class="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</Link></p>
            </div>
          </div>    
        </div>

        <div class="col-md-6 col-lg-3 mb-5">
          <div class="person-donate text-center">
            <img src="images/person_2.jpg" alt="Image placeholder" class="img-fluid"/>
            <div class="donate-info">
              <h2>Christine Charles</h2>
              <span class="time d-block mb-3">Donated 1 hour ago</span>
              <p>Donated <span class="text-success">$400</span> <br/> <em>for</em> <Link to="#" class="link-underline fundraise-item">Children Needs Education</Link></p>
            </div>
          </div>    
        </div>

        <div class="col-md-6 col-lg-3 mb-5">
          <div class="person-donate text-center">
            <img src="images/person_3.jpg" alt="Image placeholder" class="img-fluid"/>
            <div class="donate-info">
              <h2>Albert Sluyter</h2>
              <span class="time d-block mb-3">Donated 4 hours ago</span>
              <p>Donated <span class="text-success">$1,200</span> <br/> <em>for</em> <Link to="#" class="link-underline fundraise-item">Need Shelter for Children in Africa</Link></p>
            </div>
          </div>    
        </div>

        <div class="col-md-6 col-lg-3 mb-5">
          <div class="person-donate text-center">
            <img src="images/person_4.jpg" alt="Image placeholder" class="img-fluid"/>
            <div class="donate-info">
              <h2>Andrew Holloway</h2>
              <span class="time d-block mb-3">Donated 9 hours ago</span>
              <p>Donated <span class="text-success">$100</span> <br/> <em>for</em> <Link to="#" class="link-underline fundraise-item">Water Is Life. Clean Water In Urban Area</Link></p>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
        </>
    );
}
export default LatestDonations;