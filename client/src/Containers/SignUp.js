import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button"
import axios from "axios"
import MainPageNavBar from "./MainPageNavBar"
import './SignUp.css'

function register(Email, Username, Password) {
    return axios.post("http://localhost:8080/api/auth/signup", {
      Email,
        Username,
      Password
    })
    .then(response => {
        return response.data;
    });
}

export default function SignUp(){
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    var history = useHistory()

    function validLength2(){
        return Email.length > 0 && Username.length > 0 && Password.length > 0 && Password === ConfirmPassword;
    }

    function handleSubmit2(event){
        event.preventDefault();

        if(validLength2()){
            register(Email, Username, Password).then(
                () => {
                    history.push("/Main");
                    alert("Successfully Registered!");
                },
                error => {    
                    const resMessage = (
                        error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString()
    
                    alert(error.response.data.message)
                })
        }
        else{
            if(Email.length === 0){
                alert("You must enter an Email!");
            }
            else if(Username.length === 0){
                alert("You must enter a Username!");
            }
            else if(Password.length === 0){
                alert("You must enter a Password!");
            }
            else if(ConfirmPassword.length === 0){
                alert("You must reenter your Password!");
            }
            else if(Password !== ConfirmPassword){
                alert("Passwords do not match!");
            }
        }
    }

    return(
        <div className="SignUp">
            <MainPageNavBar />
            <h1>Sign Up</h1>
            <form class="SignupForm" id="signupform" onSubmit={handleSubmit2}>
                <label>Enter your Email Address</label>
                    <input type="text" placeholder="Email Address Here" id="email" onChange={(e)=> setEmail(e.target.value)}></input>

                <label>Enter your Username</label>
                    <input type="text" placeholder="Username Here" id="username" onChange={(e)=> setUsername(e.target.value)}></input>

                <label>Enter your Password</label>
                    <input type="text" placeholder="Password Here" id="password" onChange={(e)=> setPassword(e.target.value)}></input>

                <label>Confirm Password</label>
                    <input type="text" placeholder="Enter Your Password Again Here" id="confirmpassword" onChange={(e)=> setConfirmPassword(e.target.value)}></input>

                <Button className="register" block size="lg" type="submit">
                    Sign Up
                </Button>

            </form>

        </div>
    )
}