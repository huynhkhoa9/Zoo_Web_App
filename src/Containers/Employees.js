import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./Employees.css"
import axios from "axios"


export default function Employee(){
    var history = useHistory();
    
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

    function handleSubmit7(event){
        event.preventDefault();

    }

    return(
        <div className="Employees">
            <EmployeeNavBar />
            <h1>Enter Employee Information</h1>
            <form class="employee" id="employeesinfo" onSubmit={handleSubmit7}>
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
                        <option value="Maintenance">Maintnance</option>
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

            <title>Employee Table</title>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Contact Information</th>
                        <th>SSN</th>
                        <th>Supervisor Id</th>
                        <th>Id</th>
                    </tr>
                </table>
        </div>
    )
}