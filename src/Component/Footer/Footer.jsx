import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      {/* Footer Start */}
      <div
        className="container-fluid bg-img text-secondary"
        style={{marginTop: '90px'}}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 mb-lg-n5">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                <a href="index.html" className="navbar-brand">
                  <h1 className="m-0 text-uppercase text-white">
                    <i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>
                    CakeZone
                  </h1>
                </a>
                <p className="mt-3">
                  Lorem diam sit erat dolor elitr et, diam lorem justo labore
                  amet clita labore stet eos magna sit. Elitr dolor eirmod duo
                  tempor lorem, elitr clita ipsum sea. Nonumy rebum et takimata
                  ea takimata amet gubergren, erat rebum magna lorem stet eos.
                  Diam amet et kasd eos duo dolore no.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Get In Touch
                  </h4>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">info@example.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="#"
                    >
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="#"
                    >
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Quick Links
                  </h4>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-secondary mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-secondary mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-secondary mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Services
                    </a>
                    <a className="text-secondary mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Meet The Team
                    </a>
                    <a className="text-secondary mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Latest Blog
                    </a>
                    <a className="text-secondary" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">
                    Newsletter
                  </h4>
                  <p>
                    Amet justo diam dolor rebum lorem sit stet sea justo kasd
                  </p>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-white p-3"
                        placeholder="Your Email"
                      />
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-secondary py-4"
        style={{ background: "#111111" }}
      >
        <div className="container text-center">
          <p className="mb-0">
            &copy;{" "}
            <a className="text-white border-bottom" href="#">
              Your Site Name
            </a>
            . All Rights Reserved. Designed by{" "}
            <a
              className="text-white border-bottom"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
          </p>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-primary border-inner py-3 fs-4 back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </Fragment>
  );
}
