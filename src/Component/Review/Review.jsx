import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export default function  Review(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <Fragment>
        {/* Testimonial Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div
              className="section-title position-relative text-center mx-auto mb-5 pb-3"
              style={{ maxWidth: "600px" }}
            >
              <h2 className="text-primary font-secondary">Testimonial</h2>
              <h1 className="display-4 text-uppercase">Our Clients Say!!!</h1>
            </div>
            <div className="testimonial-carousel">
              <Slider {...settings}>
                <div>
                  <div style={{ margin: '16px' }} className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid flex-shrink-0"
                        src="assets/img/testimonial-1.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h4 className="text-primary text-uppercase mb-1">
                          Client Name
                        </h4>
                        <span>Profession</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ margin: '16px' }} className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid flex-shrink-0"
                        src="assets/img/testimonial-2.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h4 className="text-primary text-uppercase mb-1">
                          Client Name
                        </h4>
                        <span>Profession</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ margin: '16px' }} className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid flex-shrink-0"
                        src="assets/img/testimonial-3.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h4 className="text-primary text-uppercase mb-1">
                          Client Name
                        </h4>
                        <span>Profession</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                </div>
                <div>
                  <div style={{ margin: '16px' }} className="testimonial-item bg-dark text-white border-inner p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid flex-shrink-0"
                        src="assets/img/testimonial-4.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h4 className="text-primary text-uppercase mb-1">
                          Client Name
                        </h4>
                        <span>Profession</span>
                      </div>
                    </div>
                    <p className="mb-0">
                      Dolor et eos labore, stet justo sed est sed. Diam sed sed
                      dolor stet amet eirmod eos labore diam
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </Fragment>
    );
}
