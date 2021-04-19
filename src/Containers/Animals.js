import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import EmployeeNavBar from "./EmployeeNavBar"
import "./Animals.css"
import axios from "axios"
import MainPageNavBar from "./MainPageNavBar"

function getAnimals(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat){
    return axios.post("/getAnimals", {
        AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat
    })
    .then(response => {
        return response.data;
    });
}

export default function Animals(){
    var history = useHistory();
    const [AnimalId, setAnimalId] = useState("");
    const [Species, setSpecies] = useState("");
    const [AnimalDOB, setAnimalDOB] = useState("");
    const [AnimalGender, setAnimalGender] = useState("");
    const [AnimalName, setAnimalName] = useState("");
    const [Habitat, setHabitat] = useState("");

    function check(id, species, name, dob, gender, habitat){
        var a = id;
        var b = species;
        var c = name;
        var d = dob;
        var e = gender;
        var f = habitat;

        var total = 0;

        if(a.length === 0){
            a = "";
        }
        if(b.length === 0){
            b = "";
        }
        if(c.length === 0){
            c = "";
        }
        if(d.length === 0){
            d = "";
        }
        if(e.length === 0){
            e = "";
        }
        if(f.length === 0){
            f = "";
        }

        getAnimals(a, b, c, d, e, f);
    }
    
    function handleSubmit6(event){
        event.preventDefault();
        check(AnimalId, Species, AnimalName, AnimalDOB, AnimalGender, Habitat);
        
    }



    return(
        <div className="Animals">
            <MainPageNavBar />
            <h1>Enter the Animal Information for Report</h1>
            <form class="animals" id="animalsform" onSubmit={handleSubmit6}>
                <label>Animal Id</label>
                    <input type="text" placeholder="Animal Identification Number" id="Animalid" onChange={(e)=> setAnimalId(e.target.value)}></input>
                <label>Animal Name</label>
                    <input type="text" placeholder="Animal's Name Here" id="Animalname" onChange={(e)=> setAnimalName(e.target.value)}></input>
                <label>Date of Birth</label>
                    <input type="date" placeholder="12/31/2000" id="Animaldob" onChange={(e)=> setAnimalDOB(e.target.value)}></input>
                <label>Species</label>
                    <select id="Animalspecies" onChange={(e)=> setSpecies(e.target.value)}>
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
                    <select id="Animalgender" onChange={(e)=> setAnimalGender(e.target.value)}>
                        <option value="">Select Gender</option>  
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                <label>Habitat</label>
                    <select id="habitat" onChange={(e)=> setHabitat(e.target.value)}>
                        <option value="">Select Habitat</option>  
                        <option value="African Grasslands">African Grasslands</option>
                        <option value="American Grasslands">American Grasslands</option>
                        <option value="Arctic">Arctic</option>
                        <option value="Asian Forest">Asian Forest</option>
                        <option value="Great Apes of Harambee">Great Apes of Harambee</option>
                    </select>
                <button type="submit">Submit</button>
            </form>

            <title>Table</title>
                <table>
                    <tr>
                        <th>Animal Id</th>
                        <th>Animal Species</th>
                        <th>Animal Name</th>
                        <th>Animal Date of Birth</th>
                        <th>Animal Gender</th>
                        <th>Animal Habitat</th>
                    </tr>
                </table>
        </div>
    )
}