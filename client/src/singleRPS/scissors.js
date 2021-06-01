import React, { useEffect, useState, } from "react";
import { Redirect } from 'react-router-dom';

function getR() {
	console.log("musi smigac");
	return Math.floor(Math.random() * (2 + 1));
}


var comp = getR();
console.log(comp);
var computerChoose = "rock";
var out = "You lose!";

function getRandomIntInclusive() {
	console.log("SZK" + comp);
	if(comp == 0) {
	computerChoose = "paper";
}
else if(comp == 2) {
	computerChoose = "scissors";
}


if(comp == 0) {
    out = "You win!";
}
else if(comp == 2) {
    out = "It's a draw!";

}
  return comp;
}

comp = getRandomIntInclusive();

export default function SingleTicTacToe({userName})
{
	


    return (
<html lang="en">
<head>
    <title>rock, paper, scissors</title>
</head>
<body>
// Get saved data from sessionStorage



<div class="box">
    <div class="titlebox">
        <h1>Results:</h1>
    </div>

    <div class="row">
        <div class="field">
            <div class="desc">
                <h4> Your choice:</h4>
            </div>

            <div class="button">
                <input type="image" src="../img/rock.png"/>
                <div class="desc">
                    <h3>scissors</h3>
                </div>
            </div>
        </div>

        <div class="field2">
            <div class="desc">
                <h1>
					{out}
                </h1>
            </div>

            <div class="button">
                <form action="/single">
                    <input type="submit" value="Play again"/>
                </form>
            </div>
        </div>


        <div class="field">
            <div class="desc">
                <h4> Computer's choice:</h4>
            </div>

            <div class="button">
                <div class="desc">
                    <h3>
					{computerChoose}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</div>


</body>
</html>
    )
}