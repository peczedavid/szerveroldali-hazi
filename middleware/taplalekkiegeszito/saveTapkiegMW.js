/**
 * A POST-ban kapott paraméterből kiolvasva vagy frissít vagy létrehoz egy táplálékkiegészítőt az adatbázisban.
 * Ha a res.locals.tapkieg létezik, akkor frissít, ha nem, akkor létrehoz.
 * Átirányít a /tapkieg -re ha sikerült.
 */

 const requireOption = require('../requireOptionMW');

 module.exports = function (objectrepository) {
    const TapkiegModel = requireOption(objectrepository, 'TapkiegModel');
    const OsszetevoModel = requireOption(objectrepository, 'OsszetevoModel');

    return function (req, res, next) {
         if(typeof req.body.nev === 'undefined' ||
            typeof req.body.leiras === 'undefined' ||
            typeof req.body.ajanlottAdag === 'undefined'
         ) { return next(); }

        if(typeof res.locals.tapkieg === 'undefined') {
            res.locals.tapkieg = new TapkiegModel();
        }

        res.locals.tapkieg.nev = req.body.nev;
        res.locals.tapkieg.leiras = req.body.leiras;
        res.locals.tapkieg.ajanlottAdag = req.body.ajanlottAdag;

        res.locals.tapkieg._osszetevok = [];
        const promises = [];

        if(typeof req.body.osszetevok === 'string') {
            promises.push(
                OsszetevoModel.findOne( { _id: req.body.osszetevok} ,
                    (err, osszetevo) => {
                        if (err || !osszetevo) {
                            return next(err);
                        }
        
                        return osszetevo;
                    }
                ).clone()
            );
        }
        else if(typeof req.body.osszetevok === 'object'){
            req.body.osszetevok.forEach(id => {
                promises.push(
                    OsszetevoModel.findOne( { _id: id} ,
                        (err, osszetevo) => {
                            if (err || !osszetevo) {
                                return next(err);
                            }
            
                            return osszetevo;
                        }
                    ).clone()
                );
            });
        }
        
        Promise.all(promises).then((values) => {
            res.locals.tapkieg._osszetevok = values;

            res.locals.tapkieg.save(err => {
                if(err) return next(err);
    
                return res.redirect("/tapkieg");
            });
        });
     };
 };