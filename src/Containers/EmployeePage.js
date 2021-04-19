import MainPageNavBar from "./MainPageNavBar"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./card.css"



export default function EmployeePage(){
    var employeeName = "John Doe"
    var employeeJobDescription = "Zookeeper"

    return(
    <div class = "EmployeePage">

        <div className="employeePage">
            <MainPageNavBar />
            <h1>Animals in our Zoo</h1>
        </div>

        <div className = "card">
            <h1><var>{employeeName}</var></h1>
            <p><var>{employeeJobDescription}</var></p>
        </div>

    </div>
    )


}