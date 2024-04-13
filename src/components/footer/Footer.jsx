import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top">
        <div className="leftside">
          <p className="follow-txt">Follow Us</p>
          <div className="social-img">
            <img src="./img/whatsaap.png" className="social-icon" />
            <img src="./img/facebook.png" className="social-icon" />
            <img src="./img/youtube.png" className="social-icon" />
            <img src="./img/instagram.png" className="social-icon" />
          </div>
        </div>
        <div className="rightside">
          <div className="social-img">
            <img src="./img/conatct.png" className="social-icon" />
          </div>
          <p className="conatct-txt">Contact us</p>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div className="footer-left">
          <span className="logo-text1">
            Influ<span className="logo-text2">Tales</span>
          </span>
        </div>
        <div className="footer-center">Copyright © InfluTales Pvt Ltd. 2024 </div>
        <div className="footer-right">Privacy Policy | Terms of Service</div>
      </div>
    </div>
  );
}

export default Footer;
