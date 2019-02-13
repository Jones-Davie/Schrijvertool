<?php

$servername = "mysql1324int.cp.hostnet.nl";
$username = "u336264_admin";
$password = "Fly1ngDutma4n;";
$dbname = "db336264_Schrijvertool";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM Karakters";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $rows = array();
   while($r = mysql_fetch_assoc($result)) {
     $rows['object_name'][] = $r;
   }

 return json_encode($rows);

} else {
    echo "0 results";
}
$conn->close();

?>

