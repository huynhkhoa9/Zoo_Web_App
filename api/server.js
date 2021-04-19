const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(body_parser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: true }));
app.use("/", authroutes)

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

