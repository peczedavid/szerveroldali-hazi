/**
 * Using the template engine render the values into the template
 */
 const requireOption = require("../middleware/requireOptionMW");

 module.exports = function (objectrepository, viewName) {
     return function (req, res) {
         res.render(viewName, res.locals);
     };
 
 }