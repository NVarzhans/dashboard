<?php

$dbConnect = mysqli_connect("localhost", "root", "","altshu1");
mysqli_query($dbConnect, "SET NAMES 'utf8'");

$whom = "Достоевский";
$querySelectAll = "SELECT * FROM books WHERE author = '$whom'";
$result = mysqli_query($dbConnect, $querySelectAll);

// echo ('<table>');
// // echo ('<thread>');
// echo ()
// echo ('</thread>');
echo("<ul>");
while ($book = mysqli_fetch_array($result)) {
    echo ("<li>") . $book['author'] . $book ['year'] . $book ['title'] . ("</li>");

}

echo ("</ul>");
?>