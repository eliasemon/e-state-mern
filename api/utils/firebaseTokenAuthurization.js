import { getAuth } from "firebase-admin/auth";
import { errorHandler } from "./error.js";
export const firebaseUserAuthorization = async (token) => {
    const auth = getAuth();
    try {
        const decodedToken = await auth.verifyIdToken(token);
        if (!decodedToken || !decodedToken.uid)
            throw errorHandler(403, "Forbidden");
        const VerifyUser = await auth.getUserByEmail(decodedToken.email);
        if (!VerifyUser || !VerifyUser.uid)
            throw errorHandler(403, "Forbidden");
        return VerifyUser;
    } catch (error) {
        error.statusCode = 403;
        throw error;
    }
};
