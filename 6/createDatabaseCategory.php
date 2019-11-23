<?php
include "6koneksi.php";
$sql= "INSERT INTO category(
    id,
    name,
    price,
    id_category,
    id_cashier,
    ) VALUE(
    1,'Latte',10000,2,1
    )";

if($koneksi->query($sql)==TRUE){
    echo "Input berhasil";
}
else{
    echo "Inpul gagal dibuat"; 

?>