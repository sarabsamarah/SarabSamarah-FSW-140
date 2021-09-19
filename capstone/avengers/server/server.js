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

// get all
app.get("/avengers", (req, res, next) => {
  let myQuery = `SELECT * FROM avengers32`
  db.query(myQuery, (err, avengers) => {
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(avengers)
  })
})
 

  // post new
  app.get("/addNewAvenger", (req, res, next) => {
      let post = req.body
      let myQuery = `INSERT INTO avengers32 SET ?`
      let query = db.query(myQuery, post, (err, result) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(201).send(`Successfully added avenger...`)
      })
  })

//   // update one
  app.get("/updateAvenger/:id", (req, res, next) => {
      let updates = req.body
      let myQuery = `UPDATE avengers32 SET ? WHERE _id = ${req.params.id}`
      let query = db.query(myQuery, updates, (err, result) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(200).send(`Successfully updated avenger...`)
      })
  })

//   // delete one
  app.get("/deleteAvenger/:id", (req, res, next) => {
      let myQuery = `DELETE FROM avengers32 WHERE _id = ${req.params.id}`
      let query =  db.query(myQuery, (err, result) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(200).send(`Successfully deleted avenger...`)
      })
  })
  






