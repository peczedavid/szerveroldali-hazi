/* *
 * Akkor enged tovább, ha nem vagyunk bejelentkezve. Ha nem vagyunk, akkor /tapkieg -re dob vissza.
 * */

module.exports = (objectRepository) => {
    return (req, res, next) => {
        next();
    };
};