import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOutUserStart,
} from "../redux/user/userSlice";
import { FaCamera } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
    const fileRef = useRef(null);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListings] = useState([]);
    const [loadingUserList, setLoadingUserList] = useState(false);
    const dispatch = useDispatch();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            if (e.target.value === "" || !e.target.value) {
                delete prevFormData[e.target.id];
                return { ...prevFormData };
            }
            return {
                ...prevFormData,
                [e.target.id]: e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const submitData = JSON.parse(JSON.stringify(formData));

        Object.keys(submitData).map((key) => {
            if (submitData[key] === "" && !submitData[key]) {
                delete submitData[key];
            }
        });

        try {
            dispatch(updateUserStart());
            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/user/update/${
                    currentUser._id
                }`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(submitData),
                }
            );
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
            setFilePerc(0);
            setTimeout(() => {
                setUpdateSuccess(false);
            }, 1500);
        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    };

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

    const handleShowListings = async () => {
        try {
            setShowListingsError(false);
            setLoadingUserList(true);
            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/user/listings/${
                    currentUser._id
                }`,
                {
                    credentials: "include",
                }
            );
            const data = await res.json();
            if (data.success === false) {
                setShowListingsError(true);
                return;
            }
            if (data?.length === 0) {
                window.alert("Create Listing First!");
            }
            setUserListings(data);
            setLoadingUserList(false);
        } catch (error) {
            setShowListingsError(true);
            setLoadingUserList(false);
        }
    };

    const handleListingDelete = async (listingId) => {
        try {
            const res = await fetch(
                `${
                    import.meta.env.VITE_API_BASE_URL
                }/api/listing/delete/${listingId}`,
                {
                    method: "DELETE",
                    credentials: "include",
                }
            );
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }

            setUserListings((prev) =>
                prev.filter((listing) => listing._id !== listingId)
            );
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex justify-center  gap-5 items-center h-full w-full">
                    <div
                        onClick={() => fileRef.current.click()}
                        className="group box-border relative rounded-full h-40 w-40  cursor-pointer"
                    >
                        <input
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            ref={fileRef}
                            hidden
                            accept="image/*"
                        />
                        <img
                            src={formData.avatar || currentUser.avatar}
                            alt="profile"
                            className="overflow-hidden rounded-full h-full w-full object-cover"
                        />
                        <div className=" bg-primary-500/[.80] absolute top-0 z-10 w-full h-full rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <FaCamera className="text-neutral-50 text-5xl" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-4xl font-medium">
                            {currentUser.username}
                        </h1>
                        <span
                            onClick={handleSignOut}
                            className="inline-block my-5 text-neutral-50 bg-red-600 py-2 px-4 rounded-xl cursor-pointer "
                        >
                            Sign out
                        </span>
                    </div>
                </div>

                <p className="text-sm self-center">
                    {fileUploadError ? (
                        <span className="text-red-700">
                            Error Image upload (image must be less than 2 mb)
                        </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                        <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                        <span className="text-green-700">
                            Image successfully uploaded! Click On Update profile
                            to save changes.
                        </span>
                    ) : (
                        ""
                    )}
                </p>
                <input
                    type="text"
                    placeholder="username"
                    defaultValue={currentUser.username}
                    id="username"
                    className="border p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    defaultValue={currentUser.email}
                    className="border p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    id="password"
                    className="border p-3 rounded-lg"
                />
                {error && <p className="text-red-700 mt-5">{error}</p>}
                {updateSuccess && (
                    <p className="text-green-700 mt-5">
                        User is updated successfully!
                    </p>
                )}

                <button
                    disabled={loading}
                    className="bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
                >
                    {loading ? "Loading..." : "Update"}
                </button>
                <Link
                    className="bg-primary-500 text-white p-3 rounded-lg uppercase text-center hover:opacity-95"
                    to={"/create-listing"}
                >
                    Create Listing
                </Link>
            </form>

            {userListings && userListings.length > 0 && (
                <div className="flex flex-col gap-4">
                    <h1 className="text-center mt-7 text-2xl font-semibold">
                        Your Listings
                    </h1>
                    {userListings.map((listing) => (
                        <div
                            key={listing._id}
                            className="border rounded-lg p-3 flex justify-between items-center gap-4"
                        >
                            <Link to={`/listing/${listing._id}`}>
                                <img
                                    src={listing.imageUrls[0]}
                                    alt="listing cover"
                                    className="h-16 w-16 object-contain"
                                />
                            </Link>
                            <Link
                                className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                                to={`/listing/${listing._id}`}
                            >
                                <p>{listing.name}</p>
                            </Link>

                            <div className="flex flex-col item-center">
                                <button
                                    onClick={() =>
                                        handleListingDelete(listing._id)
                                    }
                                    className="text-red-700 uppercase"
                                >
                                    Delete
                                </button>
                                <Link to={`/update-listing/${listing._id}`}>
                                    <button className="text-green-700 uppercase">
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <button
                onClick={handleShowListings}
                className="text-primary-700 font-semibold mt-10 bg"
            >
                Click to Load Your Listing ↓
            </button>
            <p className="text-red-700 mt-5">
                {showListingsError ? "Error showing listings" : ""}
            </p>
        </div>
    );
}
