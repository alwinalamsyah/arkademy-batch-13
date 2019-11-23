<?php
include "6koneksi.php";
$sql= "CREATE TABLE category(
    id int PRIMARY KEY,
    name varchar[50],
    price int,
    id_category int,
    id_cashier int
    )";

if($koneksi->query($sql)==TRUE){
    echo "Table berhasil";
}
else{
    echo "Table gagal dibuat"; 
?>