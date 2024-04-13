import React, { useState } from "react";
import "./Join.scss";
import { Link } from "react-router-dom";

function Join() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="join-container">
      <p className="heading">Choose Any Option For Registration</p>
      <div className="flex-card">
        <div
          className={`card ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <img src="./img/brand-login.png" className="join-img" />
          <p className="join-txt">
            I own or Represent Business looking for Reviewers or Influencers
          </p>
        </div>
        <div
          className={`card ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <img src="./img/influnacer-login.png" className="join-img" />
          <p className="join-txt">
            I am Influencers to Review your Product or Sevice
          </p>
        </div>
      </div>
      <div className="center-content">
        <input
          type="text"
          className="input-field"
          placeholder="Enter Mobile Number... "
        />
        <Link to="/">
          <button className={`create-btn ${activeTab === 1 ? "active" : ""}`}>
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Join;
