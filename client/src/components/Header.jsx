import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Brand from "./ui/Brand";

export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState("");
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm", searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get("searchTerm");
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);
    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Brand Start  */}
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Brand />

                {/* menu start  */}
                <ul className="hidden sm:flex">
                    <Link to="/">
                        <li className="nav-link">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-link">About</li>
                    </Link>
                    <Link to="/search">
                        <li className="nav-link">Buy</li>
                    </Link>
                    <Link to="/create-listing">
                        <li className="nav-link">Sell</li>
                    </Link>
                </ul>

                {/* search start */}
                <div className="flex items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center box-border"
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-2 border-r-0
                            border-primary-100 p-2 pl-4 pr-5 rounded-l-lg bg-transparent focus:outline-none h-8 w-[10rem] md:w-[14rem]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-primary-500 h-8 p-2 rounded-lg ml-[-1rem] hover:bg-primary-600">
                            <FaSearch className="text-neutral-50 text-xl" />
                        </button>
                    </form>

                    <div className="hidden sm:flex sm:justify-end sm:w-full ml-2">
                        {currentUser ? (
                            <Link to="/profile">
                                <img
                                    className="border-2 border-primary-500 rounded-full h-7 w-7 object-cover"
                                    src={currentUser.avatar}
                                    alt="profile"
                                />
                            </Link>
                        ) : (
                            <ul className="flex">
                                <Link to="/sign-in">
                                    <li className="nav-link border-r-2 ">
                                        Sign in
                                    </li>
                                </Link>
                                <Link to="/sign-up">
                                    <li className="nav-link">Sign up</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                </div>

                {/* mobile menu start */}
                <div className="sm:hidden  block">
                    <button onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                        <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-100 group-hover:bg-white">
                            <GiHamburgerMenu className="text-2xl text-neutral-800" />
                        </div>
                    </button>
                </div>
            </div>
            {hamburgerOpen && (
                <div onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                    <HamburgerMenu currentUser={currentUser} />
                </div>
            )}
            {hamburgerOpen && (
                <div
                    onClick={() => setHamburgerOpen(!hamburgerOpen)}
                    className="fixed inset-0 z-9 bg-black/30"
                />
            )}
        </header>
    );
}
