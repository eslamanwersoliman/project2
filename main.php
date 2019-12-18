<?php

$db = new mysqli('localhost', 'root', 'Zxczxc123', 'learning');

if(!$db) {
	echo('error');
}
if($db) {
	if(isset($_POST['name'])) {
		$name = $_POST['name'];
		$query = "INSERT INTO clicks (name) VALUES ('$name')";
		if($db->query($query)) {
			echo($db->insert_id);
		}
	}
}

?>