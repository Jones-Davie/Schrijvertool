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

$karakters = [];
$sql = "SELECT * FROM Karakters";
$result = $conn->query($sql);

if($result = mysqli_query($conn,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $karakters[$cr]['Naam']    = $row['Naam'];
    $karakters[$cr]['Hoofdtype'] = $row['Hoofdtype'];
    $karakters[$cr]['Subtype'] = $row['Subtype'];
    $karakters[$cr]['Omschrijving'] = $row['Omschrijving'];
    $karakters[$cr]['Tags'] = $row['Tags'];
    $cr++;
  }
    
  echo json_encode([$karakters]);
}
else
{
  http_response_code(404);
}

?>

