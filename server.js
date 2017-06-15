var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser'); /* Install bodyParser and use bodyParser Parse incoming request bodies in 
                                         a middleware before your handlers, available under the req.body property.
                                         It exposes various factories to create middlewares. All middlewares will 
                                         populate the req.bodyproperty with the parsed body, or an empty object ({}) 
                                         if there was no body to parse (or an error was returned).*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);