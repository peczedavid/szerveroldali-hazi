/**
 * Betölti az összes táplálékkiegészítőt az adatbázisból
 * Az eredményt elmetni res.locals.tapkiegek -be
 */

const requireOption = require("../requireOptionMW");

module.exports = function (objectrepository) {
    const TapkiegModel = requireOption(objectrepository, 'TapkiegModel')
    
    return function (req, res, next) {
        TapkiegModel.find({}, (err, tapkiegek) => {
            if(err) {
                return next(err);
            }

            res.locals.tapkiegek = tapkiegek;
            return next();
        });
     };
 };