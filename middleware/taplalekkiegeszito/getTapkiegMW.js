/**
 * Betölt egy adott osszetevot :tapkiegid paramétert használva
 * Az eredményt elmetni res.locals.tapkieg -be
 */

 const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
    const TapkiegModel = requireOption(objectrepository, 'TapkiegModel');

    return function(req, res, next) {
        TapkiegModel
        .findOne( {_id: req.params.tapkiegid} )
        .populate('_osszetevok')
        .exec(
            (err, tapkieg) => {
                if(err || !tapkieg) { return next(err); }
                
                res.locals.tapkieg = tapkieg;
                return next();
            }
        );
    };
 };

//  module.exports = function (objectrepository) {
//     const TapkiegModel = requireOption(objectrepository, 'TapkiegModel');

//     return function(req, res, next) {
//         TapkiegModel.findOne(
//             {
//                 _id: req.params.tapkiegid
//             },
//             (err, tapkieg) => {
//                 if (err || !tapkieg) {
//                     return next(err);
//                 }

//                 res.locals.tapkieg = tapkieg;
//                 return next();
//             }
//         );
//     };
//  };