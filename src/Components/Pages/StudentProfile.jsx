import React from "react";
import "../../Styles/Pages/StudentProfile.css";
import { Link } from "react-router-dom";

function StudentProfile() {
  return (
    <>
      (
      <div classname="col-md-4">
        <div className="Left-bar">
          <h4 className="teacherGreet">Greetings Student!</h4>
          <hr />
          <h6>Homework Due</h6>
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
          <h6>My Attendance</h6>
          <Link to="/attendance" className="attendance">
            Attendance
          </Link>
        </div>
      </div>
      )
    </>
  );
}

export default StudentProfile;
