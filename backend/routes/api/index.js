const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const listingsRouter = require("./listings.js");
const imageRouter = require("./image.js");

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/images', imageRouter);

module.exports = router;