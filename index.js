var express = require('express'); //include express library to make routing easier
var app = express(); //refrences express constructor as app
const bodyParser = require('body-parser'); //body-parser lib is used to parse the request body as json https://www.npmjs.com/package/body-parser

var list = require('./routes/list'); //this is used later

app.use(bodyParser.json()); //this is used as a middleware (middleman) to convert/validate(that) the request body is json

app.use('/list', list); //basically tells your server to run your 'list' code whenever /list is called 
                        //this includes any derivative from /list such /list/xywz or /list/xxx/yyy etc..

app.get('/', function(req, res){ //if someone sent a GET req to this server
    res.end('hey');             // <=== this happens
});

app.listen(3000); //this server listens to port 3000, so if any request is sent to any server other than 'localhost:3000' it won't work