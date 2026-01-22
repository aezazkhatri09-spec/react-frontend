import API from "../api";

function Login() {
  const submit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await API.post("/login", data);
    localStorage.setItem("token", res.data.token);
    window.location = "/";
  };

  return (
    <form onSubmit={submit} className="col-md-4 mx-auto">
      <h3>Login</h3>
      <input name="email" className="form-control mb-2" placeholder="Email" />
      <input name="password" type="password" className="form-control mb-2" placeholder="Password" />
      <button className="btn btn-primary w-100">Login</button>
    </form>
  );
}

export default Login;
