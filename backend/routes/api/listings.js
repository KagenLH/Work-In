const express = require("express");
const asyncHandler = require("express-async-handler");
const { check }  = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");

const { Listing } = require("../../db/models");

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler( async (req, res, next) => {
    const id = parseInt(req.params.id);

    try {
        const listing = await Listing.findByPk(id);
        console.log(listing);
        res.json({listing});
    } catch (err) {
        next(err);
    }
}));

module.exports = router;