const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const authroutes = require("./routes/auth.routes")
const mysql = require('mysql')

const app = express();

var corsOptions = {
  origin: "http://zoowebapp-env.eba-p2mxpa2c.us-east-2.elasticbeanstalk.com"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/", authroutes)


// set port, listen for requests
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});