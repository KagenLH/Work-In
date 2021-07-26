const parseSearchString = (req, res, next) => {
    const { keyword } = req.params;

    req.keyword = decodeURIComponent(keyword);
    next();
};

module.exports = {
    parseSearchString,
};