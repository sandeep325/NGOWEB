import React from "react";
import { Link } from "react-router-dom";
const MissionCard = () => {

    return (
        <>
              <div className="site-section border-top">
    <div className="container">
      <div className="row">

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-bulb"></span></div>
            <div className="media-body">
              <h3 className="heading">Our Mission</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><Link to="#" className="link-underline">Learn More</Link></p>
            </div>
          </div>     
        </div>

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-cash"></span></div>
            <div className="media-body">
              <h3 className="heading">Make Donations</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><Link to="#" className="link-underline">Learn More</Link></p>
            </div>
          </div>  
        </div>

        <div className="col-md-4">
          <div className="media block-6">
            <div className="icon"><span className="ion-ios-contacts"></span></div>
            <div className="media-body">
              <h3 className="heading">We Need Volunteers</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><Link to="#" className="link-underline">Learn More</Link></p>
            </div>
          </div> 
        </div>

      </div>
    </div>
  </div>
        </>
    );
}
export default MissionCard;