import React from "react";
import "./Featured.scss";
import { Link } from "react-scroll";
function Featured() {
  return (
    <div className="featured-container">
      <div className="left">
        <h1 className="heading1">
          We Grow Brands <br /> with the <br /> Best Influencers
        </h1>
        <div className="avatar-con">
          <img src="./img/avatar.png" className="avatar-img" />
          <p className="avatar-txt">50k+ Influencer Network</p>
        </div>
        <div className="Mobile-number-field">
          <input
            type="text"
            className="input-field"
            placeholder="Enter Mobile Number... "
          />
          <Link to="section1" smooth={true} duration={500}>
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <img src="./img/infulancer.png" className="plant-img" />
      </div>
    </div>
  );
}

export default Featured;
