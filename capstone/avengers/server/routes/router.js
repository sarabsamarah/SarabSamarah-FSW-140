const express = require("express");
const sqlRouter = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
//   port: "3000",
  user: "root",
  password: "",
  database: "avengers",
});

sqlRouter.get('/data', (req, res, next) => {
  let myQuery = "SELECT * FROM avengers32"
  db.query(myQuery, (err, result)=> {
    if(err){
      return next(err);
    }
    res.send(result)
  })
})
module.exports = sqlRouter
