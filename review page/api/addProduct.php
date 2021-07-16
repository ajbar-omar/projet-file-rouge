<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setNom($_POST["Name"]);
$product->setNumero($_POST["Comment"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>