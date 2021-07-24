const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { Op } = require("sequelize");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Listing, Booking, User, Review } = require("../../db/models");

const router = express.Router();

const validateReviews = [
    check("bookingId")
    .exists({ checkFalsy: true })
    .withMessage("Reviews must be associated with a booking!")
    .isInt()
    .withMessage("Invalid booking ID. Booking IDs must be integers."),
    check("numStars")
    .exists({ checkFalsy: true })
    .withMessage("Reviews must have a number of stars associated.")
    .isDecimal()
    .withMessage("The number of stars for a review must be a decimal."),
    check("content")
    .exists({ checkFalsy: true })
    .withMessage("Reviews must have some written content!"),
    handleValidationErrors,
];

router.post('/',
                requireAuth,
                validateReviews,
                asyncHandler(async (req, res, next) => {
                    const { bookingId, numStars, content } = req.body;
                    const userId = req.user.id;

                    try {
                        const booking = await Booking.findByPk(bookingId);

                        // Check that the user that is making this request owns the booking the review is being made for
                        if(booking.userId === userId) {
                            const [review, reviewCreated] = await Review.findOrCreate({
                                where: {
                                    [Op.and]: {
                                        bookingId,
                                        userId,
                                    },
                                },
                                defaults: {
                                    userId,
                                    bookingId,
                                    numStars,
                                    content,
                                },
                            });

                            if(!review) {
                                const err = new Error("You can only post one review per booking!");
                                err.status = 401;
                                next(err);
                            }

                            res.json(review);
                        }
                    } catch (err) {
                        next(err);
                    }
}));



module.exports = router;