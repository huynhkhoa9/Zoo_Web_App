import MainPageNavBar from "./MainPageNavBar"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./AnimalPage.css"


var animalName = "Elephant"
var animalDescription = "Big boy"

export default function AnimalPage(){
    return(
    <div class = "AnimalPage">

        <div className="AnimalsPage">
            <MainPageNavBar />
            <h1>Animals in our Zoo</h1>
        </div>

        <div className = "AnimalCard">
            <h1>animalName</h1>
            <p>animalDescription</p>
        </div>

    </div>
    )


}