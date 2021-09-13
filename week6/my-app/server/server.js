const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");

// handshake
const db = mysql.createConnection({
  host: "localhost",
//   port: "3000",
  user: "root",
  password: "",
  database: "avengers",
});

app.use(express.json());
app.use(morgan("dev"));

db.connect((err) => {
  if (err) throw err;
  console.log("MySql DB Connected.");
});
app.use('/', require('./routes/router'))

//const app= express();

// create database 
app.get('/selectTable', (req, res)=> {
    //let myQuery = "CREATE TABLE data2 (id INT auto_increment, title VARCHAR(50), message VARCHAR(100), PRIMARY KEY(id))";
    let myQuery = "SELECT * FROM avengers32"
    db.query(myQuery, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result);
    })
})

app.listen(9000, () => {
  console.log("Server is running on LocalHost:9000");
});
 