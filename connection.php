<?php

$db = new mysqli('localhost', 'root', 'Zxczxc123', 'learning');

if(!$db) {
	echo('error');
}
if($db) {
	// query for all words
	$sql = 'SELECT clicking_time, name FROM `clicks`';
	// get result
	$result = mysqli_query($db, $sql);
	// get it as an array
	$words = mysqli_fetch_all($result);

	// free result from memory
	mysqli_free_result($result);
	// conn close
	mysqli_close($db);

	foreach($words as $word){
		$timestamp = $word[0];
		$name = $word[1];
		echo("you have clicked at `$name` button at $timestamp");
		echo('<br>');
	}
}

?>