import MainPageNavBar from "./MainPageNavBar"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"

export default function AnimalPage(){
    return(
        <div className="AnimalsPage">
            <MainPageNavBar />
            <h1>Animals in our Zoo</h1>
        </div>
    )


}