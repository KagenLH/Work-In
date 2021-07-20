const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.')
      .trim()
      .normalizeEmail(),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.')
      .isLength({ max: 50 })
      .withMessage('Usename cannot be longer than 50 characters')
      .trim(),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters.')
      .isStrongPassword()
      .withMessage('Password must have at least one lowercase and one uppercase letter, one number, and one symbol.')
      .not()
      .contains(" ")
      .withMessage("Password cannot contain spaces."),
    handleValidationErrors,
];

const sanitizeSignup = [

];

const router = express.Router();

router.post("/", validateSignup, asyncHandler(async (req, res, next) => {
    const { email, password, username, avatarUrl } = req.body;
    const user = await User.signup({ email, username, password, avatarUrl });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));

module.exports = router;