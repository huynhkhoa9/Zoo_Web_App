import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
import MainPageNavBar from "./MainPageNavBar"
import Button from "react-bootstrap/Button"
import "./Login.css"

function login(Username, Password){
    return axios
        .post("http://zoowebapp-env.eba-p2mxpa2c.us-east-2.elasticbeanstalk.com/Login", {
            Username,
            Password
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
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    var history = useHistory();

    function validLength3(){
        return Username.length > 0 && Password.length > 0;
    }

    function handleSubmit3(event){
        event.preventDefault();

        login(Username, Password).then(
            () => {
                history.push("/UserMain");
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
        <div className="Login">
            <MainPageNavBar />
            <h1>Login</h1>
            <form class="LoginForm" id="loginform" onSubmit={handleSubmit3}>
                <label>Enter Username</label>
                    <input type="text" placeholder="Username" id="username" onChange={(e)=> setUsername(e.target.value)}></input>
                <label>Enter Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={(e)=> setPassword(e.target.value)}></input>
            
                <Button className="login" block size="lg" type="submit" disabled={!validLength3}>
                    Login
                </Button>
            </form>
        </div>
    )
}