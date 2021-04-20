import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./MainPageNavBar.css"

export default function MainPageNavBar(){
    var history = useHistory()

    const AnimalsSubmit = (e) =>{
        history.push("/AnimalsPage");
        window.location.reload();
    }

    const CustomerLoginSubmit = (e) =>{
        history.push("/Login");
        window.location.reload();
    }

    const MainSubmit = (e) =>{
        history.push("/Main");
        window.location.reload();
    }

    const CustomerSignupSubmit = (e) =>{
        history.push("/Signup");
        window.location.reload();
    }

    const EmployeeLoginSubmit = (e) =>{
        history.push("/EmployeeLogin");
        window.location.reload();
    }

    return(
       
                      
        <div className="NavBar">
            <header>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>

                <Button className="Customer Login" block size="lg" type="submit" onClick={CustomerLoginSubmit}>
                    Login
                </Button>
                <Button className="Customer Signup" block size="lg" type="submit" onClick={CustomerSignupSubmit}>
                    Sign Up
                </Button>
                <Button className="Main Page" block size="lg" type="submit" onClick={MainSubmit}>
                    Home
                </Button>
                <Button className="Animals" block size="lg" type="submit" onClick={AnimalsSubmit}>
                    Animals
                </Button>
                <Button className="Employee Login" block size="lg" type="submit" onClick={EmployeeLoginSubmit}>
                    Employee Login
                </Button>
            </header>
        </div>
    )
}