import React from "react";
import { Link } from "react-router-dom";
import brandImage from "../../assets/svg/logo48.svg";

export default function Brand({ bgBlack = false }) {
    return (
        <Link to="/">
            <h1 className="font-bold text-xl flex items-center">
                <img
                    className="w-10 h-10 mr-1"
                    src={brandImage}
                    alt="Brand Logo"
                />
                <span className={`${bgBlack ? "inline" : "hidden md:inline"}`}>
                    <span className=" text-primary-500">Haven</span>
                    <span
                        className={`${
                            bgBlack ? "text-neutral-50" : "text-neutral-700"
                        }`}
                    >
                        Home
                    </span>
                </span>
            </h1>
        </Link>
    );
}

// ${
//
// }
