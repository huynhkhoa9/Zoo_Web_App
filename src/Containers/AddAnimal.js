import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./AddAnimal.css"
import axios from "axios"

function addanimal(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat){
    return axios.post("/addanimal", {
        AnimalId, Species, AnimalDOB, AnimalGender, AnimalName, Habitat
    })
    .then(response => {
        return response.data;
    });
}

export default function AddAnimal(){
    const [AnimalId, setAnimalId] = useState("");
    const [Species, setSpecies] = useState("");
    const [AnimalDOB, setAnimalDOB] = useState("");
    const [AnimalGender, setAnimalGender] = useState("");
    const [AnimalName, setAnimalName] = useState("");
    var Habitat;

    var history = useHistory()

    //checks if the input is correct
    function validLength(){
        return AnimalId > 0 && AnimalName.length > 0 && AnimalDOB.length === 10 && Species !== "" && AnimalGender !== "";
    }


    //checks if the input is valid to submit and sets the habitat of the animal here
    function handleSubmit(event){
        event.preventDefault();
        if(Species === "Rhinoceros" || "Lion" || "Zebra" || "Giraffe" || "Sloth"){
            Habitat = "African Grasslands";
        }
        else if(Species === "Wolverine" || "Anteater" || "Bison" || "Beaver" || "Grizzly Bear" || "Prairie dog" || "Bald Eagle"){
            Habitat = "American Grasslands";
        }
        else if(Species === "Polar Bear" || "Arctic Fox"){
            Habitat = "Arctic";
        }
        else if(Species === "Tiger" || "Lemur" || "Red Panda" || "Camel"){
            Habitat = "Asian Forest";
        }
        else if(Species === "Chimpanzee" || "Gorilla"){
            Habitat = "Great Apes of Harambee";
        }
        
        if(validLength()){
            addanimal(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat)
            history.push("/AnimalAdded");
        }
        else{
            if(AnimalId.length === 0){
                alert("You must enter an Id!");
            }
            else if(AnimalId.length != 5){
                alert("Animal Id must be 5 numbers long!")
            }
            else if(AnimalName.length === 0){
                alert("You must enter a name!");
            }
            else if(AnimalDOB.length === 0){
                alert("You must enter a date of birth");
            }
            else if(Species === ""){
                alert("Select an Animal!")
            }
            else if(AnimalGender === ""){
                alert("Select the Gender!")
            }
            else{
                alert("Make sure to fill all information for the animal!");
            }
        }
    }
    return(
        <div class="AnimalForm">
            <EmployeeNavBar />
            <h1>Enter New Animal Information</h1>
            <form class="animalform" id="animalinfo" onSubmit={handleSubmit}>
                <div>
                <label>Animal Id</label>
                    <input type="text" placeholder="Animal Identification" id="AnimalID" onChange={(e)=> setAnimalId(e.target.value)}></input>
                    </div>
                    <div>
                <label>Animal Name</label>
                    <input type="text" placeholder="Animal Name" id="AnimalName" onChange={(e)=> setAnimalName(e.target.value)}></input>
                    </div>
                <div>
                <label>Date of Birth</label>
                    <input type="date" placeholder="12/31/2000" id="AnimalDOB" onChange={(e)=> setAnimalDOB(e.target.value)}></input>
                </div>
                <label>Species</label>
                    <select id="Species" onChange={(e)=> setSpecies(e.target.value)}>
                        <option value="">Select an Animal</option>  
                        <option value="Anteater">Anteater</option>
                        <option value="Arctic Fox">Arctic Fox</option>
                        <option value="Bald Eagle">Bald Eagle</option>
                        <option value="Beaver">Beaver</option>
                        <option value="Bison">Bison</option>
                        <option value="Camel">Camel</option>
                        <option value="Chimpanzee">Chimpanzee</option>
                        <option value="Giraffe">Giraffe</option>
                        <option value="Gorilla">Gorilla</option>
                        <option value="Grizzly Bear">Grizzly Bear</option>
                        <option value="Lemur">Lemur</option>
                        <option value="Lion">Lion</option>
                        <option value="Polar Bear">Polar Bear</option>
                        <option value="Prairie dog">Prairie dog</option>
                        <option value="Red Panda">Red Panda</option>
                        <option value="Rhinoceros">Rhinoceros</option>
                        <option value="Sloth">Sloth</option>
                        <option value="Tiger">Tiger</option>
                        <option value="Wolverine">Wolverine</option>
                        <option value="Zebra">Zebra</option>
                    </select>

                <label>Sex</label>
                    <select id="AnimalGender" onChange={(e)=> setAnimalGender(e.target.value)}>
                        <option value="">Select Gender</option>  
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}