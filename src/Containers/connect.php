<!DOCTYPE html>
<head>
    <title>Table With Database</title>
</head>
<body>
    <table>
        <tr>
            <th>Animal Id</th>
            <th>Species</th>
            <th>Animal Name</th>
            <th>Animal Gender</th>
            <th>Habitat</th>
        </tr>
        <?php
        $conn = mysqli_connect("localhost", "root", "", "zoo");
        if($conn-> connect_error){
            die("Connection failed:". $conn-> connect_error);
        }

        $sql = "SELECT Animal_Id, Species, Animal_Name, Animal_DOB, Animal_Gender, Habitat FROM animal";
        $result = $conn-> query($sql);

        if($result-> num_rows > 0){
            while($row = $result-> fetch_assoc()){
                echo "<tr><td>". $row["Animal_ID"] ."</td><td>". $row["Species"] ."</td><td>". $row["AnimalName"] ."</td><td>". $row["AnimalGender"] ."</td><td>". $row["Habitat"] ."</td><td>".
            }
            echo "</table>";
        }
        else{
            echo "0 result"
        }
        $conn-> close();
        ?>
    </table>
</body>
