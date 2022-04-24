//const requireOption = require("../requireOptionMW");

module.exports = (req, res, next) => {
        res.locals.belepve = req.session.belepve;
        return next();
};