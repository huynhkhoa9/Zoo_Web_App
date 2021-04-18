import Button from "react-bootstrap/Button"
import {useHistory} from "react-router-dom"
import "./UserMainNavBar.css"

export default function UserMainNavBar(){
    var history = useHistory()

    const AnimalsSubmit = (e) =>{
        history.push("/Animals");
        window.location.reload();
    }

    const MainSubmit = (e) =>{
        history.push("/UserMain")
        window.location.reload();
    }

    return(
        <div className="NavBar">
            <header>
                <Button className="Main Page" block size="lg" type="submit" onClick={MainSubmit}>
                    Home
                </Button>
                <Button className="Animals" block size="lg" type="submit" onClick={AnimalsSubmit}>
                    Animals
                </Button>
            </header>
        </div>
    )
}