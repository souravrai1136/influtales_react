import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Join from "../../components/Join/Join";
import BrandSlide from "../../components/slide/BrandSlide";
import InflunacerSlide from "../../components/slide/InflunacerSlide";
import { Link, Element } from "react-scroll";

function Home() {
  const BrandData = [
    {
      ImageNo: "1/5",
      ImageName: "attributed to a number of factors",
      ImageSrc: "./img/nike.png",
    },
    {
      ImageNo: "2/5",
      ImageName: "rooming products specifically designed for men.",
      ImageSrc: "./img/dove.png",
    },
    {
      ImageNo: "3/5",
      ImageName: "made from ground peanuts that have been roasted.",
      ImageSrc: "./img/peanut-butter.png",
    },
    {
      ImageNo: "4/5",
      ImageName: "a versatile grooming companion.",
      ImageSrc: "./img/trimmer.png",
    },
    {
      ImageNo: "5/5",
      ImageName: " listening to a wide variety of music genres",
      ImageSrc: "./img/jbl-speaker.png",
    },
  ];
  const InfulancerData = [
    {
      ImageNo: "1/5",
      ImageName: "attributed to a number of factors",
      ImageSrc: "./img/infulancer01.png",
    },
    {
      ImageNo: "2/5",
      ImageName: "rooming products specifically designed for men.",
      ImageSrc: "./img/infulancer02.png",
    },
    {
      ImageNo: "3/5",
      ImageName: "made from ground peanuts that have been roasted.",
      ImageSrc: "./img/infulancer03.png",
    },
    {
      ImageNo: "4/5",
      ImageName: "a versatile grooming companion.",
      ImageSrc: "./img/infulancer04.png",
    },
    {
      ImageNo: "5/5",
      ImageName: "listening to a wide variety of music genres",
      ImageSrc: "./img/infulancer05.png",
    },
  ];
  return (
    <div className="home">
      <Featured />
      <div className="features-container">
        <div className="left-item brand-bg">
          {/* <img className="green-gig-img" src="./img/brands-prduct-bg.png" /> */}
          <BrandSlide BrandData={BrandData} SlideInterValTime={3000} />
        </div>
        <div className="right-item">
          <h1 className="web-heading">
            Unlock the power of
            <span className="influencer-txt"> Influencers</span>
            <br /> to promote your
            <span className="brand-txt"> Brand</span>
          </h1>
          <h1 className="mobile-heading">
            Unlock the power of
            <span className="influencer-txt"> Influencers </span>
            To promote your
            <span className="brand-txt"> Brand</span>
          </h1>
          <ul className="ul-list">
            <li className="li-list">
              Get your product noticed by influential voices
            </li>
            <li className="li-list">
              Boost your business with authentic reviews from top influencers
            </li>
          </ul>
          <p className="brand-desc">
            Whether you're launching a new product, expanding into new markets,
            or simply looking to increase brand awareness, leverage the power of
            authentic reviews and influencer marketing. Join our platform today
            and start tapping into the vast potential of reaching thousands, of
            eager consumers who are ready to discover what your business has to
            offer.
          </p>
          <div className="btn-grorp">
            <button className="view-btn">View More</button>
            <Link to="section1" smooth={true} duration={500}>
              <button className="start-btn">Start Today</button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-line" />
      <div className="features-container2">
        <div className="left-item brand-bg mobile-silder">
          {/* <img className="green-gig-img" src="./img/brands-prduct-bg.png" /> */}
          <InflunacerSlide
            InfulancerData={InfulancerData}
            SlideInterValTime={3000}
          />
        </div>
        <div className="right-item">
          <h1 className="web-heading">
            Unlock your <span className="influencer-txt"> Influencers</span>{" "}
            <br />
            potential now
          </h1>
          <h1 className="mobile-heading">
            Unlock your <span className="influencer-txt"> Influencers </span>
            potential now
          </h1>
          <ul className="ul-list">
            <li className="li-list">
              Get your product noticed by influential voices
            </li>
            <li className="li-list">
              Boost your business with authentic reviews from top influencers
            </li>
          </ul>
          <p className="brand-desc">
            Are you tired of spending countless hours searching for businesses
            that are looking to collaborate with influencers? Our innovative
            platform solves this problem by connecting businesses directly with
            influencers in a hassle-free and efficient way. With our extensive
            database of influencers across various niches, we match your brand
            with the perfect influencer to amplify your message and reach your
            target audience. Say goodbye to manual outreach and let our platform
            do the work for you. Join us today and unlock the power of
            influencer marketing to take your business to new heights!
          </p>
          <div className="btn-grorp">
            <button className="view-btn">View More</button>
            <Link to="section1" smooth={true} duration={500}>
              <button className="start-btn">Start Today</button>
            </Link>
          </div>
        </div>
        <div className="left-item brand-bg web-silder">
          {/* <img className="green-gig-img" src="./img/brands-prduct-bg.png" /> */}
          <InflunacerSlide
            InfulancerData={InfulancerData}
            SlideInterValTime={3000}
          />
        </div>
      </div>
      <Element name="section1" className="section">
        <Join />
      </Element>
    </div>
  );
}

export default Home;
