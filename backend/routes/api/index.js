const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const listingsRouter = require("./listings.js");
const imageRouter = require("./image.js");
const bookingRouter = require("./booking");
const searchRouter = require("./search");
const reviewRouter = require("./review");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/images', imageRouter);
router.use('/bookings', bookingRouter);
router.use('/reviews', reviewRouter);
router.use('/search', searchRouter);

module.exports = router;