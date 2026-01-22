import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get(`/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(() => setError("Failed to load blog"))
      .finally(() => setLoading(false));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      await API.put(
        `/blogs/${id}`,
        {
          title: e.target.title.value,
          description: e.target.description.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      navigate(`/blog/${id}`);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please login again.");
        navigate("/login");
      } else {
        setError("Failed to update blog");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <form onSubmit={submit} className="p-4 max-w-md mx-auto">
      <h3>Edit Blog</h3>
      <input
        name="title"
        defaultValue={blog.title}
        className="form-control mb-2"
        required
      />
      <textarea
        name="description"
        defaultValue={blog.description}
        className="form-control mb-2"
        required
      />
      <button className="btn btn-warning w-100">Update</button>
    </form>
  );
}
