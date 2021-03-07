import React from "react";
import "../../Styles/Pages/TeacherProfile.css";
import { Link } from "react-router-dom";

function TeacherProfile() {
  return (
    <>
      <div className="container">
        <div className="row">
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
          <div className="col-md-8">
            <div className="mainPage">
              <h3>Lessons Calendar</h3>
              <hr />
              <img
                className="calendarPlaceholder"
                src="https://media.gcflearnfree.org/content/560be4f6557fa909dc9cf5a1_09_30_2015/tips_calendar_intro.jpg"
                alt=""
              />
              <hr />
              <form>
                <div clasName="input-group mb-3">
                  <div className="input-group-prepend">
                    <label htmlFor="inputGroupSelect01">Select Class</label>
                  </div>
                  <select
                    className="custom-select"
                    name=""
                    id="inputGroupSelect01"
                  >
                    <option selected>Choose...</option>
                    <option value="Spanish Beginner ages 6-10"></option>
                    <option value="Spanish Beginner ages 11-15"></option>
                    <option value="Spanish Beginner ages 16-18"></option>
                    <option value="Spanish Beginner ages 19-on"></option>
                    <option value="Spanish Intermediate ages 6-10"></option>
                    <option value="Spanish Intermediate ages 11-15"></option>
                    <option value="Spanish Intermediate ages 16-18"></option>
                    <option value="Spanish Intermediate ages 19-on"></option>
                    <option value="Spanish Advanced ages 6-10"></option>
                    <option value="Spanish Advanced ages 11-15"></option>
                    <option value="Spanish Advanced ages 16-18"></option>
                    <option value="Spanish Advanced ages 19-on"></option>
                    <option value="English Beginner ages 6-10"></option>
                    <option value="English Beginner ages 11-15"></option>
                    <option value="English Beginner ages 16-18"></option>
                    <option value="English Beginner ages 19-on"></option>
                    <option value="English Intermediate ages 11-15"></option>
                    <option value="English Intermediate ages 16-18"></option>
                    <option value="English Intermediate ages 19-on"></option>
                    <option value="English Advanced ages 11-15"></option>
                    <option value="English Advanced ages 16-18"></option>
                    <option value="English Advanced ages 19-on"></option>
                    <option value="German Beginner ages 6-10"></option>
                    <option value="German Beginner ages 11-15"></option>
                    <option value="German Beginner ages 16-18"></option>
                    <option value="German Beginner ages 19-on"></option>
                    <option value="German Intermediate ages 11-15"></option>
                    <option value="German Intermediate ages 16-18"></option>
                    <option value="German Intermediate ages 19-on"></option>
                    <option value="German Advanced ages 11-15"></option>
                    <option value="German Advanced ages 16-18"></option>
                    <option value="German Advanced ages 19-on"></option>
                  </select>
                </div>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Lesson Title"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="lesson date(s)"
                />
                <textarea
                  className="form-control"
                  id="lessonText"
                  cols="50"
                  rows="30"
                  placeholder="lesson plans here"
                ></textarea>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
