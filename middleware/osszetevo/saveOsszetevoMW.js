/**
 * A POST-ban kapott paraméterből kiolvasva vagy frissít vagy létrehoz egy összetevőt az adatbázisban.
 * Ha a res.locals.osszetevo létezik, akkor frissít, ha nem, akkor létrehoz.
 * Átirányít a /osszetevo-re ha sikerült.
 */

 const requireOption = require("../requireOptionMW");

 module.exports = function (objectrepository) {
    const OsszetevoModel = requireOption(objectrepository, 'OsszetevoModel');

     return function (req, res, next) {
        console.log("Save osszetevo");
        if( typeof req.body.nev === 'undefined' ||
            typeof req.body.leiras === 'undefined' ||
            typeof req.body.ajanlottAdag === 'undefined'
        ){  return next(); }

        if (typeof res.locals.osszetevo === 'undefined') {
            res.locals.osszetevo = new OsszetevoModel();
        }

        res.locals.osszetevo.nev = req.body.nev;
        res.locals.osszetevo.leiras = req.body.leiras;
        res.locals.osszetevo.ajanlottAdag = req.body.ajanlottAdag;
        res.locals.osszetevo.save(err => {
            if(err) return next(err);

            return res.redirect("/osszetevo");
        });
     };
 };