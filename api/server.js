const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

app.post('/SignUp', (req, res) => {

  const email = req.body.Email;
  const username = req.body.Username;
  const password = req.body.Password;
  const sqlInsert = "INSERT INTO customer (Customer_Email, Customer_Username, Customer_Pasword) VALUES (?,?,?)";
  db.query(sqlInsert,[email, username, password], (err, result) =>{
    console.log(err);
  });
});

// set port, listen for requests
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = mysql.createPool({
  host: "zoo-database.chdju4zwao3b.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "UHCougarsCS2021$",
  database: "ebdb"
});

