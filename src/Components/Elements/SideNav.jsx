import React from "react";
import "../../Styles/Elements/SideNav.css";
import { Link } from "react-router-dom";
import Attendance from "../Pages/Attendance.jsx";
import Forum from "../Elements/Forum.jsx";
import ResourceUploads from "../Pages/ResourceUpload.jsx";

function SideNav() {
  return (
    <div classname="col-md-4">
      <div className="Left-bar">
        <h4 className="teacherGreet">Greetings Elena!</h4>
        <hr />
        <h6>Attendance</h6>
        <Link to="/attendance" className="attendanceSheet" href={Attendance}>
          English
        </Link>
        <h6>Discussion Forum</h6>
        <Link to="/discussion" className="forum" href={Forum}>
          English
        </Link>
        <h6>Google Classroom</h6>
        <a
          className="gClassroom"
          href="https://edu.google.com/products/classroom/"
        >
          English
        </a>
        <h6>Resource Uploads</h6>
        <Link to="/resources" className="uploads" href={ResourceUploads}>
          {" "}
          English
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
