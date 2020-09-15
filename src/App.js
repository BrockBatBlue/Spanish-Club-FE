import React from "react";
import { BrowseRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Homework from "./Components/Homework";
import Navbar from "./Elements/Navbar";
import Footer from "./Elements/Footer";
import LessonsCalendar from "./Elements/LessonsCalendar";
import HwSubmission from "./Elements/HwSubmission";
import TeacherProfile from "./Components/TeacherProfile";
import StudentProfile from "./Components/StudentProfile";
import LessonPlan from "./Components/LessonPlan";
import Graded from "./Components/Graded";
import Grading from "./Components/Grading";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/homework" render={() => <Homework />} />
      <LessonsCalendar /> <HwSubmission />
      <Route exact path="/teacherprofile" render={() => <TeacherProfile />} />
      <Route exact path="/studentprofile" render={() => <StudentProfile />} />
      <Route exact path="/lessonplan" render={() => <LessonPlan />} />
      <Route exact path="/graded" render={() => <Graded />} />
      <Route exact path="/grading" render={() => <Grading />} />
      <Footer />
    </div>
  );
}

export default App;
