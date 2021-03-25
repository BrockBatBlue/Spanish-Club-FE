import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Pages/OurServices.css";

function OurServices() {
  return (
    <>
      <section className="pt-5 pb-5">
        <div className=" ourServicesContainer container-fluid">
          <div className="row servicesRow">
            <div className="col-lg-12">
              <h3 className="text-primary lg introText">
                Here's what we do...
              </h3>
              <h2 className="servicesText">Our Services To You</h2>
              <p className="lead text-white paragraph">
                We provide 100% online synchronous language courses to students
                of all ages and language levels on our Secure platform.
              </p>
            </div>
          </div>
          <div id="servicesCards" className="row d-flex mb-5">
            <div className="col-10 mx-auto col-md-4">
              <div className="my-3 card card-body shadow p-4 ">
                <div className="row align-items-center d-flex text-md-center text-lg-left">
                  <div className="col-12 col-sm-3 col-md-3 text-center px-0">
                    <div className="icon-wrap text-primary my-3">
                      <i className="servicesIcon icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-lock fa-lg">
                        {"💻"}
                      </i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">We Zoom</h4>
                    <p className=" mb-0">
                      Our in-class experience will be with a qualified language
                      teacher leading a secure zoom classroom. Students will
                      have both individual and group activities where they can
                      really use their language skills. Class sessions will be
                      recorded and posted for student review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto col-md-4">
              <div className="my-3 card card-body shadow p-4">
                <div className="row align-items-center text-md-center text-lg-left">
                  <div className="col-12 col-sm-3 col-md-3 text-center px-0">
                    <div className="icon-wrap text-primary my-3">
                      <i className="servicesIcon icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-lock fa-lg">
                        {"📋"}
                      </i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">We Give Homework</h4>
                    <p className="  mb-0">
                      All reading material will be given to the students through
                      this platform. Students will use this material to practice
                      their writing, grammar, and fluency. The homework will be
                      graded to give the student a sense where their skills land
                      in that unit. The homework is posted directly to the
                      student for their privacy. Redos are absolutely fine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto col-md-4">
              <div className="my-3 card card-body shadow p-4">
                <div className="row align-items-center text-md-center text-lg-left">
                  <div className="col-12 col-sm-3 col-md-3 text-center px-0">
                    <div className="icon-wrap text-primary my-3">
                      <i className="servicesIcon icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-lock fa-lg">
                        {"📆"}
                      </i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">Students Are The Same Age</h4>
                    <p className="  sm-font-size text-dark-gray mb-0">
                      We group our students by both langauge level and age. This
                      way students will feel more comfortable communicating with
                      their peers. Adult students and minor students will never
                      have a class together even if they are at the same
                      language level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 align-items-center buttonRow">
            <div className="col buttonCol">
              <a
                href={Link}
                className="btn btn-primary signUpBtn  btn-rounded shadow py-3 px-5"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
