import React from "react";
import "../../Styles/Elements/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footerStyles">
        <footer className="pt-5 pb-5  bg text-white">
          <div className="container-fluid">
            <div className="row align-items-top text-center text-md-left">
              <div className="col-12 col-sm-6 col-md-4">
                <h3>
                  <strong>Country A</strong>
                </h3>
                <p>
                  Street Address
                  <br />
                  Contact Name
                </p>
                <p>+44 800 400 0000</p>
                <p>
                  <a className="linkColor" href={Link}>
                    infob@bootstraptor.com
                  </a>
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
                <h3>
                  <strong>Country B</strong>
                </h3>
                <p>
                  Street Address 100
                  <br />
                  Contact Name
                </p>
                {/* <p>+13 800 312 0000</p>
                <p>
                  <a hre={Link}>infob@bootstraptor.com</a>
                </p> */}
              </div>
              <div className="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
                <h3>
                  <strong>About Us</strong>
                </h3>
                <p>
                  Bootstraptor provides high quality assets for your business.
                  We help entrepreneurs with great ideas achieving their goals
                  faster.
                </p>
                {/* <p className="text-h3">
                  <a hre={Link}>
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;
                  <a hre={Link}>
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;
                  <a hre={Link}>
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;
                  <a hre={Link}>
                    <i className="fab fa-pinterest" aria-hidden="true"></i>
                  </a>&nbsp;&nbsp;
                  <a hre={Link}>
                    <i className="fab fa-google" aria-hidden="true"></i>
                  </a>
                </p> */}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                © 2018 Bootstraptor. All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
{
  /* 
      <footer className="footer py-3">
        <div className="footerContain">
          <span className="footerText">
            <img src="finalLogo.png" alt="" />
          </span>
        </div>
      </footer> */
}
