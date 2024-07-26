<?php
$servername = "files.000webhost.com";
$username = "id21578746_twice";
$password = "MiNA756890#";
$dbname = "id21578746_awards";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//execute queries
$sql = "SELECT * FROM awards";
$result = $conn->query($sql);

// //process queries
// if ($result->num_rows > 0) {
//     while($row = $result->fetch_assoc()) {
//         echo "<p>Name: " . $row["name"]. " - Email: " . $row["email"]. "</p>";
//     }
// } else {
//     echo "0 results";
// }

//close php
$conn->close();

?>

