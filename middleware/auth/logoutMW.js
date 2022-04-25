/**
 * Kijelentkezés.
 * */

module.exports = (objectRepository) => {
    return (req, res, next) => {
        res.locals.belepve = false;
        req.session.destroy(() => {
            res.locals.belepve = false;
            return res.redirect("/tapkieg");
        });
    };
};