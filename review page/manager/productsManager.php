<?php
require_once('../model/product.php');

class productsManager {

	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=review","root","curvaloca");
		$stack = array();
		$req = "SELECT * FROM comments";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["idcomments"]);
			$item->setNom($row["Name"]);
			$item->setNumero($row["Comment"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=review","root","curvaloca");
			$req = "INSERT INTO `comments`(`idcomments`,`Name`, `Comment`) VALUES (:idcomments,:Name,:Comment)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":idcomments",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":Name",$product->getNom(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Comment",$product->getNumero(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=review","root","curvaloca");

			$req = "DELETE FROM Comments WHERE idcomments = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
		// update product		
		public function update($product){
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=gestion_location","root","Tanger123");
			$req = "UPDATE locataires SET nom_locataire = :nom_locataire, = :numero_locataire WHERE idlocataires = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":nom_locataire",$product->getNom(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":numero_locataire",$product->getNumero(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
