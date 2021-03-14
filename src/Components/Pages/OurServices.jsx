import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Pages/OurServices.css";

function OurServices() {
  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row mb-md-4">
            <div className="col-12 col-lg-8 text-center text-lg-left">
              <h3 className="text-primary small">Lorem ipsum</h3>
              <h2 className=" ">Lorem ipsum dolor magna</h2>
              <p className="lead">
                Lorem ipsum massa in auctor molestie, magna lorem semper mauris,
                a venenatis turpis purus vel metus.
              </p>
            </div>
          </div>
          <div className="row d-flex mb-5">
            <div className="col-10 mx-auto col-md-4">
              <div className="my-3 card card-body shadow p-4 ">
                <div className="row align-items-center d-flex text-md-center text-lg-left">
                  <div className="col-12 col-sm-3 col-md-3 text-center px-0">
                    <div className="icon-wrap text-primary my-3">
                      <i className="icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-tint fa-lg"></i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">Lorem ipsum dolor</h4>
                    <p className=" mb-0">
                      Praesent mollis, massa in auctor molestie
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
                      <i className="icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-lock fa-lg"></i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">Etiam sed iaculis</h4>
                    <p className="  mb-0">
                      Praesent mollis, massa in auctor molestie
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
                      <i className="icon p-4 border-primary  text-primary md-font-size rounded-circle fa fa-mobile fa-lg"></i>
                    </div>
                  </div>
                  <div className="col-12 col-md-9 mt-3 mt-lg-0">
                    <h4 className="">Auctor molestie</h4>
                    <p className="  sm-font-size text-dark-gray mb-0">
                      Praesent mollis, massa in auctor molestie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3 align-items-center justify-content-center">
            <div className="col text-center">
              <a
                href={Link}
                className="btn btn-primary  btn-rounded shadow py-3 px-5"
              >
                Lorem Ipsum
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
