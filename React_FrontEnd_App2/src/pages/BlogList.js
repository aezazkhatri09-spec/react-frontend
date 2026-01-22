import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/blogs")
            .then(res => {
                setBlogs(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>All Blogs</h2>
                <Link to="/create" className="btn btn-success">
                    + Create Blog
                </Link>
            </div>

            {blogs.length === 0 ? (
                <div className="alert alert-info text-center">
                    No blogs available
                </div>
            ) : (
                <div className="row">
                    {blogs.map(blog => (
                        <div className="col-md-4 mb-3" key={blog._id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={blog.image}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                    alt="blog"
                                />

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{blog.title}</h5>

                                    <p className="text-muted">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </p>

                                    <div className="mt-auto d-flex gap-2">
                                        <Link to={`/blog/${blog._id}`} className="btn btn-primary btn-sm">
                                            View
                                        </Link>

                                        <Link
                                            to={`/edit/${blog._id}`}
                                            className="btn btn-warning btn-sm"
                                        >
                                            Edit
                                        </Link>

                                        <Link
                                            to={`/delete/${blog._id}`}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
