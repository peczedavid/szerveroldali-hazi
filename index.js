// const TapkiegModel = require("./models/taplalekkiegeszito");
// const OsszetevoModel = require("./models/osszetevo");

// let tapkieg1 = new TapkiegModel();
// tapkieg1.nev = "Tapkieg egy";
// tapkieg1.leiras = "Tapkieg leiras";
// tapkieg1.kepNev = "Tapkieg kep neve";
// tapkieg1.ajanlottAdag = "420 mg / nap";

// let osszetevo1 = new OsszetevoModel();
// osszetevo1.nev = "Osszetevo1 egy";
// osszetevo1.leiras = "Osszetevo1 leiras";
// osszetevo1.kepNev = "Osszetevo1 kep neve";
// osszetevo1.ajanlottAdag = "691 mg / nap";
// osszetevo1.save((err) => {
//     console.log(err);
// });

// let osszetevo2 = new OsszetevoModel();
// osszetevo2.nev = "Osszetevo2 egy";
// osszetevo2.leiras = "Osszetevo2 leiras";
// osszetevo2.kepNev = "Osszetevo2 kep neve";
// osszetevo2.ajanlottAdag = "692 mg / nap";
// osszetevo2.save((err) => {
//     console.log(err);
// });

// tapkieg1._osszetevok = [osszetevo1, osszetevo2]
// tapkieg1.save((err) => {
//     console.log(err);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret'
    })
);
app.use(express.static('static'));
app.disable('view cache');

// Load routing
require('./routes/routes')(app);

app.listen(3000, function () {
    console.log('Port :3000');
});