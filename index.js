const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fileUpload = require('express-fileupload');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'secret'
    })
);

app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static('static'));
app.disable('view cache');

// Load routing
require('./routes/routes')(app);

app.listen(3000, function () {
    console.log('Port :3000');
});