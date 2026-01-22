import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBlogFromResponse } from "../utils/getBlogFromResponse";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        const blogData = getBlogFromResponse(res);

        if (!blogData) {
          setError("Blog not found");
        } else {
          setBlog(blogData);
        }
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
        setError("Failed to load blog");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    axios.delete(`http://localhost:5000/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => navigate("/"))
      .catch((err) => {
        console.error(err.response?.data || err.message);

        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          alert("Session expired. Please login again.");
          navigate("/login");
        } else {
          setError("Failed to delete blog");
        }
      });
  };


  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{error}</div>
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow">
        {blog.image && (
          <img
            src={blog.image}
            className="card-img-top"
            style={{ maxHeight: "400px", objectFit: "cover" }}
            alt="Blog"
          />
        )}

        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>

          {blog.createdAt && (
            <p className="text-muted">
              Published on{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
          )}

          <p className="card-text">{blog.description}</p>

          <div className="d-flex gap-2 mt-4">
            <Link to={`/edit/${blog._id}`} className="btn btn-warning">
              Edit
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete
            </button>

            <Link to="/" className="btn btn-secondary ms-auto">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
