<?php
include "6koneksi.php";
$sql= "SELECT product.ID,category.name,cashier.name FROM ((product INNER JOIN category ON product.id_category = category.ID) INNER JOIN cashier ON product.id_cashier=cashier.ID)"; 

if($koneksi->query($sql)==TRUE){
    echo "Input berhasil";
}
else{
    echo "Inpul gagal dibuat"; 

?>