const express = require("express");

const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter);

router.get('/hello/world', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

module.exports = router;