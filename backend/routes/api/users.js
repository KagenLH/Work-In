const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

router.post("/", asyncHandler(async (req, res, next) => {
    const { email, password, username, avatarUrl } = req.body;
    const user = await User.signup({ email, username, password, avatarUrl });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));

module.exports = router;