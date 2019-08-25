const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eremind'
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/login', function (req, res) {

    const { login, password } = req.query;
    
    connection.connect((err) => {
        connection.query(`SELECT * FROM users WHERE login='${login}' AND password='${password}' `, (err, result) => {
            if (result.length)
                res.json(true);
            else
                res.json(false);
        })


    })

})

app.listen(3500)