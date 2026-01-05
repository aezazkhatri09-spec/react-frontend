import { useState } from "react";
import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
    const [billing, setBilling] = useState("monthly");

    return (
        <div className="mainDiv">
          
        <div style={{ background: "#1358d8" }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-white">
                            <h1 className="display-4 fw-bold">
                                Amazingly flexible,<br />
                                customizable and<br />
                                easy to use
                            </h1>
                            <button className="btn btn-light mt-4 px-4 py-2" style={{ color: "#296ad9" }}>Get Started</button>
                            <br />
                            <br />
                            <p className="mt-4">
                                <i className="bi bi-star-fill" style={{ color: "#f9c78f" }}></i> &nbsp;
                                <i className="bi bi-star-fill" style={{ color: "#f9c78f" }}></i> &nbsp;
                                <i className="bi bi-star-fill" style={{ color: "#f9c78f" }}></i> &nbsp;
                                <i className="bi bi-star-fill" style={{ color: "#f9c78f" }}></i> &nbsp;
                                <i className="bi bi-star-fill" style={{ color: "#f9c78f" }}></i>
                                <br />
                                <br />
                                It’s easy to set up and the support experience is the <br /> best and unparalleled comparatively.
                            </p>
                            <div className="d-flex align-items-center gap-4 mt-4 product-logos">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/hero/wise_white.png"
                                    alt="Wise" className="product-logo" />

                                <img src="https://themewagon.github.io/sustainable-nextjs/images/hero/google_white.png"
                                    alt="GPay" className="product-logo" />

                                <img src="https://themewagon.github.io/sustainable-nextjs/images/hero/pay_white.png"
                                    alt="PayJunction" className="product-logo" />

                                <img src="https://themewagon.github.io/sustainable-nextjs/images/hero/stripe_white.png"
                                    alt="Stripe" className="product-logo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h4 className="mb-3 fw-bold text-white">Start the project</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                </div>
                                <input type="email" className="form-control mb-3" placeholder="youremail@website.com" />
                                <input type="text" className="form-control mb-3" placeholder="Country" />

                                <textarea className="form-control mb-3" rows="4" placeholder="Write your thoughts here..."></textarea>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <p className="form-check-label text-white">
                                        I have read and acknowledge the <a href="#" className="text-white">Terms and Conditions.</a>
                                    </p>
                                </div>
                                <button className="btn w-100 py-2" style={{ background: "#f9c78f", color: "#142e47" }}>Submit Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
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
                            <li className="d-flex align-items-center mb-4">
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
                        <button className="btn btn-primary">Get Started<i class="bi bi-chevron-right"></i></button>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/beautiful-design.svg" />
                                        <h5 className="fw-bold text-start mt-4" style={{ color: "#1f3952" }}>Beautiful designs premade</h5>
                                    </div>
                                    <p className="mt-2 text-start small" style={{ color: "#7791a9" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <a href="#" className="fw-semibold  small text-decoration-none text-primary">
                                        Get Started <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/coded.svg" />
                                        <h5 className="fw-bold text-start mt-4" style={{ color: "#1f3952" }}>Coded with much <br /> care & notes</h5>
                                    </div>
                                    <p className="mt-2 text-start small" style={{ color: "#7791a9" }}>
                                        Lorem ipsum dolor sit amet, consect etur adipiscing
                                    </p>
                                    <a href="#" className="fw-semibold small text-decoration-none text-primary" style={{ color: "#4179e0" }}>
                                        Get Started <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/amazing.svg" />
                                        <h5 className="fw-bold text-start mt-4" style={{ color: "#1f3952" }}>Amazing demos included</h5>
                                    </div>
                                    <p className="mt-2 text-start small" style={{ color: "#7791a9" }}>
                                        Lorem ipsum dolor sit amet, consect etur adipiscing
                                    </p>
                                    <a href="#" className="fw-semibold small text-decoration-none text-primary" style={{ color: "#4179e0" }}>
                                        Get Started <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card shadow-sm p-4 rounded bg-white h-100">
                                    <div className="mb-3 fs-3 text-primary">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/build-amazing/beautiful-design.svg" />
                                        <h5 className="fw-bold text-start mt-4" style={{ color: "#1f3952" }}>Beautiful designs premade</h5>
                                    </div>
                                    <p className="mt-2 text-start small" style={{ color: "#7791a9" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <a href="#" className="fw-semibold small text-decoration-none text-primary" style={{ color: "#4179e0" }}>
                                        Get Started <i className="bi bi-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center" style={{ background: "#f3f9fd" }}>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-start" style={{ color: "#102c46" }}>Work done by us to  <br /> your revenue</h1>
                        <p className="text-start mt-4" style={{ color: "#547793" }}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elited do eiusmod tempor incididunt.</p>

                        <button className="btn btn-primary d-flex">Get Started <i class="bi bi-chevron-right"></i></button>
                        <div>
                            <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/weby-dashboard-design.jpg" className="w-100 mt-5 border rounded-4" />
                            <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/illustration.jpg" className="w-100 mt-5 border rounded-4" />
                        </div>
                    </div>
                    <div className="col">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/mobile-application.jpg" className="w-100 mt-5 border rounded-4" />

                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/frontend-development.jpg" className="w-100 mt-5 border rounded-4" />

                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/financial-image.jpg" className="w-100 mt-5 border rounded-4" />
                    </div>
                </div>
            </div>
            <div className="container py-5" style={{ maxWidth: "1100px" }}>
                <div className="text-center mb-4">
                    <h2 style={{ fontWeight: "500" }}>Choose your preferred plan</h2>
                    <p className="text-secondary" style={{ marginTop: "-5px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <br />
                    <br />
                    <div className="d-inline-flex border rounded-2 mt-3" style={{ overflow: "hidden" }}>
                        <button className={`px-4 py-2 ${billing === "monthly" ? "bg-primary text-white" : "bg-white"}`} style={{ border: "none" }} onClick={() => setBilling("monthly")}>
                            Monthly
                        </button>
                        <button className={`px-4 py-2 ${billing === "annually" ? "bg-primary text-white" : "bg-white"}`} style={{ border: "none" }} onClick={() => setBilling("annually")}>
                            Annually
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-4 mb-4">
                        <div className="shadow-lg p-3 rounded" style={{ backgroundColor: "rgb(19,88,216)" }}>
                            <img src="https://themewagon.github.io/sustainable-nextjs/images/price-plan/plan-image.png" className="img-fluid rounded" alt="Ad" />
                            <h5 className="mt-3 fw-bold text-white">Choosing yearly plan gives you big 35% discount</h5>
                            <p className="text-white">
                                This week 3,569 people have signed up with us
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="p-4 rounded shadow-lg text-center" style={{ backgroundColor: "#ffffff" }}>
                            <h4 className="fw-bold text-start" style={{ color: "#547593" }}>Basic</h4>
                            <h2 className="my-3 fw-bold text-start" style={{ fontSize: "42px" }}>
                                {billing === "monthly" ? "$9" : "$100"}
                            </h2>
                            <p className="text-muted text-start">Best for people who have the startup / freelancing</p>
                            <hr />
                            <ul className="list-unstyled text-start mt-3">
                                <li><i className="bi bi-check"></i>Monthly service fee</li>
                                <li><i className="bi bi-check"></i>Direct debits</li>
                                <li><i className="bi bi-check"></i>Online payments</li>
                                <li><i className="bi bi-check"></i>Deposits to Savers</li>
                                <li><i className="bi bi-x"></i>International transaction fees</li>
                            </ul>
                            <button className="btn btn-primary w-100 mt-3 rounded-3">
                                Try free for 14 days
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="p-4 rounded shadow-lg text-center" style={{ backgroundColor: "#ffffff" }}>
                            <h4 className="fw-bold text-start" style={{ color: "#547593" }}>Professional</h4>
                            <h2 className="my-3 fw-bold text-start" style={{ fontSize: "42px" }}>
                                {billing === "monthly" ? "$18" : "$210"}
                            </h2>
                            <p className="text-muted text-start">Best for professionals who need more features</p>
                            <hr />
                            <ul className="list-unstyled text-start mt-3">
                                <li><i className="bi bi-check"></i>Monthly service fee</li>
                                <li><i className="bi bi-check"></i>Direct debits</li>
                                <li><i className="bi bi-check"></i>Online payments</li>
                                <li><i className="bi bi-check"></i>Deposits to Savers</li>
                                <li><i className="bi bi-check"></i>International transaction fees</li>
                            </ul>
                            <button className="btn btn-primary w-100 mt-3 rounded-3">
                                Try free for 14 days
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container text-center bg-light">
                <div class="row">
                    <div class="col mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/star.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            4.86
                        </h1>
                        <p className="text-secondary">Out of 5 stars from 3896 reviews on google platform</p>
                    </div>
                    <div class="col mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/admin.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            364
                        </h1>
                        <p className="text-secondary">Client testimonials received in the year 2021</p>
                    </div>
                    <div className="col mt-5">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/counter/bag.svg" height="30" />
                        <h1 className="fw-semibold" style={{ color: "#102c46" }}>
                            45M+
                        </h1>
                        <p className="text-secondary">Revenue generated through new projects & marketing</p>
                    </div>
                </div>
            </div>
            <div>
                <section className="container py-5">
                    <h2 className="text-center fw-bold mb-5" style={{ color: "#102c46" }}>
                        Frequently asked questions
                    </h2>
                    <div class="accordion" id="accordionFAQ">
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: "rgb(18,52,83)" }}>
                                    How do I figure out what to learn?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body text-secondary">
                                    The most important thing is that you want to learn something that interests you, because once
                                    you start learning, you’ll be with this topic for a while. Choosing something just because it’s
                                    popular or what others are doing isn’t the way to go because if you don’t have a true interest in
                                    it, you’ll lose the motivation to learn! Spend some time seriously looking into the different tech
                                    career paths before choosing one to go down.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: "rgb(18,52,83)" }}>
                                    Which programming language is the best to learn?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body text-secondary">
                                    I usually tell most people to start by learning HTML and CSS, then move into learning JavaScript.
                                    The reason is that JavaScript is used everywhere: frontend, backend, and even to build mobile
                                    apps. It has many use cases, which is why I think it’s smart to learn.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: "rgb(18,52,83)" }}>
                                    Is it possible to do both graphic design and coding?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body text-secondary">
                                    If you have an interest in coding and graphic design, then there’s nothing to say you shouldn’t
                                    learn skills in both areas. They often work hand-in-hand, so having knowledge and skills in both
                                    areas could be desirable for certain career paths. You could also think about pursuing
                                    something in between like UI design, which is a very in-demand career right now!
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseFour" style={{ color: "rgb(18,52,83)" }}>
                                    Should I learn Python 2 or Python 3?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body text-secondary">
                                    Now, in 2020, it’s a no-brainer: Python 3 is definitely the way to go. There are still some
                                    situations where picking up Python 2 might be advantageous, or you may just want to learn a
                                    little of the history and the differences between Python 2 and 3 for curiosity’s sake, but
                                    job-wise, Python 3 is the clear winner.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="true"
                                    aria-controls="collapseFive" style={{ color: "rgb(18,52,83)" }}>
                                    Should I learn skills in several areas?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                                <div className="accordion-body text-secondary">
                                    Personally, I’d say choose a path and stick to it! Learning too many things at once will slow you
                                    down. Here are a few ideas of things you can choose to focus on, and a little bit about each one.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 p-4 rounded" style={{ background: "rgb(243,249,253)" }}>
                        <p className="mb-1" style={{ color: "#6f7882" }}>Still have questions?</p>
                        <a href="/" className="fw-semibold text-decoration-none" style={{ color: "#8c95df" }}>Contact our support team</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Home;
