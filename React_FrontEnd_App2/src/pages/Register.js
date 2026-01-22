import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password) {
      setMsg("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/register", data);
      setMsg(res.data.message);
      setData({ name: "", email: "", password: "" });
    } catch (err) {
      setMsg(err.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-3">Register</h3>

              {msg && <div className="alert alert-info">{msg}</div>}

              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }
                />

                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />

                <button className="btn btn-success w-100">
                  Register
                </button>
              </form>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/login">Login</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
