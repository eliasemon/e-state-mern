import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const handleGoogleClick = async () => {
        try {
            setError(false);
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            console.log(result.user.accessToken);

            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/auth/google`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        name: result.user.displayName,
                        email: result.user.email,
                        photo: result.user.photoURL,
                        accessToken: result?.user?.accessToken,
                    }),
                }
            );
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            setError("could not sign in with google");
        }
    };
    return (
        <div>
            <button
                onClick={handleGoogleClick}
                type="button"
                className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
            >
                Continue with google
            </button>
            {error && <p className="text-red-500 text-center"> {setError}</p>}
        </div>
    );
}
