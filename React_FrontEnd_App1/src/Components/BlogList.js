import "../index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function BlogList() {
    
    const blogData = [
        {
            id: 1,
            title: "Business from the brink of ruin by optimizing our website....",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_1.png"
        },
        {
            id: 2,
            title: "The work is top-notch and I consistently outrank all my…",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_2.jpg"
        },
        {
            id: 3,
            title: "Grow my business through organic search and marketing strategies…",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_3.png"
        },
        {
            id: 4,
            title: "Tailored to your audience to enhance brand awareness...",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_4.jpg"
        },
        {
            id: 5,
            title: "Uncover valuable insights for strategic business decisions...",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_5.jpg"
        },
        {
            id:6,
            title: "Drive growth and achieve your business objectives effectively...",
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_6.jpg"
        },
        {
            id: 7,
            title: "Free access to our global partner network and marketplace...",  
            date: "08 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_7.jpg"
        },
        {
            id: 8,
            title: "Define each stage of work to see whats important for you...",
            date: "8 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_8.jpg"
        },
        {
            id: 9,
            title: "We have a plan that aligns perfectly with your goal...",
            date: "8 Nov 2024",
            image: "https://themewagon.github.io/sustainable-nextjs/images/blog/blog_9.jpg"
        },
    ]
    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mt-5">Blog</h1>
                <p className="text-center mt-4">Discover a wealth of insightful materials meticulously crafted to provide you <br /> with a comprehensive understanding of the latest trends.</p>
                <br />
                <br />
                <div className="row g-4">
                    {blogData.map((blog) => (
                        <div className="col-md-4" key={blog.id}>
                            <div className="card shadow-sm border-0 blog-card">
                                <div className="position-relative">
                                    <img
                                        src={blog.image}
                                        className="card-img-top rounded"
                                        alt="Blog"
                                    />
                                    <span className="badge bg-primary position-absolute top-0 start-0 m-3 px-3 py-2">
                                        Pricing
                                    </span>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title fw-semibold">{blog.title}</h5>

                                    <p className="text-muted small mt-3">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default BlogList;
