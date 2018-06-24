//Initiallising node modules
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const nodeSQL = require("node-sql");
const app = express();
const constants = require("./constants");
const queries = require("./queries");
const Handlebars = require("handlebars");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || constants.serverPort, function () {
    console.log("App now running on port", server.address().port);
});

//Function to connect to database and execute query
var executeQuery = function (res, query) {
    sql.connect(constants.serverConfig, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, result) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else {
                    res.send(result);
                }
            });
        }
    });
}

app.get("/", function (req, res) {
    res.status(200).send("Server running on port=" + server.address().port);
})

app.get("/api/participant/all", function (req, res) {
    executeQuery(res, queries.getAllParticipants);
});
app.get("/api/participant/:id", function (req, res) {
    const template = Handlebars.compile(queries.getParticipantDetails);
    const query = template(req.params);
    executeQuery(res, query);
});
app.post("/api/participant/add", function (req, res) {
    const template = Handlebars.compile(queries.addParticipant);
    const query = template(req.body);
    executeQuery(res, query);
});
app.put("/api/participant/update/:id", function (req, res) {
    const template = Handlebars.compile(queries.updateParticipant);
    const query = template(req.body);
    executeQuery(res, query);
});
app.delete("/api/participant/delete/:id", function (req, res){
    const template = Handlebars.compile(queries.deleteParticipant);
    const query = template(req.body);
    executeQuery(res, query);
});