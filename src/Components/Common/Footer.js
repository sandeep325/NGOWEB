import React from "react";
import { Link } from "react-router-dom";
const Footer = () =>{

    return(
        <>
              <footer className="footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-6 col-lg-4">
          <h3 className="heading-section">About Us</h3>
          <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
          <p className="mb-5">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p><Link to="#" className="link-underline">Read  More</Link></p>
        </div>
        <div className="col-md-6 col-lg-4">
          <h3 className="heading-section">Recent Blog</h3>
          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="images/img_1.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><Link to="#">Water Is Life. Clean Water In Urban Area</Link></h3>
              <div className="meta">
                <div><Link to="#"><span className="icon-calendar"></span> July 29, 2018</Link></div>
                <div><Link to="#"><span className="icon-person"></span> Admin</Link></div>
                <div><Link to="#"><span className="icon-chat"></span> 19</Link></div>
              </div>
            </div>
          </div>

          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="images/img_2.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><Link to="#">Life Is Short So Be Kind</Link></h3>
              <div className="meta">
                <div><Link to="#"><span className="icon-calendar"></span> July 29, 2018</Link></div>
                <div><Link to="#"><span className="icon-person"></span> Admin</Link></div>
                <div><Link to="#"><span className="icon-chat"></span> 19</Link></div>
              </div>
            </div>
          </div>

          <div className="block-21 d-flex mb-4">
            <figure className="mr-3">
              <img src="images/img_4.jpg" alt="" className="img-fluid"/>
            </figure>
            <div className="text">
              <h3 className="heading"><Link to="#">Unfortunate Children Need Your Love</Link></h3>
              <div className="meta">
                <div><Link to="#"><span className="icon-calendar"></span> July 29, 2018</Link></div>
                <div><Link to="#"><span className="icon-person"></span> Admin</Link></div>
                <div><Link to="#"><span className="icon-chat"></span> 19</Link></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="block-23">
            <h3 className="heading-section">Get Connected</h3>
              <ul>
                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
                <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
              </ul>
            </div>
        </div>
        
        
      </div>
      <div className="row pt-5">
        <div className="col-md-12 text-center">
          
            <p>
            
            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-ios-heart text-danger" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank" >Colorlib</Link>
            
            </p>
          
        </div>
      </div>
    </div>
  </footer>

  <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

        </>
    );
}
export default Footer;