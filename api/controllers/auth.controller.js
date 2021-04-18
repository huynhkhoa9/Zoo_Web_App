const config = require("../auth/auth.config")
const mysql = require('mysql')

var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo'
})

exports.signup = (req, res) => {
    let valid = true;
    let encryptedPass = bcrypt.hashSync(req.body.Password, 8);
    let query = "SELECT Customer_Username FROM customer WHERE Customer_Username = '" + req.body.Username + "'"
    let insert = "INSERT INTO customer (Customer_Email, Customer_Username, Customer_Password) VALUES ('" + req.body.Email +"', '" + req.body.Username + "', '" + encryptedPass + "');"

    pool.getConnection( async function(err, connection){
        if(err){
            return console.error('error:', + err.message);
        }
        console.log('Signup function called');

        valid = await new Promise(function(resolve, reject){
            setTimeout(function(){
                connection.query(query, function(err, result, fields){
                    if(err) throw err;
                    if(result.length != 0){
                        console.log("Duplicate username, denying Signup");
                        res.status(400).send({
                            message: "Username already in use!"
                        })
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                })
            }, 2000);
        })
        if(valid){
            connection.query(insert, function(err, result, fields){
                if(err) throw err;
                console.log("No duplicate username, signup success");
                res.status(200).send({
                    message: "Sign Up Successful"
                })
            })
        }
        connection.release();
    })
}

exports.signin = (req, res) => {
    let valid = true;
    let query = "SELECT Customer_Username, Customer_Password FROM customer WHERE Customer_Username = '" + req.body.Username + "'"
    
    console.log('Login function called')
    
    pool.getConnection( async function(err, connection) {
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }    

        //must use await and promise to make the program wait for query to finish
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;

                    if(result.length != 0){  //if the username is in the DB
                        var passwordIsValid = bcrypt.compareSync(
                            req.body.Password,
                            result[0].Customer_Password  //here we can use result[0] since the query should only return one row
                        )
                            
                        if(!passwordIsValid) {
                            console.log("Invalid Password!")
                            res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            })
                        }
                        else{
                            console.log("Password was valid, login allowed")
                            var token = jwt.sign({ id: req.body.Username }, config.secret, {
                                expiresIn: 86400 // 24 hours
                            })
                            res.status(200).send({
                                Username: req.body.Username,
                                accessToken: token,
                            })
                            
                        }
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
                }, 2000);
        })

        if(!valid){     //username not in database
            console.log("Username not found. Denying login.")
            res.status(404).send({message: "User not found"})
        }
        connection.release();
    })
}



exports.employeesignin = (req, res) => {
    let valid = true;
    let query = "SELECT Employee_Id, Employee_Password FROM employee WHERE Employee_Id = '" + req.body.EmployeeID + "'"
    
    console.log('Employee Login function called')
    
    pool.getConnection( async function(err, connection) {
        if(err){
            res.status(401).send({
                message: "Failed to connect to database"
            })
            return console.error('error:' + err.message)
        }    

        //must use await and promise to make the program wait for query to finish
        valid = await new Promise(function(resolve, reject) {
            setTimeout(function() {
                connection.query(query, function(err, result, fields){
                    if (err) throw err;

                    if(result.length != 0){  //if the username is in the DB
                        if(req.body.EmployeePassword !== result[0].Employee_Password) {
                            console.log("Invalid Password!")
                            res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            })
                        }
                        else{
                            console.log("Password was valid, login allowed")
                            var token = jwt.sign({ id: req.body.EmployeeID }, config.secret, {
                                expiresIn: 86400 // 24 hours
                            })
                            res.status(200).send({
                                Username: req.body.EmployeeID,
                                accessToken: token,
                            })
                        }
                        resolve(true)
                    }
                    else{
                        resolve(false)
                    }
                })
                }, 2000);
        })

        if(!valid){     //username not in database
            console.log("ID not found. Denying login.")
            res.status(404).send({message: "User not found"})
        }
        connection.release();
    })
}

exports.addanimal = (req, res) => {
    var values = "INSERT INTO animal (Animal_Id, Species, Animal_Name, Animal_DOB, Animal_Gender, Habitat) VALUES ('" + req.body.AnimalId + "', '" + req.body.Species + "', '" + req.body.AnimalName + "', '" + req.body.AnimalDOB + "', '" + req.body.AnimalGender + "', '" + req.body.Habitat + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to animal table was made")
        });
    });
    connection.release();
}

exports.addemployee = (req, res) => {
    var values = "INSERT INTO employee (Employee_FirstName, Employee_LastName, Employee_DOB, Employee_Gender, Employee_Salary, Employee_Department, Employee_ContactInfo, Employee_SSN, Employee_SupervisorId, Employee_Id, Employee_Password) VALUES ('" + req.body.EmployeeFirstName + "', '" + req.body.EmployeeLastName + "', '" + req.body.EmployeeDOB + "', '" + req.body.EmployeeGender + "', '" + req.body.EmployeeSalary + "', '" + req.body.EmployeeDepartment + "', '" + req.body.EmployeeContactInfo + "', '" + req.body.EmployeeSSN + "', '" + req.body.EmployeeSupervisorId + "', '" + req.body.EmployeeId + "', '" + req.body.EmployeePassword + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to employee table was made")
        });
    });
    connection.release();
}

exports.addrevenue = (req, res) => {
    var values = "INSERT INTO revenue (Ticket_Sales, Gift_Shop_Sales, Restaurant_Sales, Food_Stall_Sales, Sales_Date, Total_Sales) VALUES ('" + req.body.TicketSales + "', '" + req.body.GiftShopSales + "', '" + req.body.RestaurantSales + "', '" + req.body.FoodStallSales + "', '" + req.body.Date + "', '" + req.body.TotalSales + "')"
    pool.getConnection(function(err, connection){
        if(err) throw err;
        connection.query(values, function(err, result, fields){
            if(err) throw err;
            console.log("Query to revenue table was made")
        });
    });
    connection.release();
}

exports.getAnimals = (req, res) => {
    console.log("GetAnimals function called from backend");
}