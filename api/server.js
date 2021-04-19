const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", authroutes)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// UNCOMMENT THIS TO TEST QUERYS ON SERVER STARTUP
let pool = mysql.createPool({
        connectionLimit: 10,
        host: 'zoo-database.chdju4zwao3b.us-east-2.rds.amazonaws.com',
        user: 'admin',
        password: 'UHCougarsCS2021$',
        database: 'ebdb'
})

pool.getConnection(function(err, connection) {
  if(err){
    return console.error('error:' + err.message)
  }
  
  console.log('Connected to database')
})