import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { TbHomeHand } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbBrandOffice } from "react-icons/tb";

export default function Service() {
    return (
        <div className="py-10">
            <h1 className="text-center font-bold text-5xl mb-5">Our Service</h1>
            <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <BiHomeCircle className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Buy a home
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Discover your dream home with us today! Our wide
                        selection of properties will guid you every step of the
                        way to find the perfect place to call your own.
                    </p>
                </div>
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <TbHomeHand className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Rent a home
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Looking for a place to rent? HavenHome has got you
                        covered! Our platform features a variety of rental
                        properties to choose from, making it easy for you to
                        find your perfect home.
                    </p>
                </div>
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <FaHandshakeSimple className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Become an agent
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Join our team of agents and help others find their dream
                        homes while building your own successful career in real
                        estate with HavenHome
                    </p>
                </div>
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <MdOutlineSecurity className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Extra Security
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Looking for extra security for your home or business? We
                        offer top-of-the-line security systems and services to
                        give you peace of mind and protect your property.
                    </p>
                </div>
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <HiBuildingOffice2 className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Luxury Apartment
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Indulge in opulence and sophistication with our
                        selection of luxury apartments, where comfort and style
                        meet to provide a one-of-a-kind living experience.
                    </p>
                </div>
                <div className="group  bg-neutral-100 rounded-md flex flex-col items-center text-center p-10 gap-5 hover:bg-neutral-50/[0.01] hover:shadow-lg">
                    <div className="inline-block rounded-full bg-primary-100/[.30] p-8 group-hover:bg-primary-500">
                        <TbBrandOffice className="text-primary-500 text-6xl group-hover:text-neutral-50" />
                    </div>
                    <h1 className="text-3xl font-semibold text-neutral-600/[.80]">
                        Office Revolution
                    </h1>
                    <p className="text-lg text-neutral-600/[.70]">
                        Looking for a workspace that reflects your brand and
                        encourages creativity? Our Office Revolution spaces
                        offer modern and dynamic environments designed to
                        inspire your team and boost productivity..
                    </p>
                </div>
            </div>
        </div>
    );
}
