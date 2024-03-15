import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Banner from "./../components/Banner";
import Service from "../components/Service";
import QualityBanner from "../components/QualityBanner";
import ExploreDirection from "./../components/ui/ExploreDirection";

import {
    Navigation,
    Pagination,
    A11y,
    Virtual,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

export default function Home() {
    const [featureContents, setFeatureContents] = useState([]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop();
        const fetchFeatureContents = async () => {
            try {
                const res = await fetch(
                    `${
                        import.meta.env.VITE_API_BASE_URL
                    }/api/listing/get?limit=12`
                );
                const data = await res.json();
                setFeatureContents(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFeatureContents();
    }, []);
    return (
        <div>
            <Banner />

            {/* featureContents  */}
            <div className="py-20">
                <h1 className="text-center font-bold text-neutral-700 text-4xl">
                    Feature Content
                </h1>
                {featureContents && featureContents.length > 0 && (
                    <>
                        <div className="max-w-6xl mx-auto hidden md:block">
                            <Swiper
                                className=" h-full py-10"
                                modules={[Pagination, A11y, Virtual, Autoplay]}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={30}
                                slidesPerView={3}
                                pagination={{ clickable: true }}
                                virtual
                            >
                                {featureContents.map((listing) => (
                                    <SwiperSlide>
                                        <ListingItem
                                            listing={listing}
                                            key={listing._id}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="max-w-6xl px-4 box-border overflow-x-hidden mx-auto md:hidden">
                            <Swiper
                                className="py-10 h-full"
                                modules={[
                                    Navigation,
                                    Pagination,
                                    A11y,
                                    Virtual,
                                    Autoplay,
                                ]}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                virtual
                            >
                                {featureContents.map((listing) => (
                                    <SwiperSlide>
                                        <ListingItem
                                            listing={listing}
                                            key={listing._id}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                )}
                <div className="flex justify-center mt-2">
                    <Link
                        to={"/search"}
                        className="bg-primary-500 text-white font-bold py-2 px-4 rounded hover:bg-primary-700"
                    >
                        Find More
                    </Link>
                </div>
            </div>

            {/* service section  */}
            <Service />

            <QualityBanner />

            {/* listing results for offer, sale and rent */}

            <ExploreDirection />
        </div>
    );
}

// <Swiper navigation>

//             </Swiper>

/* {offerListings && offerListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">
                                Recent offers
                            </h2>
                            <Link
                                className="text-sm text-blue-800 hover:underline"
                                to={"/search?offer=true"}
                            >
                                Show more offers
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {offerListings.map((listing) => (
                                <ListingItem
                                    listing={listing}
                                    key={listing._id}
                                />
                            ))}
                        </div>
                    </div>
                )} */
