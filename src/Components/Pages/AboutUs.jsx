import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Pages/AboutUs.css";

function AboutUs() {
  return (
    <section className="text-dark pt-5 pb-5">
      <div className="container pb-5 ">
        <div className="row text-center justify-content-sm-center no-gutters">
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  alt="placeholder"
                  className="img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://via.placeholder.com/100/5fa9f8/efefef"
                />
                <h2>Feature title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse cursus erat sed sem sagittis cursus.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More &gt;</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  alt="placeholder"
                  className="img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://via.placeholder.com/100/5fa9f8/efefef"
                />
                <h2>Feature title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse cursus erat sed sem sagittis cursus.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More &gt;</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4    ">
            <div className="card shadow-sm h-100">
              <div className=" card-body   p-md-5 ">
                <img
                  alt="placeholder"
                  className="img-fluid d-block mx-auto rounded-circle mt-md-3 mb-4 mt-sm-2"
                  src="https://via.placeholder.com/100/5fa9f8/efefef"
                />
                <h2>Feature title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse cursus erat sed sem sagittis cursus.
                </p>
                <p className="mt-4">
                  <a href={Link}>Learn More &gt;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
