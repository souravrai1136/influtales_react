import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = null;

  // const currentUser = {
  //   id: 1,
  //   username: "Anna",
  //   isSeller: true,
  // };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="logo-text1">
              Influ<span className="logo-text2">Tales</span>
            </span>
          </Link>
        </div>
        <div className="links">
          <span className="menu-link">Hire Influences</span>
          <span className="menu-link">Find Brands</span>
        </div>
        <div className="btns-con">
          {!currentUser?.isSeller && (
            <span className="start-btn">Get Started</span>
          )}
          {!currentUser?.isSeller && <span className="login-btn">Login</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              {currentUser?.isSeller && (
                <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" />
              )}
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        {!isVisible && (
          <img
            src="./img/menu.png"
            className="menu-icon"
            onClick={toggleVisibility}
          />
        )}
        {isVisible && (
          <img
            src="./img/close-icon.png"
            className="menu-icon"
            onClick={toggleVisibility}
          />
        )}
      </div>
      <div className={`content ${isVisible ? "visible" : "hidden"}`}>
        <div className="mobile-menu">
          <Link to="">
            <p className="menu-txt">Hire Influences</p>
          </Link>
          <Link to="">
            <p className="menu-txt">Find Brands</p>
          </Link>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Navbar;
