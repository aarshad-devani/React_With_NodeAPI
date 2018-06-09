//Initiallising node modules
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const app = express();
const constants = require("./constants");
const queries = require("./queries");

// Body Parser Middleware
app.use(bodyParser.json());

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
            request.query(query, function (err, res) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else {
                    res.send(res);
                }
            });
        }
    });
}

app.get("/", function (req, res) {
    res.status(200).send("Server running on port=" + server.address().port);
})
//GET API
app.get("/api/user", function (req, res) {
    var query = "select * from [user]";
    executeQuery(res, query);
});

//POST API
app.post("/api/user", function (req, res) {
    executeQuery(res, queries.addUser.replace("---Name---", req.body.Name).replace("---Email---", req.body.Email).replace("---Password---", req.body.Password));
});

//PUT API
app.put("/api/user/:id", function (req, res) {
    executeQuery(res, queries.updateUser.replace("---Name---", req.body.Name).replace("---Email---", req.body.Email).replace("---id---", req.body.id));
});

// DELETE API
app.delete("/api/user /:id", function (req, res) {
    executeQuery(res, queries.deleteUser.replace("---id---", req.body.id));
});