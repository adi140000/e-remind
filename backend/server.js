const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql      = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eremind'
  });
 
app.use(bodyParser.json())

app.get('/', function (req, res) {
 
})
 
app.listen(3000)