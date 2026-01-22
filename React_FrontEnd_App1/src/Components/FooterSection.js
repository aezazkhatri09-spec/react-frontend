import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function FooterSection() {

    return (
        <>
            <footer
                className="text-white pt-5 pb-4 mt-5" style={{ backgroundColor: "#102c46" }}>

                <div className="container">
                    <img src="https://themewagon.github.io/sustainable-nextjs/images/footer/ftr-logo.svg" />

                    <hr />
                    <div className="row mb-4 mt-5">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <h5 className="fw-semibold mb-3">Features</h5>
                            <ul className="list-unstyled opacity-75">
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Online Payments</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Financial Projections</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Bookkeeping</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Banking</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <h5 className="fw-semibold mb-3">Resources</h5>
                            <ul className="list-unstyled text-light opacity-75">
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Documentation</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Integrations</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">API Reference</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Support</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Help</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <h5 className="fw-semibold mb-3">Platform</h5>
                            <ul className="list-unstyled text-light opacity-75">
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Infrastructure</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Certifications</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Licenses</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Terms and conditions</a></li>
                                <li><a href="#" className="link-underline text-secondary link-underline-opacity-0">Legal</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <h5 className="fw-semibold mb-3">Sign up for updates</h5>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email address*"
                                />
                                <button className="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-secondary opacity-75 small">
                        &copy;  Copyright 2025. All rights reserved
                    </div>  
                </div>
            </footer>
        </>
    );
}
export default FooterSection;
