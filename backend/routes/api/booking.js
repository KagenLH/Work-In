const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Booking, Review, User } = require("../../db/models");

const validateBooking = [
    check("startTime")
    .exists({ checkFalsy: true })
    .withMessage("Start date must be a valid date."),
    check("endTime")
    .exists({ checkFalsy: true })
    .withMessage("End date must be a valid date."),
    handleValidationErrors,
];

const router = express.Router();

const logRequest = (req, res, next) => {
    console.log(req.body);
    next();
}

router.get('/:id',
            requireAuth,
            asyncHandler( async (req, res, next) => {
                try {
                    const id = parseInt(req.params.id);
                    const booking = await Booking.findByPk(id, {
                        include: [Review, User]
                    });
    
                    if(booking.userId === req.user.id) {
                        res.json(booking);
                    } else {
                        const err = new Error("You can only access bookings that you own.");
                        err.status = 403;
                        next(err);
                    }
                } catch (err) {
                    next(err);
                }
}));

router.get('/',
            requireAuth,
            asyncHandler (async (req, res, next) => {
                try {
                    const id = req.user.id;

                    const bookings = await Booking.findAll({
                        where: {
                            userId: id
                        },
                        include: [Review, User]
                    });

                    res.json(bookings);
                } catch(err) {
                    next(err);
                }
}));

router.post('/',
             logRequest,
             requireAuth,
             validateBooking,
             asyncHandler( async (req, res, next) => {
                try {
                    const { startTime, endTime, listingId } = req.body;
                    const userId = req.user.id;
                    const booking = await Booking.create({
                        userId,
                        listingId,
                        startTime,
                        endTime
                    });

                    res.json(booking);
                }   catch(err) {
                    next(err);
                }
}));

router.delete('/:id',
                requireAuth,
                asyncHandler( async (req, res, next) => {
                    const id = parseInt(req.params.id);
                    try {
                        const booking = await Booking.findByPk(id);

                        if(booking.userId === req.user.id) {
                            await booking.destroy();
                            res.json({ message: "Booking was successfully deleted" });
                        } else {
                            const err = new Error("You can only delete bookings that you own.");
                            err.status = 403;
                            next(err);
                        }
                    } catch(err) {
                        next(err);
                    }
}));

module.exports = router;