<?php
include "6koneksi.php";
$sql= "INSERT INTO category(
    id,
    name,
    ) VALUE(
    1,'Food'
    )";

if($koneksi->query($sql)==TRUE){
    echo "Input berhasil";
}
else{
    echo "Inpul gagal dibuat"; 

?>