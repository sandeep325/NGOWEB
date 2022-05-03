import React from "react";
import { Link } from "react-router-dom";
const ValenteerForm = () => {
    return (
        <>

<div class="featured-section overlay-color-2" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
    
    <div class="container">
      <div class="row">

        <div class="col-md-6 mb-5 mb-md-0">
          <img src="images/bg_2.jpg" alt="Image placeholder" class="img-fluid"/>
        </div>

        <div class="col-md-6 pl-md-5">

          <div class="form-volunteer">
            
            <h2>Be A Volunteer Today</h2>
            <form action="#" method="post">
              <div class="form-group">
                <input type="text" class="form-control py-2" id="name" placeholder="Enter your name"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control py-2" id="email" placeholder="Enter your email"/>
              </div>
              <div class="form-group">
                <textarea name="v_message" id="" cols="30" rows="3" class="form-control py-2" placeholder="Write your message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-white px-5 py-2" value="Send"/>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>

  </div>
        </>
    );
}
export default ValenteerForm;
