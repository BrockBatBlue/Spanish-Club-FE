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
              <iframe
                title="lessonCalendar"
                src="https://calendar.google.com/calendar/embed?src=es.mexican%23holiday%40group.v.calendar.google.com&ctz=America%2FMexico_City"
                style={{ border: 0 }}
                width="800"
                height="600"
                frameborder="0"
                scrolling="yes"
              ></iframe>
              {/* <iframe
                title="Kyle Calendar"
                src="https://calendar.google.com/calendar/embed?src=kyle.pingue%40churchill.edu.mx&ctz=America%2FMexico_City"
                style={{ border: 0 }}
                width="800"
                height="600"
                frameborder="0"
                scrolling="no"
              ></iframe> */}
              <hr />
              <form>
                <div clasName="input-group mb-3">
                  <div className="input-group-prepend">
                    <label htmlFor="inputGroupSelect01">Select Class</label>
                  </div>
                  <select
                    className="custom-select options"
                    name="dropdown"
                    id="inputGroupSelect01"
                  >
                    <option selected>Choose...</option>
                    <option value="Spanish Beginner ages 6-10">
                      Spanish Beginner ages 6-10
                    </option>
                    <option value="Spanish Beginner ages 11-15">
                      Spanish Beginner ages 11-15
                    </option>
                    <option value="Spanish Beginner ages 16-18">
                      Spanish Beginner ages 16-18
                    </option>
                    <option value="Spanish Beginner ages 19-on">
                      Spanish Beginner ages 19-on
                    </option>
                    <option value="Spanish Intermediate ages 6-10">
                      Spanish Intermediate ages 6-10
                    </option>
                    <option value="Spanish Intermediate ages 11-15">
                      Spanish Intermediate ages 11-15
                    </option>
                    <option value="Spanish Intermediate ages 16-18">
                      Spanish Intermediate ages 16-18
                    </option>
                    <option value="Spanish Intermediate ages 19-on">
                      Spanish Intermediate ages 19-on
                    </option>
                    <option value="Spanish Advanced ages 6-10">
                      Spanish Advanced ages 6-10
                    </option>
                    <option value="Spanish Advanced ages 11-15">
                      Spanish Advanced ages 11-15
                    </option>
                    <option value="Spanish Advanced ages 16-18">
                      Spanish Advanced ages 16-18
                    </option>
                    <option value="Spanish Advanced ages 19-on">
                      Spanish Advanced ages 19-on
                    </option>
                    <option value="English Beginner ages 6-10">
                      English Beginner ages 6-10
                    </option>
                    <option value="English Beginner ages 11-15">
                      English Beginner ages 11-15
                    </option>
                    <option value="English Beginner ages 16-18">
                      English Beginner ages 16-18
                    </option>
                    <option value="English Beginner ages 19-on">
                      English Beginner ages 19-on
                    </option>
                    <option value="English Intermediate ages 11-15">
                      English Intermediate ages 11-15
                    </option>
                    <option value="English Intermediate ages 16-18">
                      English Intermediate ages 16-18
                    </option>
                    <option value="English Intermediate ages 19-on">
                      English Intermediate ages 19-on
                    </option>
                    <option value="English Advanced ages 11-15">
                      English Advanced ages 11-15
                    </option>
                    <option value="English Advanced ages 16-18">
                      English Advanced ages 16-18
                    </option>
                    <option value="English Advanced ages 19-on">
                      English Advanced ages 19-on
                    </option>
                    <option value="German Beginner ages 6-10">
                      German Beginner ages 6-10
                    </option>
                    <option value="German Beginner ages 11-15">
                      German Beginner ages 11-15
                    </option>
                    <option value="German Beginner ages 16-18">
                      German Beginner ages 16-18
                    </option>
                    <option value="German Beginner ages 19-on">
                      German Beginner ages 19-on
                    </option>
                    <option value="German Intermediate ages 11-15">
                      German Intermediate ages 11-15
                    </option>
                    <option value="German Intermediate ages 16-18">
                      German Intermediate ages 16-18
                    </option>
                    <option value="German Intermediate ages 19-on">
                      German Intermediate ages 19-on
                    </option>
                    <option value="German Advanced ages 11-15">
                      German Advanced ages 11-15
                    </option>
                    <option value="German Advanced ages 16-18">
                      German Advanced ages 16-18
                    </option>
                    <option value="German Advanced ages 19-on">
                      German Advanced ages 19-on
                    </option>
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
