import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './game.css';
import axios from 'axios';
import { cookies } from '../cookie-manager';

const socket = require('../connections/socket').socket;

const port = process.env.PORT || 8000;
const url = process.env.URL || `localhost:${port}`;
const hubUrl = 'https://game-nexus.herokuapp.com/';
//const url = 'https://game-nexus-rps.herokuapp.com';


class Game extends React.Component {
	state = {
		host: this.props.isHost,

		choiceHost: -1,
		choiceGuest: -1,

		scoreHost: 0,
		scoreGuest: 0,
		
		winner: 'nobody',
		
		endOfGame: false
	
	}

	componentDidMount() {
		
		function setWinner() {
		console.log("MAMY TO");
		alert('winner: ' + this.state.winner);
		if(this.state.scoreGuest == 3) { // FIXME: this.scoreGuest not defined -> this.state.scoreGuest
		let username = cookies.get('username');
            if (username) {
                axios.post(hubUrl + 'api/v1/stats', {
                    game: 'rps',
                    username: username,
                    result: this.stats.isHost ? 1 : 0
                });
                cookies.get('username', { path: '/' });
            }
			console.log("WESZLO GUEST");
			window.location.href = "/guestWin.html"; // FIXME: use React Redirect instead
		} else if(this.state.scoreHost == 3) {
			let username = cookies.get('username');
            if (username) {
                axios.post(hubUrl + 'api/v1/stats', {
                    game: 'rps',
                    username: username,
                    result: this.stats.isHost ? 1 : 0
                });
                cookies.get('username', { path: '/' });
            }
			console.log("WESZLO HOST");
			window.location.href = "/hostWin.html";
			
		}
		this.setState({ // FIXME: set state variable to represent that the game is finished, so that render() can redirect the player to end-game screen
			winner: 'nobody',
			choiceGuest: -1, 
			choiceHost: -1
		});
		}
		
		console.log('props:', this.props);
		console.log(this.state);
			this.setState({
				isHost: this.props.isHost
			})

		socket.on("hostMove", choice => {
			console.log("hostMoveEvent", choice);
			console.log(this.state.isHost);
			if(!this.state.isHost) {
			this.setState({
				choiceHost: choice
			})
			}
			if(this.state.choiceGuest != -1 && this.state.choiceHost != -1) {
				if(this.state.choiceGuest == this.state.choiceHost) {
					this.setState({
						winner: 'draw'
					})
					console.log("sc: " + this.state.scoreGuest);
					
				}
				else if(this.state.choiceGuest == 1 && this.state.choiceHost == 0) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scoreHost + 1)
					})
				}
				else if(this.state.choiceGuest == 1 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scoreHost + 1)
					})
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 0) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scoreHost + 1)
					})
				}
				if(this.state.host) {
					if(this.state.winner == 'draw') {
						window.alert("Draw");
					}
					else if(this.state.winner == 'Host') {
						window.alert("You win");
					}
					else {
						window.alert("You lose");
					}
				}  
				else {
					if(this.state.winner == 'draw') {
						window.alert("Draw");
					}
					else if(this.state.winner == 'Host') {
						window.alert("You lose");
					}
					else {
						window.alert("You win");
					}
				}
				console.log(this.state.scoreHost)
				if(this.state.scoreHost == 3) {
					console.log("koniec!!!");
					this.setState({
						endOfGame: true
					})
					setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				console.log(this.state.scoreGuest);
				if(this.state.scoreGuest == 3) {
					console.log("koniec!!!");
					this.setState({
						endOfGame: true
					})
					setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				this.setState({
						winner: 'nobody',
						choiceGuest: -1, 
						choiceHost: -1
					})
			}
		})
		

		socket.on("guestMove", choice => {
			console.log("guestMoveEvent", choice);
			console.log(this.state.isHost);
			if(this.state.isHost) {
			this.setState({
				choiceGuest: choice
			})
			}
			if(this.state.choiceGuest != -1 && this.state.choiceHost != -1) {
				if(this.state.choiceGuest == this.state.choiceHost) {
					this.setState({
						winner: 'draw'
					})
					
				}
				else if(this.state.choiceGuest == 1 && this.state.choiceHost == 0) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
					console.log("sc: " + this.state.scoreGuest);
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scoreHost + 1)
					})
				}
				else if(this.state.choiceGuest == 1 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scorHost + 1)
					})
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 0) {
					this.setState({
						winner: 'Host'
					})
					this.setState({
						scoreHost: (this.state.scoreHost + 1)
					})
				}
				if(this.state.host) {
					if(this.state.winner == 'draw') {
						window.alert("Draw");
					}
					else if(this.state.winner = 'Host') {
						window.alert("You win");
					}
					else {
						window.alert("You lose");
					}
				}  
				else {
					if(this.state.winner == 'draw') {
						window.alert("Draw");
					}
					else if(this.state.winner = 'Host') {
						window.alert("You lose");
					}
					else {
						window.alert("You win");
					}
				}
				console.log(this.state.scoreHost)
				if(this.state.scoreHost == 3) {
					console.log("koniec!!!");
					this.setState({
						endOfGame: true
					})
					setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				console.log(this.state.scoreGuest);
				if(this.state.scoreGuest == 3) {
					console.log("koniec!!!");
					this.setState({
						endOfGame: true
					})
					setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				this.setState({
						winner: 'nobody',
						choiceGuest: -1, 
						choiceHost: -1
					})
			}
		})
		
	}
	

	render() {
		return (
		<React.Fragment>
		{
			this.state.endOfGame ?
				<Redirect to = {'/end'}> 
				</Redirect>
			:
			<div className="box">
				<div className="row">
				<button onClick={this.choose.bind(this, this.state.host, 0)}>rock</button>
				</div>
				<div className="row">
				<button onClick={this.choose.bind(this, this.state.host, 1)}>paper</button>
				</div>
				<div className="row">
				<button onClick={this.choose.bind(this, this.state.host, 2)}>scissors</button>
				</div>
				Host:
				<div>
				<h6>Score:</h6>
				<output>{this.state.scoreHost}</output>
				</div>
				Guest:
				<div>
				<h6>Score:</h6>
				<output>{this.state.scoreGuest}</output>
				</div>
			</div>
		}
		</React.Fragment>
		)
	}
	
	
	/*
	 * Passes information about player's choice to the game.
	 * @param {boolean} isHost 
	 * @param {0|1|2} choice (0 - rock), (1 - paper), (2 - scissors).
	 */
	choose(isHost, choice) {
		
		if(this.state.endOfGame == true) {
			console.log("koniec");
		}
		else if (isHost) {    
			this.setState({
				choiceHost: choice
			})
			socket.emit("new host move", {choice: choice, gameId: this.props.gameId});
			console.log("inH");
		}
		else {
			this.setState({
				choiceGuest: choice
			})
			socket.emit("new guest move", {choice: choice, gameId: this.props.gameId});
			console.log("inG");
		}
	}

}	

