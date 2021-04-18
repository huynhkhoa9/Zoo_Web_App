import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./AddEmployee.css"
import axios from "axios"

function addemployee(EmployeeFirstName, EmployeeLastName, EmployeeDOB, EmployeeGender, EmployeeSalary, EmployeeDepartment, EmployeeContactInfo, EmployeeSSN, EmployeeSupervisorId, EmployeeId, EmployeePassword){
    return axios.post("http://localhost:8080/api/auth/addemployee", {
        EmployeeFirstName, EmployeeLastName, EmployeeDOB, EmployeeGender, EmployeeSalary, EmployeeDepartment, EmployeeContactInfo, EmployeeSSN, EmployeeSupervisorId, EmployeeId, EmployeePassword
    })
    .then(response => {
        return response.data;
    });
}

export default function AddEmployee(){
    const [EmployeeFirstName, setEmployeeFirstName] = useState("");
    const [EmployeeLastName, setEmployeeLastName] = useState("");
    const [EmployeeDOB, setEmployeeDOB] = useState("");
    const [EmployeeGender, setEmployeeGender] = useState("");
    const [EmployeeSalary, setEmployeeSalary] = useState("");
    const [EmployeeDepartment, setEmployeeDepartment] = useState("");
    const [EmployeeContactInfo, setEmployeeContactInfo] = useState("");
    const [EmployeeSSN, setEmployeeSSN] = useState("");
    const [EmployeeSupervisorId, setEmployeeSupervisorId] = useState("");
    const [EmployeeId, setEmployeeId] = useState("");
    const [EmployeePassword, setEmployeePassword] = useState("");

    var history = useHistory()

    function validLength1(){
        return EmployeeFirstName.length > 0 && EmployeeLastName.length > 0 && EmployeeDOB.length === 10 && EmployeeGender !== "" && EmployeeSalary.length === 5 && EmployeeDepartment !== "" && EmployeeSSN.length === 11 && EmployeeContactInfo.length === 12 && EmployeeSupervisorId.length === 5 && EmployeeId.length !== 0 && EmployeePassword.length !== 0;
    }

    function dobSlashCheck(){
        var slashCount = 0;
        var x = false;
        for(var i = 0; i < EmployeeDOB.length; i++){
            if(EmployeeDOB[i] === "/"){
                slashCount++;
            }
        }
        if(slashCount === 2){
             x = true;
             return Boolean(x);
        }
        else{
             x = false;
             return Boolean(x);
        }
    }

    function handleSubmit1(event){
        event.preventDefault();
        if(validLength1()){
            addemployee(EmployeeFirstName, EmployeeLastName, EmployeeDOB, EmployeeGender, EmployeeSalary, EmployeeDepartment, EmployeeContactInfo, EmployeeSSN, EmployeeSupervisorId, EmployeeId, EmployeePassword);
            history.push("/EmployeeAdded");
        }
        else{
            if(EmployeeFirstName.length === 0){
                alert("You must enter a First name!");
            }
            else if(EmployeeLastName.length === 0){
                alert("You must enter a Last name!");
            }
            else if(EmployeeDOB.length === 0){
                alert("You must enter a date of birth");
            }
            else if(dobSlashCheck() === false){
                alert("Date of birth has been entered incorrectly!");
            }
            else if(EmployeeDOB.length !== 10){
                alert("Date of Birth has not been filled!");
            }
            else if(EmployeeGender === ""){
                alert("Select the Gender!");
            }
            else if(EmployeeSalary === ""){
                alert("Salary must be filled!");
            }
            else if(EmployeeSalary.length !== 5){
                alert("Salary entered wrong!");
            }
            else if(EmployeeDepartment === ""){
                alert("Select the Department!");
            }
            else if(EmployeeContactInfo.length !== 12){
                alert("Contact Information entered wrong!");
            }
            else if(EmployeeSSN.length === ""){
                alert("Social Security Number must be filled out!");
            }
            else if(EmployeeSSN.length !== 11){
                alert("Social Security Number not filled out Correctly!");
            }
            else if(EmployeeSupervisorId.length === 0){
                alert("Supervisor ID must be filled!");
            }
            else if(EmployeeSupervisorId.length !== 5){
                alert("Supervisor ID must be Five Characters long!");
            }
            else if(EmployeeId.length !== 5){
                alert("Employee ID must be Five Characters long!");
            }
            else if(EmployeePassword.length === 0){
                alert("You must enter a Password!");
            }
            else if(EmployeePassword.length > 100){
                alert("Password is too long, must be less than 100 Characters!");
            }
        }
    }

    return(
        <div class="EmployeeForm">
            <EmployeeNavBar />
            <h1>Enter New Employee Information</h1>
            <form class="employeeform" id="employeeinfo" onSubmit={handleSubmit1}>
                <label>First Name</label>
                    <input type="text" placeholder="John" id="employeeFirstName" onChange={(e)=> setEmployeeFirstName(e.target.value)}></input>
                
                <label>Last Name</label>
                    <input type="text" placeholder="Snow" id="employeeLastName" onChange={(e)=> setEmployeeLastName(e.target.value)}></input>

                <label>Date of Birth</label>
                    <input type="text" placeholder="12/31/2000" id="employeeDOB" onChange={(e)=> setEmployeeDOB(e.target.value)}></input>

                <label>Gender</label>
                    <select id="employeeGender" onChange={(e)=> setEmployeeGender(e.target.value)}>
                        <option value="">Select Gender</option>  
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                <label>Salary</label>
                    <input type="text" placeholder="15.00" id="employeeSalary"  onChange={(e)=> setEmployeeSalary(e.target.value)}></input>
                
                <label>Department</label>
                    <select id="department" onChange={(e)=> setEmployeeDepartment(e.target.value)}>
                        <option value="">Select Department</option>
                        <option value="Zoo Keeper">Zoo Keeper</option>
                        <option value="Restaraunt Staff">Restaraunt Staff</option>
                        <option value="Gift Shop Staff">Gift Shop Staff</option>
                        <option value="Food Stalls">Food Stalls</option>
                        <option value="Veterinarian">Veterinarian</option>
                        <option value="Registrar">Registrar</option>
                        <option value="Curator">Curator</option>
                        <option value="Maintnance">Maintnance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Visitor Services">Visitor Services</option>
                        <option value="Janitorial">Janitorial</option>
                        <option value="Membership Director">Membership Director</option>
                        <option value="Volunteer">Volunteer</option>
                    </select>

                <label>Contact Information</label>
                    <input type="text" placeholder="713-000-0000" id="employeeContactInfo" onChange={(e)=> setEmployeeContactInfo(e.target.value)}></input>

                <label>Social Security Number</label>
                    <input type="text" placeholder="000-00-0000" id="employeeSSN" onChange={(e)=> setEmployeeSSN(e.target.value)}></input>
                
                <label>Supervisor ID</label>
                    <input type="text" placeholder="12345" id="employeeSupervisorId" onChange={(e)=> setEmployeeSupervisorId(e.target.value)}></input>

                <label>Employee ID</label>
                    <input type="text" placeholder="12345" id="employeeid" onChange={(e)=> setEmployeeId(e.target.value)}></input>

                <label>New Employee Password</label>
                    <input type="text" placeholder="Enter a Password" id="employeepassword" onChange={(e)=> setEmployeePassword(e.target.value)}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}