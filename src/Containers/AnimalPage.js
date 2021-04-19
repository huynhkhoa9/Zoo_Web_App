import MainPageNavBar from "./MainPageNavBar"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import "./AnimalPage.css"



export default function AnimalPage(){
    var animalName = "Elephant"
    var animalDescription = "Big boy"

    return(
    <div class = "AnimalPage">

        <div className="AnimalsPage">
            <MainPageNavBar />
            <h1>Animals in our Zoo</h1>
        </div>

        <div className = "AnimalCard">
            <h1>{val.animalName}</h1>
            <p>{val.animalDescription}</p>
        </div>

    </div>
    )


}