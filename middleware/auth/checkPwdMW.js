/**
 * Leellenőrzi a jelszót POST-ból, ha helyes a jelszó, akkor a főoldalra (/tapkieg) dob vissza és létrehoz egy session-t.
 */

const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         if(typeof req.body.jelszo === 'undefined') {
             return next();
         }

         if(req.body.nev === 'admin' && req.body.jelszo === 'admin') {
             req.session.belepve = true;
             return req.session.save(() => res.redirect("/tapkieg"));
         }

         res.locals.error = 'Hibás adatok';
         return next();
     };
 };