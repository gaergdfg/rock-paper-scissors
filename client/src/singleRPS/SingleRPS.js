import React, { useEffect, useState, } from "react";
import { Redirect } from 'react-router-dom';



export default function SingleTicTacToe({userName})
{
	


    return (
<html lang="en">
<head>
	<title>rock, paper, scissors</title>
</head>
<body>

<script>
myStorage = window.sessionStorage;

// Save data to sessionStorage

</script>

<div class="box">
	<div class="titlebox">
		<h1>Rock, Paper, Scissors</h1>
		<p> To play the game choose your weapon by clicking on one of the buttons below.</p>
	</div>

	<div class="row">
		<div class="button">
			<form action="rock">
				<input type="image" src="../img/rock.png"/>
				<div class="desc">
					Rock
				</div>
			</form>
		</div>

		<div class="button">
			<form action="paper">
				<input type="image" src="../img/paper.png"/>
				<div class="desc">
					Paper
				</div>
			</form>
		</div>

		<div class="button">
			<form action="scissors" >
				<input type="image" src="../img/scissors.png"/> <br />
				<div class="desc">
					Scissors
				</div>
			</form>
		</div>
	</div>
</div>
</body>
</html>
    )
}