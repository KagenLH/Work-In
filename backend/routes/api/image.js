const express = require("express");
const asyncHandler = require("express-async-handler");

const { restoreUser } = require("../../utils/auth");
const { User, Listing, Image } = require("../../db/models");

const router = express.Router();

router.delete("/:id", restoreUser, asyncHandler(async (req, res, next) => {
    const userId = req.user.id;

    const imageId = req.params.id;

    const image = await Image.findByPk(imageId);
    const listing = await Listing.findByPk(image.listingId);
    if(userId === listing.userId) {
        await image.destroy();
        res.json({ message: "Image deletion was successful." });
    } else {
        const err = new Error("You can only delete images that you own.");
        next(err);
    }
}));

module.exports = router;