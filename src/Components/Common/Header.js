import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
       return(
       <>
       {/* <h3>test here</h3> */}
       <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <Link className="navbar-brand" to="/">GiveHope</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/howit_work" className="nav-link">How It Works</Link></li>
          <li className="nav-item"><Link to="/donate" className="nav-link">Donate</Link></li>
          <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="nav-item"><Link to="/bloglist" className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
       </>

       );

}
export default Header;