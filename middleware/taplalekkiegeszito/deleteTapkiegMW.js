/**
 * Kitöröl egy táplálékkiegészítőt az adatbázisból. A használt entitás a res.locals.tapkieg
 * Törlés után a /tapkieg -re irányít
 */
 const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         if(typeof res.locals.tapkieg === 'undefined') { return next(); }

         res.locals.tapkieg.remove(err => {
             if(err) { return next(err); }

             return res.redirect('/tapkieg');
         });
     };
 };