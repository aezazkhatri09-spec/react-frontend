import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function BlogDetails() {
    return (
        <>
            <div className="container py-5">
                <div className="d-flex gap-4 text-muted mb-3">
                    <span>8 Nov 2024</span>
                    <div className="vr"></div>
                    <span>13 Comments</span>
                </div>
                <h1 className="fw-bold display-5">
                    Business from the brink of ruin by optimizing our website....
                </h1>
                <div className="d-flex align-items-center mt-4">
                    <img src="https://themewagon.github.io/sustainable-nextjs/images/blogdetail-page/silicaman.png" alt="auth" className="rounded-circle border" width="70" height="70" />
                    <div className="ms-3">
                        <h5 className="mb-0">Silicaman</h5>
                        <small className="text-muted">Author</small>
                    </div>
                </div>
            </div>
            <div className="container">
                <img src="https://themewagon.github.io/sustainable-nextjs/images/blog/blog_1.png" className="w-100 border rounded-4" />
            </div>

            <div className="container text-center" style={{ backgroundColor: "#f3f9fd" }}>
                <div className="row mt-5">
                    <div className="col">
                        <h3 className="text-start" style={{ color: "rgb(16,44,70)" }}>Main Heading & Points</h3>
                        <p className="text-start mt-4" style={{ color: "#547593" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the
                        </p>
                        <ul className="text-start mt-5">
                            <li className="text-secondary">Vivamus eu lacus scelerisque, placerat commodo lectus.</li>
                            <li className="text-secondary">Etiam et ante at ex porta fringilla.</li>
                            <li className="text-secondary">Nullam dignissim sem eu magna aliquet, sit amet volutpat tellus</li>
                        </ul>
                        <p className="text-start mt-4" style={{ color: "#547593" }}>
                            Unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                        </p>
                        <hr />
                        <p className="text-start mt-4" style={{ color: "#547593" }}>
                            We are a dedicated team of passionate product managers, developers, UX/UI designers, QA
                            engineers experts helping businesses from new startups
                        </p>
                        <hr />
                        <p className="text-start mt-4" style={{ color: "#547593" }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or randomised words which don't look even slightly
                            believable making this the first true generator on the Internet. It uses a dictionary
                        </p>
                        <hr />
                        <h3 className="text-start" style={{ color: "rgb(16,44,70)" }}>Tags</h3>
                        <ul className="text-start mt-4">
                            <li className="text-secondary">Trends</li>
                            <li className="text-secondary">Design</li>
                            <li className="text-secondary">Research</li>
                        </ul>
                        <hr />
                        <h3 className="text-start" style={{ color: "rgb(16,44,70)" }}>Share</h3>
                        <ul className="text-start mt-4">
                            <li className="text-secondary"><a href="#" className="text-decoration-none">Facebook &nbsp;<i class="bi bi-facebook"></i></a></li>
                            <li className="text-secondary"><a href="#" className="text-decoration-none">Twitter &nbsp; <i class="bi bi-twitter-x"></i></a></li>
                            <li className="text-secondary"><a href="#" className="text-decoration-none">Linkedin &nbsp; <i class="bi bi-linkedin"></i></a></li>
                        </ul>
                        <hr />
                        <h3 className="text-start" style={{ color: "rgb(16,44,70)" }}>Join our newsletter</h3>
                        <p className="text-start mt-4" style={{ color: "#547593" }}>Email address: <a href="#" className="text-decoration-none text-secondary">Subscribe</a></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5" style={{ background: "#dbe9f6" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-start p-5" style={{ color: "rgb(16,44,70)" }}>Latest blog & news</h3>
                    <a href="#" className="text-decoration-none fw-semibold" style={{ color: "#304a62" }}>View More <i class="bi bi-arrow-right"></i></a>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card blog-card border-0 shadow-sm">
                            <div className="position-relative">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/blog/blog_1.png" className="card-img-top rounded" alt="blog" />
                                <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                                    Pricing
                                </span>
                            </div>
                            <div className="card-body">
                                <p className="text-muted small mt-1">8 Nov, 2024</p>
                                <h6 className="fw-semibold">
                                    Business from the brink of ruin by optimizing our website....
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card blog-card border-0 shadow-sm">
                            <div className="position-relative">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/blog/blog_2.jpg" className="card-img-top rounded" alt="blog" />
                                <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                                    Pricing
                                </span>
                            </div>
                            <div className="card-body">
                                <p className="text-muted small mt-1">8 Nov, 2024</p>
                                <h6 className="fw-semibold">
                                    The work is top-notch and I consistently outrank all my...
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card blog-card border-0 shadow-sm">
                            <div className="position-relative">
                                <img src="https://themewagon.github.io/sustainable-nextjs/images/blog/blog_3.png" className="card-img-top rounded" alt="blog" />
                                <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                                    Pricing
                                </span>
                            </div>
                            <div className="card-body">
                                <p className="text-muted small mt-1">8 Nov, 2024</p>
                                <h6 className="fw-semibold">
                                    Grow my business through organic search and marketing..
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BlogDetails;
