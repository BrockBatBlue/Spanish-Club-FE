import React from "react";
import "../../Styles/Pages/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="pt-4 pb-3 mt-0 d-flex bg-dark background-image">
      <div className="container p-md-4">
        <div className="row d-flex  h-100 ">
          <div className="position-relative  w-100 h-25  d-flex">
            <div className="container-fluid align-self-start mt-2 mb-2">
              <div className="row landingTitle">
                <div className="col-12 col-md-3">
                  <h4 className="mt-1 text-white display-3">
                    Welcome to Babel Library
                  </h4>
                </div>
                <div className="col-9 d-none d-md-block text-right">
                  <div className="row align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative  w-100 h-50  d-flex">
            <div className="container-fluid align-self-center   pt-5 pt-md-1 mb-2">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                  <h1 id="teachLanguages" className="  mb-0 pt-sm-4 text-white">
                    We Teach Language Courses
                  </h1>
                  <a
                    id="learnMore"
                    href={Link}
                    className="btn btn-outline-light btn-danger mt-5"
                  >
                    Find out more About Us!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative  w-100  h-25 d-flex">
            <div className="container-fluid align-self-end  mt-5 mb-2">
              <div className="row">
                <div className="col-md-6 col-7">
                  <div className=" pt-0 d-inline-block">
                    <a href={Link} role="button" className=" btn btn-link mr-2">
                      <i
                        className="fab fa-twitter fa-lg text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a href={Link} role="button" className=" btn btn-link mr-2">
                      <i
                        className="fab fa-facebook fa-lg text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a href={Link} role="button" className=" btn btn-link mr-2">
                      <i
                        className="fab fa-linkedin fa-lg text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
