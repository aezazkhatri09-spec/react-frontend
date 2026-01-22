import { Routes, Route } from "react-router-dom";
import BlogDetails from "./pages/Blogdetails";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import EditBlog from "./components/Editblog";
import CreateBlog from "./pages/Createblog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DeleteBlog from "./pages/Deleteblog";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/delete/:id" element={<DeleteBlog />} />
      </Routes>
    </>
  );
}

export default App;
