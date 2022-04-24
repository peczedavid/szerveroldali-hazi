const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Taplalekkiegeszito = db.model('Taplalekkiegeszito', {
    nev : String,
    leiras : String,
    kepNev : String,
    ajanlottAdag : String,
    _osszetevok: [
        {
            type: Schema.Types.ObjectId,
            ref: "Osszetevo"
        }
    ]
});

module.exports = Taplalekkiegeszito;