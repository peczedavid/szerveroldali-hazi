const Schema = require("mongoose").Schema;
const { default: mongoose } = require("mongoose");
const db = require("../config/db");

const Osszetevo = db.model('Osszetevo', {
    nev : String,
    leiras : String,
    kepNev : String,
    ajanlottAdag : String
});

module.exports = Osszetevo;