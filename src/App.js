import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Administrator from "./Components/Pages/Administrator";
import Home from "./Components/Pages/Home";
import Homework from "./Components/Pages/Homework";
import Navbar from "./Components/Elements/Navbar";
import Footer from "./Components/Elements/Footer";
import LessonsCalendar from "./Components/Elements/LessonsCalendar";
import HwSubmission from "./Components/Elements/HwSubmission";
import TeacherProfile from "./Components/Pages/TeacherProfile";
import StudentProfile from "./Components/Pages/StudentProfile";
import LessonPlan from "./Components/Pages/LessonPlan";
import Graded from "./Components/Pages/Graded";
import Grading from "./Components/Pages/Grading";
import ContactUs from "./Components/Pages/ContactUs";
import Attendance from "./Components/Pages/Attendance";
import AboutUs from "./Components/Pages/AboutUs";
import OurServices from "./Components/Pages/OurServices";
import "./App.css";
import axios from "axios";

// const [isLogged, setIsLogged] = useState(
//   JSON.parse(localStorage.getItem("isLogged")) || false
// );

function App() {
  // const [userName, setUserName] = useState(
  //   localStorage.getItem("username") || ""
  // );

  // const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  // const [isLogged, setIsLogged] = useState(
  //   JSON.parse(localStorage.getIemt("isLogged")) || false
  // );
  // const [isLoggedStu, setIsLoggedStu] = useState(
  //   JSON.parse(localStorage.getItem("isLoggedStu")) || false
  // );
  // const [isLoggedTe, setIsLoggedTe] = useState(
  //   JSON.parse(localStorage.getItem("isLoggedTe")) || false
  // );
  // const [isLoggedAdmin, setIsLoggedAdmin] = useState(
  //   JSON.parse(localStorage.getItem("isLoggedAdmin")) || false
  // );
  // const [data, setData] = useState({
  //   user: "",
  //   setUser: (userName, userId) => {
  //     setData({ ...data, user: userName });
  //     setUserName(userName);
  //     setUserId(userId);
  //     userName ? setIsLogged(true) : setIsLogged(false);
  //     localStorage.setItem("isLogged", JSON.stringify(userName ? true : false));
  //     localStorage.setItem("userName", userName);
  //     localStorage.setItem("userId", userId);
  //   },
  // });

  return (
    <div className="main">
      <Router>
        <Navbar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/administrator" render={() => <Administrator />} />
        <Route exact path="/homework" render={() => <Homework />} />
        <LessonsCalendar /> <HwSubmission />
        <Route exact path="/teacherprofile" render={() => <TeacherProfile />} />
        <Route exact path="/studentprofile" render={() => <StudentProfile />} />
        <Route exact path="/lessonplan" render={() => <LessonPlan />} />
        <Route exact path="/graded" render={() => <Graded />} />
        <Route exact path="/grading" render={() => <Grading />} />
        <Route exact path="/contactus" render={() => <ContactUs />} />
        <Route exact path="/attendance" render={() => <Attendance />} />
        <Route exact path="/aboutus" render={() => <AboutUs />} />
        <Route exact path="/ourservices" render={() => <OurServices />} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
