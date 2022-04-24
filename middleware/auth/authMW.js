/**
 * Ha a felhasználó hitelesítve van, akkor tovább hív, egyébként átirányít /tapkieg -re
 */

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         if(req.session.belepve === 'undefined' || req.session.belepve !== true) {
             res.locals.belepve = false;
             return res.redirect("/tapkieg");
         }
         res.locals.belepve = true;
         return next();
     };
 };