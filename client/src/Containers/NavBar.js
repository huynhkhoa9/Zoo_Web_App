import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    var history = useHistory()

    const AnimalsSubmit = (e) =>{
        history.push("/Animals")
        window.location.reload();
    }

    const EmployeesSubmit = (e) =>{
        history.push("/Employees")
        window.location.reload();
    }

    const AddAnimalSubmit = (e) =>{
        history.push("/AddAnimal")
        window.location.reload();
    }

    const AddEmployeeSubmit = (e) =>{
        history.push("/AddEmployee")
        window.location.reload();
    }

    const MainSubmit = (e) =>{
        history.push("/Main")
        window.location.reload();
    }

    const CustomerLoginSubmit = (e) =>{
        history.push("/CustomerLogin")
        window.location.reload();
    }

    const CustomerSignupSubmit = (e) =>{
        history.push("/Signup")
        window.location.reload();
    }

    const EmployeeLoginSubmit = (e) =>{
        history.push("/EmployeeLogin")
        window.location.reload();
    }

    return(
        <div className="NavBar">
            <header>
                <Button className="Customer Login" block size="lg" type="submit" onClick={CustomerLoginSubmit}>
                    Login
                </Button>
                <Button className="Customer Signup" block size="lg" type="submit" onClick={CustomerSignupSubmit}>
                    Sign Up
                </Button>
                <Button className="Add Animal" block size="lg" type="submit" onClick={AddAnimalSubmit}>
                    Add New Animal
                </Button>
                <Button className="Add Employee" block size="lg" type="submit" onClick={AddEmployeeSubmit}>
                    Add New Employee
                </Button>
                <Button className="Main Page" block size="lg" type="submit" onClick={MainSubmit}>
                    Home
                </Button>
                <Button className="Animals" block size="lg" type="submit" onClick={AnimalsSubmit}>
                    Animals
                </Button>
                <Button className="Employees" block size="lg" type="submit" onClick={EmployeesSubmit}>
                    Employees
                </Button>
                <Button className="Employee Login" block size="lg" type="submit" onClick={EmployeeLoginSubmit}>
                    Employee Login
                </Button>
            </header>
        </div>
    )
}