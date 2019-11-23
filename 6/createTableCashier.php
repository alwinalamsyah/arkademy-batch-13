<?php
include "6koneksi.php";
$sql= "CREATE TABLE cashier(
    id int PRIMARY KEY,
    name varchar[50]
    )";

if($koneksi->query($sql)==TRUE){
    echo "Table berhasil";
}
else{
    echo "Table gagal dibuat"; 
?>