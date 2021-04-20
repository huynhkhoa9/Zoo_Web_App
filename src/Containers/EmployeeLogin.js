import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import MainPageNavBar from "./MainPageNavBar"
import "./EmployeeLogin.css"

function employeelogin(EmployeeID, EmployeePassword){
    return axios
        .post("/employeelogin", {
            EmployeeID,
            EmployeePassword
        })
        .then(response => {
            if (response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data))
                localStorage.setItem("formData", "No Data")
                localStorage.setItem("address", "No Address")
            }

            return response.data
        })
}

export default function Login(){
    const [EmployeeID, setEmployeeID] = useState("");
    const [EmployeePassword, setEmployeePassword] = useState("");

    var history = useHistory();


    function handleSubmit4(event){
        event.preventDefault();

        employeelogin(EmployeeID, EmployeePassword).then(
            () => {
                history.push("EmployeeMain");
            },
            error => {
                const resMessage = (
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString()

                    alert(error.response.data.message) //alert(error.response.data.message)
            })
        }

    return(
        <div className="EmployeeLogin">
            <MainPageNavBar />
            <h1>Login</h1>
            <form class="EmployeeLoginForm" id="Employeeloginform" onSubmit={handleSubmit4}>
                <div>
                <label>Enter Employee Id</label>
                    <input type="text" placeholder="Id" id="employeeid" onChange={(e)=> setEmployeeID(e.target.value)}></input>
                </div>

                <div>
                <label>Enter Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e)=> setEmployeePassword(e.target.value)}></input>
                </div>

                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}