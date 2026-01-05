import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
    return (
        <>
            <div className="container-fluid bg-light py-2">
                <h1 className="text-center mt-5">Contact Us</h1>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 p-4">
                        <div className="d-flex align-items-start">
                            <div className="icon-circle me-3">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/contact/email.svg" />
                            </div>
                            <div>
                                <h5 className="fw-bold">Email Us</h5>
                                <p className="text-muted">Please feel free to drop us a line. We will respond as soon as possible.</p>

                                <a href="#" className="contact-link text-decoration-none">Leave a message <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 p-4">
                        <div className="d-flex align-items-start">
                            <span className="icon-circle me-3">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/contact/Career.svg" />
                            </span>
                            <div>
                                <h5 className="fw-bold">Careers</h5>
                                <p className="text-muted">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum</p>
                                <a href="#" className="contact-link text-decoration-none">Send an application <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="map-container">
               <div className="row justify-content-center"> 
                    <div className="col-12 col-md-10">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29361.30872623601!2d72.52709805965422!3d23.091106574308533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83fe2ae02509%3A0x36142cfce68601b8!2sD-Mart%20Gota!5e0!3m2!1sen!2sin!4v1765367517874!5m2!1sen!2sin" 
                            width="100%" 
                            height="600" 
                            style={{border:0}} 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <div className="container py-5">
                <div className="container bg-white">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="fw-bold mb-3" style={{ fontSize: "42px", color: "#102c46" }}>
                                Get Online <br /> Consultation
                            </h1>
                            <form className="mt-4">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>First Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>Last Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>Email address*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>Specialist*</label>
                                        <select className="form-select">
                                            <option>Choose a specialist</option>
                                            <option>Exotic Cuisine</option>
                                            <option>French Desserts</option>
                                            <option>Italian food</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>Date*</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" style={{ color: "#757796" }}>Time*</label>
                                        <input type="time" className="form-control" />
                                    </div>
                                </div>
                                <button className="btn btn-primary px-4 py-2 " style={{ backgroundColor: "#1358d8" }}>
                                    Make an appointment
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img
                                src="https://themewagon.github.io/sustainable-nextjs/images/contact/contact.jpg"
                                alt="Image-office"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="container bg-white">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h2 className="fw-bold">Pune Head<br />Office</h2>
                        </div>
                        <div className="col-md-4">
                            <p className="fs-5 mb-1">4292 Mapleview Drive</p>
                            <p className="fs-5 mb-1">Greenfield Zip code</p>
                            <p className="fs-5">38230</p>
                        </div>
                        <div className="col-md-4">
                            <p className="fs-5 mb-1">
                                <a className="text-decoration-underline text-dark" href="#">
                                    headoffice@sustainable.com
                                </a>
                            </p>
                            <p className="fs-5">
                                <span className="fw-semibold">Call</span>{" "}
                                <a href="#" className="text-primary text-decoration-none">
                                    731-621-5503
                                </a>
                            </p>
                        </div>
                    </div>

                    <hr />
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <h2 className="fw-bold">Bengaluru <br /> Office</h2>
                        </div>
                        <div className="col-md-4">
                            <p className="fs-5 mb-1">3502 Marcus Street</p>
                            <p className="fs-5 mb-1">Geraldine Zip code</p>
                            <p className="fs-5">35974</p>
                        </div>
                        <div className="col-md-4">
                            <p className="fs-5 mb-1">
                                <a className="text-decoration-underline text-dark" href="#">
                                    Office@sustainable.com
                                </a>
                            </p>
                            <p className="fs-5">
                                <span className="fw-semibold">Call</span>{" "}
                                <a href="#" className="text-primary text-decoration-none">
                                    731-235-7993
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Contact;
