import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./AddRevenue.css"
import axios from "axios"

function addrevenue(TicketSales, GiftShopSales, RestaurantSales, FoodStallSales, Date, TotalSales){
    return axios.post("http://localhost:8080/api/auth/addrevenue", {
        TicketSales, GiftShopSales, RestaurantSales, FoodStallSales, Date, TotalSales
    })
    .then(response => {
        return response.data;
    });
}

export default function AddAnimal(){
    const [TicketSales, setTicketSales] = useState("");
    const [GiftShopSales, setGiftShopSales] = useState("");
    const [RestaurantSales, setRestaurantSales] = useState("");
    const [FoodStallSales, setFoodStallSales] = useState("");
    const [Date, setDate] = useState("");
    const [TotalSales, setTotalSales] = useState("");

    var history = useHistory()

    //checks if the input is correct
    function validLength5(){
        return TicketSales.length > 0 && GiftShopSales.length > 0 && RestaurantSales.length > 0 && FoodStallSales.length > 0 && Date.length > 0;
    }

    function addTotal(a, b, c, d){
        var total = 0.0
        total += +(a) + +(b) + +(c) + +(d);
        return total;
    }



    //checks if the input is valid to submit and sets the habitat of the animal here
    function handleSubmit5(event){
        event.preventDefault();

        if(validLength5()){
            setTotalSales(addTotal(TicketSales, GiftShopSales, RestaurantSales, FoodStallSales));
            addrevenue(TicketSales, GiftShopSales, RestaurantSales, FoodStallSales, Date, TotalSales)
            history.push("/RevenueAdded");
        }
        else{
            if(TicketSales.length === 0){
                alert("You must enter an amount for Ticket Sales!");
            }
            else if(GiftShopSales.length === 0){
                alert("You must enter an amount for Gift Shop Sales!");
            }
            else if(RestaurantSales.length === 0){
                alert("You must enter an amount for Restaurant Sales!");
            }
            else if(FoodStallSales.length === 0){
                alert("You must enter an amount for Food Stall Sales!");
            }
            else if(Date.length === 0){
                alert("You must enter a Date!");
            }
            else if(Date.length !== 10){
                alert("Date is too long, must be 10 characters!");
            }
            else if(TotalSales.length === 0){
                alert("Total is Zero Dollars!")
            }
        }
    }

    return(
        <div class="RevenueForm">
            <EmployeeNavBar />
            <h1>Enter Revenue Information</h1>
            <form class="revenueForm" id="revenueinfo" onSubmit={handleSubmit5}>
                <label>Ticket Sales</label>
                    <input type="number" step="0.01" min="0" placeholder="Ticket Sales" id="TicketSales" onChange={(e)=> setTicketSales(e.target.value)}></input>  
                <label>Gift Shop Sales</label>
                    <input type="number" step="0.01" min="0" placeholder="Gift Shop Sales" id="GiftShopSales" onChange={(e)=> setGiftShopSales(e.target.value)}></input> 

                <label>Restaurant Sales</label>
                    <input type="number" step="0.01" min="0" placeholder="Restaurant Sales" id="RestaurantSales" onChange={(e)=> setRestaurantSales(e.target.value)}></input> 

                <label>Food Stall Sales</label>
                    <input type="number" step="0.01" min="0" placeholder="Food Stall Sales" id="FoodstallSales" onChange={(e)=> setFoodStallSales(e.target.value)}></input> 
 
                <label>Date</label>
               	    <input type="text"  placeholder="mm/dd/yyyy" id="Date" onChange={(e)=> setDate(e.target.value)}></input> 
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}