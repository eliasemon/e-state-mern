import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/ExploreBanner.png";
export default function ExploreDirection() {
    return (
        <div className="max-w-6xl mx-auto mt-[50%] md:mt-40  rounded-3xl bg-primary-500 grid md:grid-cols-3 gap-2 my-10">
            <div className="mt-[-60%]">
                <img className="w-full h-full" src={image} alt="" />
            </div>
            <div className="md:col-span-2 flex justify-between items-center px-10 py-4">
                <div>
                    <h1 className="text-neutral-50 font-bold text-3xl">
                        Looking for a dream home?
                    </h1>
                    <p className="text-neutral-50 font-normal">
                        We help you make the dream of new house into reality.
                    </p>
                </div>
                <Link
                    className="px-10 bg-neutral-50 py-4 rounded-3xl text-primary-500 font-bold hover:shadow-2xl"
                    to="/search"
                >
                    Explore
                </Link>
            </div>
        </div>
    );
}
