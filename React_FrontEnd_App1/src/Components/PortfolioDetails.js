import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function PortfolioDetails() {
    return (
        <>
            <div className="portfolio-details-page pb-5">
                <div className="portfolio-header-bg py-5">
                    <div className="container">
                        <h1 className="text-center mt-5">Portfolio Details</h1>
                        <h1 className="fw-bold display-5 mt-5">Apex Mobile Application Development</h1>
                        <p className="text-muted fs-5 mt-3">
                            We are a dedicated team of passionate product managers, full stack developers,
                            UX/UI designers, QA engineers and marketing.
                        </p>
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/mobile-application.jpg" className="w-100 border rounded-4" />
                    </div>
                    <div className="container py-5 mt-5" style={{ backgroundColor: "#fdfdfd" }}>
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="fw-semibold mb-4" style={{ color: "rgb(16,44,70)", lineHeight: "1.4" }}>
                                    We are a dedicated team of passionate product managers, developers,
                                    UX/UI designers, QA engineers experts helping businesses from new
                                    startups
                                </h2>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <p style={{ color: "#6a7593" }}>
                                            Popularised in the 1960s with the release of Letraset sheets
                                            containing Lorem Ipsum passages, and more recently with desktop
                                            publishing software like Aldus PageMaker.
                                        </p>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <p style={{ color: "#6a7593" }}>
                                            Lorem Ipsum as their default model text, and a search for lorem
                                            ipsum will uncover many web sites still in their infancy.
                                            Various versions have evolved over.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="p-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded-4">
                                    <h5 className="fw-bold mb-4" style={{ color: "#1358d8" }}>Our services</h5>
                                    <ul className="list-unstyled" style={{ color: "#3e2f46" }}>
                                        <li className="mb-3 fs-5">Brand Strategy</li>
                                        <li className="mb-3 fs-5">Communications</li>
                                        <li className="mb-3 fs-5">Visual Identity</li>
                                        <li className="mb-3 fs-5">Brand Support</li>
                                        <li className="mb-1 fs-5">Web Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5" style={{ maxWidth: "1200px" }}>
                        <div className="row g-5">
                            <div className="col-md-6">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/portfolio-details/font-1.jpg" />
                            </div>
                            <div className="col-md-6">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/portfolio-details/font-2.jpg" />
                            </div>
                        </div>
                        <div className="row text-center mt-5">
                            <div className="col d-flex justify-content-center gap-5">
                                <div className="color-circle" style={{ background: "#1358d8" }}></div>
                                <div className="color-circle" style={{ background: "#eee8a9" }}></div>
                                <div className="color-circle" style={{ background: "#cad7fd" }}></div>
                                <div className="color-circle" style={{ background: "#a0f0e3" }}></div>
                                <div className="color-circle" style={{ background: "#a0f0e3" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bg-light py-5">

                        <div className="row align-items-center">

                            <div className="col-md-6 d-flex justify-content-center">
                                <img
                                    src="https://themewagon.github.io/sustainable-nextjs/images/portfolio-details/work-process.png"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "90%", borderRadius: "20px" }}
                                    alt="Working Process"
                                />
                            </div>
                            <div className="col-md-6 px-5">
                                <h1 className="fw-bold mb-4" style={{ color: "#102c46" }}>
                                    Working Process
                                </h1>
                                <p className="text-secondary mb-4" style={{ lineHeight: "1.8" }}>
                                    We are a dedicated team of passionate product managers, full stack developers,
                                    UX/UI designers, QA engineers and marketing experts helping businesses of
                                    every size — from new startups.
                                </p>
                                <div className="row mb-3">
                                    <div className="col-auto">
                                        <span className="number-circle">1</span>
                                    </div>
                                    <div className="col">
                                        <p className="fw-semibold m-0">Vestibulum non sapien mattis commodo.</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-auto">
                                        <span className="number-circle">2</span>
                                    </div>
                                    <div className="col">
                                        <p className="fw-semibold m-0">Donec luctus tincidunt ornare.</p>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-auto">
                                        <span className="number-circle">3</span>
                                    </div>
                                    <div className="col">
                                        <p className="fw-semibold m-0">Quisque pretium erat ac dui posuere.</p>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-auto">
                                        <span className="number-circle">4</span>
                                    </div>
                                    <div className="col">
                                        <p className="fw-semibold m-0">Fusce eleifend vitae eleifend ullamcor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container-fluid py-5" style={{ backgroundColor: "#1358d8" }}>
                        <div className="container py-5">
                            <div className="row align-items-center">
                                <div className="col-md-7 text-white">
                                    <h2 className="fw-bold">
                                        Client <br />Testimonial
                                    </h2>
                                    <div className="display-4 my-4">
                                        <img src="https://themewagon.github.io/sustainable-nextjs/images/portfolio-details/quote.png"
                                            style={{ lineHeight: "0.8", position: "relative", top: "-20px", display: "inline-block" }} />
                                    </div>
                                    <p className="fs-5" style={{ maxWidth: "550px" }}>
                                        Letraset sheets containing Lorem Ipsum passages and more
                                        recently with desktop publishing Various versions have
                                        evolved over the years, sometimes
                                    </p>
                                    <div className="mt-4">
                                        <h5 className="fw-bold">Stephanie Sue</h5>
                                        <p className="m-0">Designation</p>
                                    </div>
                                </div>
                                <div className="col-md-5 text-center mt-4 mt-md-0">
                                    <img
                                        src="../Images/sust_testimonial.png"
                                        alt="Client"
                                        className="img-fluid rounded-circle shadow"
                                        style={{ width: "300px", height: "300px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5 mb-5">

                        <h2 className="text-center fw-bold related-heading">
                            Related Projects
                        </h2>
                        <br />
                        <div id="relatedProjectsCarousel" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row g-4 justify-content-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/mobile-application.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Apex Mobile Application Development</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/weby-dashboard-design.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Weby Dashboard Design</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/frontend-development.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Frontend Development</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row g-4 justify-content-center">

                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/illustration.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Lying on Arrow Concept Illustration</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/financial-image.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Financial Data Concept Illustration</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="project-card">
                                                <img
                                                    src="https://themewagon.github.io/sustainable-nextjs/images/work-grow/mobile-application.jpg"
                                                    className="w-100 card-image rounded-4"
                                                />
                                                <div className="overlay">
                                                    <h4>Apex Mobile Application Development</h4>
                                                    <a href="#" className="text-decoration-none">Learn More</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="carousel-indicators custom-indicators">
                                <button type="button" data-bs-target="#relatedProjectsCarousel" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#relatedProjectsCarousel" data-bs-slide-to="1"></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PortfolioDetails;
