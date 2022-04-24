/**
 * Betölti az összes összetevőt az adatbázisból
 * Az eredményt elmetni res.locals.osszetevok -be
 */

 const requireOption = require("../requireOptionMW");

 module.exports = function (objectrepository) {
    const OsszetevoModel = requireOption(objectrepository, 'OsszetevoModel')
    
    return function (req, res, next) {
        OsszetevoModel.find({}, (err, osszetevok) => {
            if(err) {
                return next(err);
            }

            res.locals.osszetevok = osszetevok;
            return next();
        });
     };
 };