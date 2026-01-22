import API from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DeleteBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) {
      navigate("/");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setStatus("You must be logged in to delete a blog");
      return;
    }

    API.delete(`/blogs/${id}`)
      .then((res) => {
        setStatus(res.data.message || "Blog deleted");
        setTimeout(() => navigate("/"), 1500);
      })
      .catch((err) => {
        console.error("DELETE ERROR:", err);

        if (err.response) {
          setStatus(
            err.response.data?.message ||
            `Error ${err.response.status}`
          );
        } else {
          setStatus("Server not reachable");
        }
      });
  }, [id, navigate]);

  return (
    <div className="container mt-5 text-center">
      {status && (
        <div className="alert alert-info col-md-6 mx-auto">
          {status}
        </div>
      )}
    </div>
  );
}
