const express = require('express')
var mysql = require('mysql')

const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())


function createMyConnection() {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: 'mysql',
        database: 'Karakters'
    });
    return connection;
}

console.log("server onn")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/karakters', (req, res) => {
    
    var connection = createMyConnection();
    
    connection.connect()

    connection.query('select * from karakters', function (err, rows, fields) {

        console.log(err)
        console.log(JSON.stringify(rows))
        res.send(JSON.stringify(rows))
        console.log( "server reached: get karakters")
    })

    connection.end()
})


app.get('/karakters/nieuw', (req, res) => {
    
    console.log("karakters/nieuw")
    var connection = createMyConnection();
    
    connection.connect()

    connection.query('select * from karakters', function (err, rows, fields) {

        console.log(err)
        console.log(JSON.stringify(rows))
        res.send(JSON.stringify(rows))
        console.log( "server reached: get karakters")
    })

    connection.end()
})


app.post('/karakters/nieuw', (req, res) => {
    
    var connection = createMyConnection();
    
    connection.connect()

        console.log(req.body)
        console.log("saving charakter")
    
        connection.query('INSERT INTO Karakters set ?', req.body, function (err, rows, fields) {
                console.log(err)
        })
        res.status(200).end()
    })
    
    app.post('/karakters', (req, res) => {

        var karakterUpdate = { IDKarakters: req.body.IDKarakters, Naam: req.body.Naam, Hoofdtype: req.body.Hoofdtype, Subtype: req.body.Subtype, Omschrijving: req.body.Omschrijving, Tags: req.body.Tags};
        console.log("edit table check id: " + req.body.IDKarakters)
        var connection = createMyConnection();
    
        connection.connect()
        connection.query("UPDATE Karakters SET Naam= ?, HoofdType= ?, Subtype= ?, Omschrijving= ?, Tags=? WHERE IDKarakters = ?", [req.body.Naam, req.body.Hoofdtype, req.body.Subtype, req.body.Omschrijving, req.body.Tags, req.body.IDKarakters] , function (err, rows, fields) {
            if(err)
            console.log(err)
            res.send(JSON.stringify(rows))
            console.log("Update gedaan")
        })
        
        connection.end()
    })

app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))