<?php

$dbConnect = mysqli_connect("localhost", "root", "","altshu1");
mysqli_query($dbConnect, "SET NAMES 'utf8'");


$querySelectAll = "SELECT * FROM books WHERE year > 1901";
$result = mysqli_query($dbConnect, $querySelectAll);

// echo ('<table>');
// // echo ('<thread>');
// echo ()
// echo ('</thread>');

echo("<table>");
echo("<tr>");

while ($book = mysqli_fetch_array($result)) {
    echo ("<th>") . $book['author'] . ("</th>") . ("<th>") . $book ['year'] . ("</th>") . ("<th>") . $book ['title'] . ("</th>");

}

echo ("</table>");
?>