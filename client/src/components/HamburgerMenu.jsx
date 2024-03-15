import React from "react";
import { FaHome } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    deleteUserFailure,
    deleteUserSuccess,
    signOutUserStart,
} from "../redux/user/userSlice";

export default function HamburgerMenu({ currentUser }) {
    const dispatch = useDispatch();
    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/auth/signout`
            );
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data.message));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(data.message));
        }
    };
    return (
        <div class="relative">
            <div class="absolute right-[-1rem] z-10 flex px-4">
                <div class="max-w-md flex-auto overflow-hidden rounded-l-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div class="p-4">
                        <Link to="/">
                            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-50">
                                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                                    <FaHome className="text-neutral-600 group-hover:text-primary-500 text-lg" />
                                </div>
                                <div>
                                    <h1 class="font-semibold text-neutral-700">
                                        Home
                                    </h1>
                                    <p class="mt-1 text-gray-600">
                                        Discover | Explore | Learn More
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-50">
                                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                                    <BsInfoCircleFill className="text-neutral-600 group-hover:text-primary-500 text-lg" />
                                </div>
                                <div>
                                    <h1 class="font-semibold text-neutral-700">
                                        About
                                    </h1>
                                    <p class="mt-1 text-gray-600">
                                        Our Story | Who We Are | Meet the Team
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/search">
                            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-50">
                                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                                    <BiSolidPurchaseTag className="text-neutral-600 group-hover:text-primary-500 text-lg" />
                                </div>
                                <div>
                                    <h1 class="font-semibold text-neutral-700">
                                        Buy
                                    </h1>
                                    <p class="mt-1 text-gray-600">
                                        Start Your Homeownership Journey
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/create-listing">
                            <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-neutral-50">
                                <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-neutral-50 group-hover:bg-white">
                                    <FaHandshakeSimple className="text-neutral-600 group-hover:text-primary-500 text-lg" />
                                </div>
                                <div>
                                    <h1 class="font-semibold text-neutral-700">
                                        Sell
                                    </h1>
                                    <p class="mt-1 text-gray-600">
                                        Get Top Deal for Your Property
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {currentUser && (
                            <>
                                <Link
                                    to="/profile"
                                    class="group flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    <img
                                        className="rounded-full h-7 w-7 object-cover"
                                        src={currentUser.avatar}
                                        alt="profile"
                                    />
                                    <span className="nav-link">Profile</span>
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    class="group flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    <RiLogoutBoxLine className="text-red-500" />
                                    <span className="nav-link">Log Out</span>
                                </button>
                            </>
                        )}

                        {!currentUser && (
                            <>
                                <Link
                                    to="/sign-in"
                                    class="group flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    <FaBuildingCircleCheck className="text-neutral-500 group-hover:text-primary-500" />
                                    <span className="nav-link">Sign In</span>
                                </Link>
                                <Link
                                    to="/sign-up"
                                    class="group flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                >
                                    <FaCashRegister className="text-neutral-500 group-hover:text-primary-500" />
                                    <span className="nav-link">Sign Up</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
