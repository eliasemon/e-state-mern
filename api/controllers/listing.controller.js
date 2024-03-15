import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
        return next(errorHandler(404, "Listing not found!"));
    }

    if (String(req.user.id) !== String(listing.userRef)) {
        return next(
            errorHandler(401, "You can only delete your own listings!")
        );
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json("Listing has been deleted!");
    } catch (error) {
        next(error);
    }
};

export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404, "Listing not found!"));
    }
    if (String(req.user.id) !== String(listing.userRef)) {
        return next(
            errorHandler(401, "You can only update your own listings!")
        );
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedListing);
    } catch (error) {
        next(error);
    }
};

export const getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id).populate(
            "userRef"
        );
        if (!listing) {
            return next(errorHandler(404, "Listing not found!"));
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
};

export const getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9;
        const startIndex = parseInt(req.query.startIndex) || 0;
        const filterObj = {};
        let offer = req.query.offer;

        if (offer && offer !== "false") {
            filterObj["offer"] = true;
        }

        let furnished = req.query.furnished;

        if (furnished && furnished !== "false") {
            filterObj["furnished"] = true;
        }

        let parking = req.query.parking;

        if (parking && parking !== "false") {
            filterObj["parking"] = true;
        }

        let type = req.query.type;

        if (type && type !== "all") {
            filterObj["type"] = type;
        }

        const searchTerm = req.query.searchTerm || "";
        const searchRegex = new RegExp(searchTerm, "i");

        const sort = req.query.sort || "createdAt";

        const order = req.query.order || "desc";
        const listings = await Listing.find({
            $or: [{ name: searchRegex }, { address: searchRegex }],
            ...filterObj,
        })
            .populate("userRef")
            .sort({ [sort]: order })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
};
