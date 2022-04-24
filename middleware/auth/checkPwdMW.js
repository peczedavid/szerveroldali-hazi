/**
 * Leellenőrzi a jelszót POST-ból, ha helyes a jelszó, akkor a főoldalra (/tapkieg) dob vissza és létrehoz egy session-t.
 */

const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         if(typeof req.body.jelszo === 'undefined') {
             console.log("Helytelen jelszó");
             return next();
         }

         if(req.body.jelszo === 'admin') {
             req.session.belepve = true;
             return req.session.save(err => res.redirect("/tapkieg"));
         }

         res.locals.error = 'Hibás jelszó';
         console.log('Hibás jelszó');
         return next();
     };
 };