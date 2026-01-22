import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function NavbarSection() {
    return (
        <>
            <div className="bg-primary">
                <nav className="navbar navbar-expand-lg navbar-light mx-auto container mainNavigation">
                    <a className="navbar-brand" href="http://localhost:3000/">
                        <img src="https://themewagon.github.io/sustainable-nextjs/images/logo/logo.svg" alt="Logo" loading="lazy" height="50" width="150" decoding="async" data-nimg="1" style={{ color: "transparent", width: "auto", height: "auto" }} />
                    </a>

                    <button className="navbar-toggler flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white" aria-labelledby="Toggle theme" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">  
                            <svg viewBox="0 0 16 16" className="hidden h-6 w-6 dark:block false">
                                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 
                                12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" fill="#FFFF">
                                </path>
                            </svg>
                            <svg viewBox="0 0 23 23" className="h-8 w-8 text-dark dark:hidden false">
                                <path
                                    d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z"
                                >
                                </path>
                            </svg>
                        </span>
                    </button>

                    <div className="container nav mx-auto py-3 d-flex items-center justify-between p-6" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ms-5 hidden lg:flex grow items-center justify-center gap-6">
                            <li className="nav-item relative null">
                                <a className="nav-link text-white " href="/">Home</a>
                            </li>
                            <li className="nav-item relative null">
                                <a className="nav-link text-white" href="/About">About</a>
                            </li>
                            <li className="nav-item dropdown relative null">
                                <a className="nav-link text-white dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Portfolio
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/Portfoliolist">Portfolio list</a>
                                    <a className="dropdown-item" href="/Portfoliodetails">Portfolio details</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown relative null">
                                <a className="nav-link text-white dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Blog
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/Bloglist">Blog list</a>
                                    <a className="dropdown-item" href="/Blogdetails">Blog details</a>
                                </div>
                            </li>
                            <li className="nav-item relative null">
                                <a className="nav-link text-white" href="/Contact">Contact</a>
                            </li>
                            <li className="nav-item relative null">
                                <a className="nav-link text-white" href="/Docs">Docs</a>
                            </li>
                        </ul>
                        <div className="d-flex ms-5">
                            <svg viewBox="0 0 23 23" className="h-25 dark-icon  text-dark dark:hidden " style={{ width: "10%" }}>
                                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z">
                                </path>
                            </svg>
                            <svg viewBox="0 0 16 16" className="d-none h-25 light-icon" style={{ width: "10%" }}>
                                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" fill="#FFFFFF">
                                </path>
                            </svg>
                            <a className="ms-3 btn btn-light" href="/Signin">Sign In</a>
                            <a className="btn btn-warning ms-2" href="/Signup">Sign Up</a>
                        </div>  
                    </div>
                </nav>
            </div>
        </>
    );
}
export default NavbarSection;
