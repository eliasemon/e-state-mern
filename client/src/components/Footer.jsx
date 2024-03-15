import React from "react";
import { Link } from "react-router-dom";
import Brand from "./ui/Brand";

export default function Footer() {
    return (
        <div className=" text-neutral-100 bg-neutral-900">
            <div className=" py-20 max-w-6xl mx-auto p-3 flex flex-col md:flex-row items-center md:items-start">
                <div className="w-1/3 pr-4 pb-10 flex flex-col items-center md:items-start">
                    <Brand bgBlack={true} />
                    <p className="text-sm mt-2 text-center md:text-left">
                        Our Vision is to make all people the place to live for
                        them
                    </p>
                </div>
                <div className=" w-full flex px-2 justify-between flex-col md:flex-row gap-5 text-center md:text-left">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">About</h1>
                        <Link className="hover:text-primary-100" to="/about">
                            About Us
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Features
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            News & Blog
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Company</h1>
                        <Link className="hover:text-primary-100" to="/">
                            How we Work?
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Capital
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Security
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Support</h1>
                        <Link className="hover:text-primary-100" to="/about">
                            FAQs
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Support Center
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-2xl">Movement</h1>
                        <Link className="hover:text-primary-100" to="/about">
                            What HavenHome
                        </Link>
                        <Link className="hover:text-primary-100" to="/">
                            Support Us
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-center py-3">
                Develop By ❤️ Elias Emon ❤️ | ©2023 HavenHome, All rights
                reserved.
            </p>
        </div>
    );
}
