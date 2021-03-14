import React, { useContext, Context } from "react";
// import "../../Styles/Elements/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Navbar(isLoggedStu) {
  // const userStu = useContext(Context);
  // console.log("student is logged?", isLoggedStu);
  // useLocation();

  // const logOut = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:300/api/logout",
  //   }).then((res) => {
  //     userStu && userStu.setUserStu("", "", [], "");
  //     console.log(res.data);
  //   });
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border border-dark bg-dark">
    {/* <div className="container"> */}
      <a className="navbar-brand" href="index.html">
        <img src="http://via.placeholder.com/100x30/007bff/efefef" alt="UI Kit" style={{width: "100%"}}/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
          <li className="nav-item active mr-3">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Our Work</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Contacts</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle u-box-shadow-sm mr-2" width="35" height="35" src="http://via.placeholder.com/100/007bff/efefef" alt="Htmlstream"/> John Doe
              <i className="fa fa-angle-down   "></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Account Settings</a>
              <a className="dropdown-item" href="#">Newsletter</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    {/* </div> */}
  </nav>
  );

  }
export default Navbar;
    {/* <nav className="navigationBar">
      <div className="leftNav">
        <Link to="/" className="navLink">
          <img id="homepage" src="finalLogo.png" alt="" />
        </Link>
      </div>
      <div className="navbarNav">
        <div className="loggedSpecific">
          {isLoggedStu ? (
            <>
              <Link to="/studentprofile" className="stuNavLink">
                <button className="btn">Student Page</button>
              </Link>
              <Link to="/homework" className="stuNavLink">
                <button className="btn">Your Homework</button>
              </Link>
              <Link to="/graded" className="stuNavLink">
                <button className="btn">Your Grades</button>
              </Link>
              <Link to="/login" className="stuNavLink">
                <button className="btn">Log Out</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/contact">Contact Us</Link>
            </>
          )}
        </div>
      </div>
    </nav> */}


