import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname: path } = useLocation();

    return (
        <div className="w-screen -ml-[50vw] left-1/2 relative bg-blue-400">

            <div className="navbar max-w-7xl mx-auto text-white">
                {/* For small device */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden relative -left-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-400 relative -left-2 z-1 mt-3 w-[100vw] p-2 shadow-2xl">
                            <li>
                                <Link
                                    className={`${path == '/' || path == '/home' ? 'cmnTextColor' : ''}`}
                                    to="/">Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${path == '/about' ? 'cmnTextColor' : ''}`}
                                    to="/about">About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${path == '/services' ? 'cmnTextColor' : ''}`}
                                    to="/services">Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${path == '/portfolio' ? 'cmnTextColor' : ''}`}
                                    to="/portfolio">Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${path == '/contact' ? 'cmnTextColor' : ''}`}
                                    to="/contact">Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold relative -left-2 md:-left-0">CodesRaft</Link>
                </div>

                {/* For large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-medium">
                        <li>
                            <Link
                                className={`${path == '/' || path == '/home' ? 'cmnTextColor' : ''}`}
                                to="/">Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${path == '/about' ? 'cmnTextColor' : ''}`}
                                to="/about">About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${path == '/services' ? 'cmnTextColor' : ''}`}
                                to="/services">Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${path == '/portfolio' ? 'cmnTextColor' : ''}`}
                                to="/portfolio">Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${path == '/contact' ? 'cmnTextColor' : ''}`}
                                to="/contact">Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-3xl bg-[#FF0066] outline-0 text-white border-0">Download CV</a>
                </div>
            </div>

        </div>
    )
}
