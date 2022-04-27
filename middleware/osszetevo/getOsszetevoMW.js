/**
 * Betölt egy adott osszetevot :osszetevoid paramétert használva
 * Az eredményt elmetni res.locals.osszetevo -be
 */

 const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
    const OsszetevoModel = requireOption(objectrepository, 'OsszetevoModel');

    return function(req, res, next) {
        OsszetevoModel.findOne(
            {
                _id: req.params.osszetevoid
            },
            (err, osszetevo) => {
                if (err || !osszetevo) { return next(err); }

                res.locals.osszetevo = osszetevo;
                return next();
            }
        );
    };
 };