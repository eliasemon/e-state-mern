import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
    const [message, setMessage] = useState("");
    const onChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <p>
                    Contact{" "}
                    <span className="font-semibold">
                        {listing.userRef.username}
                    </span>{" "}
                    for{" "}
                    <span className="font-semibold">
                        {listing.name.toLowerCase()}
                    </span>
                </p>
                <textarea
                    name="message"
                    id="message"
                    rows="2"
                    value={message}
                    onChange={onChange}
                    placeholder="Enter your message here..."
                    className="w-full border p-3 rounded-lg"
                ></textarea>

                <Link
                    to={`mailto:${listing?.userRef?.email}?subject=Regarding ${listing?.name}&body=${message}`}
                    className="bg-primary-500 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
                >
                    Send Message
                </Link>
            </div>
        </>
    );
}
