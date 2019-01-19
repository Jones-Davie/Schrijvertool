const express = require('express')
var mysql = require('mysql')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())


console.log("server onn")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/karakters', (req, res) => {
    
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    port     :  3306,
    password : 'Fly1ngDutchm4n!',
    database : 'schrijvertool'
});
    connection.connect()

    connection.query('select * from karakters', function (err, rows, fields) {

        console.log(err)
        console.log(JSON.stringify(rows))
        res.send(JSON.stringify(rows))
        console.log( "server reached: get karakters")
    })

    connection.end()
})

app.get('/wezens', (req, res) => {
    
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        port     :  3306,
        password : 'Fly1ngDutchm4n!',
        database : 'schrijvertool'
    });
        connection.connect()
    
        connection.query('select * from users', function (err, rows, fields) {
    
            console.log(err)
            console.log(JSON.stringify(rows))
            res.send(JSON.stringify(rows))
    
        })
    
        connection.end()
    })


app.use(express.static('public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))