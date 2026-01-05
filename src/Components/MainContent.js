import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";
import PortfolioList from "./PortfolioList";
import PortfolioDetails from "./PortfolioDetails";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import Docs from "./Docs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function MainContent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />

                    //Portfolio section routing
                    <Route path="/Portfoliolist" element={<PortfolioList />} />
                    <Route path="/Portfoliodetails" element={<PortfolioDetails />} />

                    //Blog section routing
                    <Route path="/Bloglist" element={<BlogList />} />
                    <Route path="/Blogdetails" element={<BlogDetails />} />

                    <Route path="/Contact" element={<Contact />} />

                    <Route path="/Docs" element={<Docs />} />

                    //SignIn routing and SignUp routing
                    <Route path="/Signin" element={<SignIn />} />
                    <Route path="/Signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}
export default MainContent;
