const express = require("express");
const asyncHandler = require("express-async-handler");
const { check }  = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { restoreUser } = require("../../utils/auth");
const { multipleMulterUpload, multiplePublicFileUpload } = require("../../awsS3");

const { Listing, Image, User } = require("../../db/models");

const router = express.Router();

const validateListing = [
    check("name")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("You must give a name to your listing.")
    .isLength({min: 10, max: 200})
    .withMessage("Your listing's name must be at least 10 and no more than 200 characters."),
    check("address")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("You must provide an address for your listing.")
    .isLength({min: 5, max: 255})
    .withMessage("A valid address is required."),
    check("city")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("You must provide a city for your listing.")
    .isLength({ max: 100 })
    .withMessage("City for the listing must be a valid city."),
    check("state")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("You must provide a state or province for your listing.")
    .isLength({ max: 60 })
    .withMessage("State/Province for listing must be valid."),
    check("country")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("You must provide a country for your listing.")
    .isLength({ max: 60 })
    .withMessage("Country for listing must be valid."),
    check("description")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("Your listing must have a description."),
    check("price")
    .trim()
    .exists({ checkFalsy: true })
    .withMessage("A price for the listing is required.")
    .isDecimal({ decimal_digits: 2})
    .withMessage("Price must be a valid price (XX.XX)"),
    handleValidationErrors,
];

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
    const id = parseInt(req.params.id);

    try {
        const listing = await Listing.findByPk(id, {
            include: [Image, User]
        });
        res.json(listing);
    } catch (err) {
        next(err);
    }
}));

router.get('/', asyncHandler( async (req, res, next) => {
    try {
        const listings = await Listing.findAll({
            include: [Image, User]
        });
        res.json(listings);
    } catch (err) {
        next(err);
    }
}));

router.post('/', multipleMulterUpload("images"), restoreUser, validateListing, asyncHandler( async (req, res, next) => {
    const { name, address, city, state, country, price, description } = req.body;
    const userId = req.user.id;

    console.log(req.body);

    try {
        const newListing = await Listing.create({
            userId,
            name,
            address,
            city,
            state,
            country,
            price,
            description
        });

        if(newListing) {
            const imageUrls = await multiplePublicFileUpload(req.images);
            imageUrls.forEach(async imageUrl => {
                await Image.create({ listingId: newListing.id, url: imageUrl });
            });
        }

        res.json(newListing);
    } catch(err) {
        next(err);
    }
}));

module.exports = router;