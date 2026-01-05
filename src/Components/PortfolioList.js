import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function PortfolioList() {
    return (
        <>
            <div class="container text-center bg-light">
                <h1 className="text-center mt-5">Portfolio</h1>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-start" style={{ color: "#102c46" }}>Work done by us to grow your revenue</h1>
                        <p className="text-start mt-4" style={{ color: "#547793" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt.</p>

                        <button className="btn btn-primary">Get Started <i class="bi bi-chevron-right"></i></button>
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
        </>
    );
}
export default PortfolioList;
