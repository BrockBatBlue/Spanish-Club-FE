import React, { useContext, Context } from "react";
import "../../Styles/Elements/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/babelLibraryColors.png";

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
    <div className="topnav" id="myTopnav">
    <nav className="navbar navbar-expand-lg">
      {/* <div className="container"> */}
      <a className="babelBrand navbar-brand" href="/">
        <img src={logo} alt="UI Kit" />
      </a>

{/* HOW DOES THIS CREATE A HAMBURGERRR?!  */}
      <button className="hamburger" id="hamburger">
        <i className="fas fa-bars"></i>
        
        </button>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className=" nav-ul responsiveNav navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0" id="nav-ul">
          {/* <li className="nav-item active mr-3">
            <a className="navLinks nav-link text-white" href={Link}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}

          <li className="nav-item mr-3">
            <Link className="navLinks nav-link text-white" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link className="navLinks nav-link text-white" to="/AboutUs">
              About Us
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link className="navLinks nav-link text-white" to="/OurServices">
              Our Services
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link className="navLinks nav-link text-white" to="/ContactUs">
              Contact Us
            </Link>
          </li>

          <li className="nav-item mr-3">
            <Link className="navLinks nav-link text-white" to="/Login">
              Login
            </Link>
          </li>

          {/* <li className="nav-item mr-3">
            <a className="navLinks nav-link text-white" href={Link}>
              Services
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link text-white" href={Link}>
              Our Work
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link text-white" href={Link}>
              Contact Us
            </a>
          </li> */}
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white"
              href={Link}
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle u-box-shadow-sm mr-2"
                width="35"
                height="35"
                src={logo}
                alt="Htmlstream"
              />{" "}
              Elena
              <i className="fa fa-angle-down   "></i>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href={Link}>
                Profile
              </a>
              <a className="dropdown-item" href={Link}>
                Account Settings
              </a>
              <a className="dropdown-item" href={Link}>
                Newsletter
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href={Link}>
                Sign Out
              </a>
            </div>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
    </div>
  );
}


export default Navbar;


// const hamburger=document.getElementById('hamburger');
// const navUL = document.getElementById('nav-ul');

// hamburger.addEventListener('click', ()=>{
//   navUL.classList.toggle('show');
// })