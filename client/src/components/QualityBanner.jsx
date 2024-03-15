import React from "react";
import Building from "../assets/images/Building.png";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const features = [
    "Outstanding property",
    "experienced human",
    "Provide the best services",
    "Modern city Icoations",
    "exceptional lifestyle",
    "Smart Home Design",
    "Exceptional Lifestyle",
    "Beautiful Scene Around",
    "Complete 24/7 Security",
];

export default function QualityBanner() {
    return (
        <div className="max-w-6xl mx-auto text-center lg:text-left grid gird-clos grid-cols-1 lg:grid-cols-2 lg:gap-10 p-3 py-20">
            <div>
                <img className="w-full h-full" src={Building} alt="" />
            </div>
            <div className="pt-5">
                <h1 className=" font-bold text-2xl lg:text-5xl mb-7">
                    We Specialize in Quality Home Revovations
                </h1>
                <p className="text-lg lg:text-xl mb-5 text-neutral-500">
                    With over 10 years in the home renovation business, we focus
                    on quality workmanship and using high-quality materials for
                    all our projects . Whether you need a bathroom or kitchen
                    remodel, basement finish, or full home renovation, you can
                    trust our team of experts to get the job done right.
                </p>

                <ul className="grid grid-cols-2">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-md sm:text-lg text-neutral-500 mb-2"
                        >
                            <IoCheckmarkCircleSharp className="text-primary-500/[.80] text-lg lg:text-xl" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
