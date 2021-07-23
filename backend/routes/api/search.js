const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");

const { Listing, Image, User } = require("../../db/models");
const { parseSearchString } = require("../../utils/parse");

const router = express.Router();

router.get("/:keyword",
            parseSearchString,
            asyncHandler(async (req, res, next) => {
                const keyword = req.keyword

                console.log(keyword);
                const results = await Listing.findAll({
                    where: {
                        [Op.or]: {
                            name: {
                                [Op.iLike]: `%${keyword}%`,
                            },
                            address: {
                                [Op.iLike]: `%${keyword}%`,
                            },
                            city: {
                                [Op.iLike]: `%${keyword}%`,
                            },
                            state: {
                                [Op.iLike]: `%${keyword}%`,
                            },
                            country: {
                                [Op.iLike]: `%${keyword}%`,
                            },
                        },
                    },
                    limit: 5,
                    include: [Image, User]
                });

                res.json(results);
}));

module.exports = router;