const GameWrapper = (props) => {
	/**
	 * player 1
	 *      - socketId 1
	 *      - socketId 2 ???
	 * player 2
	 *      - socketId 2
	 *      - socketId 1
	 */



	// const color = React.useContext(ColorContext);
	const { gameid } = useParams();
	const [opponentSocketId, setOpponentSocketId] = React.useState('');
	const [opponentDidJoinTheGame, didJoinGame] = React.useState(false);
	const [opponentUserName, setUserName] = React.useState('');
	const [gameSessionDoesNotExist, doesntExist] = React.useState(false);
	
	console.log(props.isHost);

	React.useEffect(() => {
		socket.on("playerJoinedRoom", statusUpdate => {
			console.log(
				"A new player has joined the room! Username: " +
				statusUpdate.userName + ", Game id: " + statusUpdate.gameId + " Socket id: " + statusUpdate.mySocketId
			);
			if (socket.id !== statusUpdate.mySocketId) {
				setOpponentSocketId(statusUpdate.mySocketId);
			}
		})

		socket.on("status", statusUpdate => {
			console.log(statusUpdate);
			alert(statusUpdate);
			if (statusUpdate === 'This game session does not exist.' || statusUpdate === 'There are already 2 people playing in this room.') {
				doesntExist(true);
			}
		})
		
		

		socket.on('start game', (opponentUserName) => {
			console.log("START!");
			if (opponentUserName !== props.myUserName) {
				setUserName(opponentUserName);
				didJoinGame(true);
			} else {
				// in chessGame, pass opponentUserName as a prop and label it as the enemy. 
				// in chessGame, use reactContext to get your own userName
				// socket.emit('myUserName')
				socket.emit('request username', gameid);
			}
		})


		socket.on('give userName', (socketId) => {
			if (socket.id !== socketId) {
				console.log("give userName stage: " + props.myUserName);
				socket.emit('recieved userName', {userName: props.myUserName, gameId: gameid});
			}
		})

		socket.on('get Opponent UserName', (data) => {
			if (socket.id !== data.socketId) {
				setUserName(data.userName);
				console.log('data.socketId: data.socketId');
				setOpponentSocketId(data.socketId);
				didJoinGame(true);
			}
		})
	}, []);


	return (
		<React.Fragment>
		{opponentDidJoinTheGame ? (
			<div>
			<h4> Opponent: {opponentUserName} </h4>
			<div style={{ display: "flex" }}>
				<Game gameId={gameid} isHost={props.isHost}/>
			</div>
			<h4> You: {props.myUserName} </h4>
			</div>
		) : gameSessionDoesNotExist ? (
			<div>
			<h1 style={{ textAlign: "center", marginTop: "200px" }}> :( </h1>
			</div>
		) : (
			<div>
			<h1
				style={{
				textAlign: "center",
				marginTop: String(window.innerHeight / 8) + "px",
				}}
			>
				Hey <strong>{props.myUserName}</strong>, copy and paste the URL
				below to send to your friend:
			</h1>
			<textarea
				style={{ marginLeft: String((window.innerWidth / 2) - 290) + "px", marginTop: "30px", width: "580px", height: "30px"}}
				onFocus={(event) => {
					event.target.select();
				}}
				value = {url + "/game/" + gameid}
				type = "text"
				readOnly = {true}>
				</textarea>
			<br></br>

			<h1 style={{ textAlign: "center", marginTop: "100px" }}>
				{" "}
				Waiting for other opponent to join the game...{" "}
			</h1>
			</div>
		)}
		</React.Fragment>
	);
};

export default GameWrapper
