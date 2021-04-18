import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./EmployeeNavBar.css"

export default function EmployeeNavBar(){
    var history = useHistory()

    const AnimalsSubmit = (e) =>{
        history.push("/Animals")
        window.location.reload();
    }

    const EmployeesSubmit = (e) =>{
        history.push("/Employees")
        window.location.reload();
    }

    const HomeSubmit = (e) =>{
        history.push("/EmployeeMain")
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

    const AddRevenueSubmit = (e) =>{
        history.push("/AddRevenue")
        window.location.reload();
    }

    return(
        <div className="EmployeeNavBar">
            <header>
                <Button className="Add Animal" block size="lg" type="submit" onClick={AddAnimalSubmit}>
                    Add New Animal
                </Button>
                <Button className="Add Employee" block size="lg" type="submit" onClick={AddEmployeeSubmit}>
                    Add New Employee
                </Button>
                <Button className="Add Revenue" block size="lg" type="submit" onClick={AddRevenueSubmit}>
                    Add New Revenue
                </Button>
                <Button className="Home" block size="lg" type="submit" onClick={HomeSubmit}>
                    Home
                </Button>
                <Button className="Animals" block size="lg" type="submit" onClick={AnimalsSubmit}>
                    Animals
                </Button>
                <Button className="Employees" block size="lg" type="submit" onClick={EmployeesSubmit}>
                    Employees
                </Button>
            </header>
        </div>
    )
}