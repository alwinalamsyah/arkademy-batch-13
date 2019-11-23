<?php
include "6koneksi.php";
$sql= "INSERT INTO cashier(
    id,
    name,
    ) VALUE(
    1,'Pevita Pearce'
    )";

if($koneksi->query($sql)==TRUE){
    echo "Input berhasil";
}
else{
    echo "Inpul gagal dibuat"; 

?>