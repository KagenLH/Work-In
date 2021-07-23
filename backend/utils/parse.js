const parseSearchString = (req, res, next) => {
    const { keyword } = req.params;

    console.log(keyword);
    req.keyword = decodeURIComponent(keyword);
    next();
};

module.exports = {
    parseSearchString,
};