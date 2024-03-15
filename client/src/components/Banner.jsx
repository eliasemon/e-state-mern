import React from "react";
import bannerImage from "../assets/images/banner.png";
import { Link } from "react-router-dom";
export default function Banner() {
    return (
        <div className="bg-primary-50">
            <div className="flex py-20 px-3 max-w-6xl mx-auto">
                {/* left section start  */}
                <div className="flex-1">
                    <h1 className="font-bold text-center text-neutral-700 lg:text-left mb-10  text-4xl lg:text-5xl ">
                        Real Estate Made Easy
                        <span className="block mt-4">
                            {" "}
                            With{" "}
                            <span className=" text-primary-500">HavenHome</span>
                        </span>
                    </h1>
                    <p className="text-center lg:text-left text-lg font-normal text-neutral-700 mb-10">
                        HavenHome is your one-stop destination for all things
                        real estate. Here you can find your dream home, sell
                        your property with confidence. With HavenHome you can be
                        assured of transparency, integrity, and personalized
                        service every step of the way. Let us make your real
                        estate journey a seamless and enjoyable experience.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Link
                            to={"/search"}
                            className="bg-primary-500 text-white font-bold py-2 px-4 rounded hover:bg-primary-700"
                        >
                            Find Property
                        </Link>
                    </div>

                    {/* counter start  */}
                    <div className="flex gap-7 mt-7 justify-center lg:justify-start">
                        <div>
                            <p className="font-bold text-3xl text-neutral-700 mb-1">
                                514+
                            </p>
                            <p className="text-neutral-700 font-medium">
                                Award Winning
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl text-neutral-700 mb-1">
                                354+
                            </p>
                            <p className="text-neutral-700 font-medium">
                                On Sell
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl text-neutral-700 mb-1">
                                10580+
                            </p>
                            <p className="text-neutral-700 font-medium">
                                Happy Customer
                            </p>
                        </div>
                    </div>
                </div>

                {/* right section Start */}
                <div className="hidden lg:block flex-1">
                    <img src={bannerImage} alt="Hero image" />
                </div>
            </div>
        </div>
    );
}
