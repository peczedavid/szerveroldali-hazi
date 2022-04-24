/**
 * Kijelentkezés.
 * */

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.belepve = false;
        req.session.destroy(err => {
            res.locals.belepve = false;
            res.redirect("/tapkieg");
        });
    };
};