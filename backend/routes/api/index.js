const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const listingsRouter = require("./listings.js");
const imageRouter = require("./image.js");
const bookingRouter = require("./booking");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/images', imageRouter);
router.use('/bookings', bookingRouter);

module.exports = router;