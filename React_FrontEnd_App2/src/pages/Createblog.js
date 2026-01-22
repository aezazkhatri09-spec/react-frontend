// src/pages/CreateBlog.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function CreateBlog() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login first");
      setLoading(false);
      navigate("/login");
      return;
    }

    const file = e.target.image.files[0];
    if (!file) {
      setError("Please select an image");
      setLoading(false);
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      try {
        await API.post(
          "/blogs",
          {
            title: e.target.title.value,
            description: e.target.description.value,
            image: reader.result, // base64 image
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        navigate("/");
      } catch (err) {
        console.error(err.response?.data || err.message);

        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          alert("Session expired. Please login again.");
          navigate("/login");
        } else {
          setError(err.response?.data?.message || "Failed to create blog");
        }
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-xl mb-3">Create Blog</h3>

      {error && <p className="text-danger mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          className="form-control mb-2"
          placeholder="Title"
          required
        />

        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Description"
          required
        />

        <input
          name="image"
          type="file"
          className="form-control mb-3"
          accept="image/*"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
