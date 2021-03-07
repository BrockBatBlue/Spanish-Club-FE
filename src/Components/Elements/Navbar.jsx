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
    <nav className="navigationBar">
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
    </nav>
  );
}

export default Navbar;
