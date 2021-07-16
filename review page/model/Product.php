<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'idcomments' => $this->_idcomments,
             'Name' => $this->_Name,
             'Comment' => $this->_Comment,
             
        );
    }
	private $_idcomments;
	private $_Name;
	private $_Comment;
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getId() { return $this->_idcomments; }
		public function getNom() { return $this->_Name; }
		public function getNumero() { return $this->_Comment; }
		


		public function setId($idcomments){
			$this->_idcomments = (int) $idcomments;
		}

		public function setNom($Name){	
					$this->_Name = $Name;
			
		}
		public function setNumero($Comment){
					$this->_Comment = $Comment;
		}
}
?>