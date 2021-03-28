import React from "react";
import "../../Styles/Elements/SideNav.css";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div classname="col-md-4">
      <div className="Left-bar">
        <h4 className="teacherGreet">Greetings Elena!</h4>
        <hr />
        <h6>Homework Inbox</h6>
        <a
          className="homeworkInbox"
          href="https://edu.google.com/products/classroom/"
        >
          Spanish
        </a>
        <a
          className="homeworkInbox"
          href="https://edu.google.com/products/classroom/"
        >
          English
        </a>
        <a
          className="homeworkInbox"
          href="https://edu.google.com/products/classroom/"
        >
          German
        </a>
        <hr />
        <h6>Student Attendance</h6>
        <Link to="/attendance" className="attendance">
          Attendance
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
