import React, { useContext, Context } from "react";
import "../../Styles/Elements/Navbar.css";
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
    <nav className="navbar navbar-expand-lg">
      {/* <div className="container"> */}
      <a className="babelBrand navbar-brand" href="index.html">
        <img src="./finalLogo.png" alt="UI Kit" style={{ width: "100%" }} />
      </a>
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
        <ul className="responsiveNav navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
          <li className="nav-item active mr-3">
            <a className="navLinks nav-link" href={Link}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link" href={Link}>
              About
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link" href={Link}>
              Services
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link" href={Link}>
              Our Work
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="navLinks nav-link" href={Link}>
              Contacts
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
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
                src="http://via.placeholder.com/100/007bff/efefef"
                alt="Htmlstream"
              />{" "}
              John Doe
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
  );
}
export default Navbar;
