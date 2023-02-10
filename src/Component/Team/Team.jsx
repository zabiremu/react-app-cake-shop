import React, { Fragment } from 'react'

export default function Team() {
  return (
    <Fragment>
       {/* Team Start */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3"style={{maxWidth: '600px'}}>
                <h2 className="text-primary font-secondary">Team Members</h2>
                <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt=""/>
                            <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt=""/>
                            <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt="" />
                            <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                                <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-dark border-inner text-center p-4">
                            <h4 className="text-uppercase text-primary">Full Name</h4>
                            <p className="text-white m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Team End */}
    </Fragment>
  )
}
