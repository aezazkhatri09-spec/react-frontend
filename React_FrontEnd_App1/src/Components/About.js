import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function About() {
    return (
        <>
            <div className="container text-center bg-light">
                <h1 className="text-center mt-5">About Us</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/star.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            4.86    
                        </h1>
                        <p className="text-secondary">Out of 5 stars from 3896 reviews on google platform</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/admin.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            364
                        </h1>
                        <p className="text-secondary">Client testimonials received in the year 2021</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/bag.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            45M+
                        </h1>
                        <p className="text-secondary">Revenue generated through new projects & marketing</p>
                    </div>  
                </div>
            </div>
            <br />
            <div className="container text-center" style={{ backgroundColor: "#f3f9fd" }}>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-start" style={{ color: "rgb(16,44,70)" }}>Work done by us to grow your revenue</h1>
                            <p className="text-start mt-4" style={{ color: "#5475ae" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt.</p>
                        <button className="btn btn-primary">Get Started</button>
                        <div>
                            <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/weby-dashboard-design.jpg" className="w-100 mt-5 border rounded-4" />                        
                        </div>
                    </div>
                    <div className="col">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/mobile-application.jpg" className="w-100 mt-5 border rounded-4" />
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/frontend-development.jpg" className="w-100 mt-5 border rounded-4" />
                    </div>
                </div>
            </div>
            <br />
            <br /> 
            <div className="container bg-white text-center ">
                <div className="row align-items-center mt-4">
                    <div className="col-lg-6 col-md-12 mb-4 mt-5">
                        <h4 className="text-start fw-semibold display-5" style={{ color: "rgb(16,44,70)" }}>
                            Build amazing websites and landing pages with ease using Sustaniable
                        </h4>
                        <p className="text-start text-secondary mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eiusmod tempor incididunt ut labore, dolore magna aliqua.
                        </p>

                        <ul className="list-unstyled mt-5">
                            <li className="d-flex  align-items-center mb-4">
                                <span className="icon-badge me-2 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-check2"></i>
                                </span>
                                <span className="text-secondary fw-semibold">
                                    Easy Drag & Drop
                                </span>
                            </li>
                            <li className="d-flex align-items-center mb-4">
                                <span className="icon-badge me-2 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-check2"></i>
                                </span>
                                <span className="text-secondary fw-semibold">
                                    Powered by Elementor
                                </span>
                            </li>
                            <li className="d-flex align-items-center mb-4">
                                <span className="icon-badge me-2 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-check2"></i>
                                </span>
                                <span className="text-secondary fw-semibold">
                                    Create new sections
                                </span>
                            </li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/beautiful-design.svg"/>
                                        <h5 className="fw-bold text-start mt-4">Beautiful designs premade</h5>
                                    </div>
                                    <p className="text-muted mt-2 text-start small">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                   <a href="#" className="text-primary fw-semibold small text-decoration-none">
                                        Get Started <i className="bi bi-chevron-right"></i>
                                   </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/coded.svg" />
                                        <h5 className="fw-bold text-start mt-4">Coded with much care & notes</h5>
                                    </div>
                                    <p className="text-muted mt-2 text-start small">
                                        Lorem ipsum dolor sit amet, consect etur adipiscing
                                    </p>
                                    <a href="#" className="text-primary fw-semibold small text-decoration-none">
                                        Get Started <i className="bi bi-chevron-right"></i>
                                   </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="	https://themewagon.github.io/sustainable-nextjs/images/build-amazing/amazing.svg" />
                                        <h5 className="fw-bold text-start mt-4">Amazing demos included</h5>
                                    </div>
                                    <p className="text-muted mt-2 text-start small">
                                        Lorem ipsum dolor sit amet, consect etur adipiscing
                                    </p>
                                    <a href="#" className="text-primary fw-semibold small text-decoration-none">
                                        Get Started <i className="bi bi-chevron-right"></i>
                                   </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/beautiful-design.svg"/>
                                        <h5 className="fw-bold text-start mt-4">Beautiful designs premade</h5>
                                    </div>
                                    <p className="text-muted mt-2 text-start small">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                   <a href="#" className="text-primary fw-semibold small text-decoration-none">
                                        Get Started <i className="bi bi-chevron-right"></i>
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
