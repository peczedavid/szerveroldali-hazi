/**
 * Kitöröl egy táplálékkiegészítőt az adatbázisból. A használt entitás a res.locals.tapkieg
 * Törlés után a /tapkieg -re irányít
 */

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };