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
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
