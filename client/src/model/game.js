import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './game.css';
import '../App.css';
import axios from 'axios';
import { cookies } from '../cookie-manager'

import rock from '../img/rocktheme.png'
import paper from '../img/papertheme.png'
import scissors from '../img/scissorstheme.png'
import {Button, Col, Container, Row} from "reactstrap";

const socket = require('../connections/socket').socket;

// const port = process.env.PORT || 8000;
// const url = process.env.URL || `localhost:${port}`;
const url = 'https://game-nexus-rps.herokuapp.com';
const hubUrl = 'https://game-nexus.herokuapp.com/';


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
		this.setState({
			isHost: this.props.isHost
		})

		socket.on("hostMove", choice => {
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
				}
				else if(this.state.choiceGuest == 1 && this.state.choiceHost == 0) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
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

				if(this.state.scoreHost == 3) {
					this.setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				if(this.state.scoreGuest == 3) {
					this.setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}

				this.setState({
					choiceGuest: -1, 
					choiceHost: -1
				})
			}
		})
		

		socket.on("guestMove", choice => {
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
				}
				else if(this.state.choiceGuest == 2 && this.state.choiceHost == 1) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
				}
				else if(this.state.choiceGuest == 0 && this.state.choiceHost == 2) {
					this.setState({
						winner: 'Guest'
					})
					this.setState({
						scoreGuest: (this.state.scoreGuest + 1)
					})
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

				if(this.state.scoreHost == 3) {
					this.setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}
				if(this.state.scoreGuest == 3) {
					this.setWinner();
					//tutaj dodac do rankimgu i przejscie moze jakies.
				}

				this.setState({
					choiceGuest: -1, 
					choiceHost: -1
				})
			}
		})
	}

	setWinner() {
		this.setState({
			choiceGuest: -1, 
			choiceHost: -1
		});

		if(this.state.scoreGuest == 3) {
			window.alert(!this.state.isHost ? 'You won!' : 'You lost!');

			let username = cookies.get('username');
			if (username) {
				axios.post(hubUrl + 'api/v1/stats', {
					game: 'rock-paper-scissors',
					username: username,
					result: !this.state.isHost ? 1 : 0
				});
				cookies.remove('username');
			}
		} else if(this.state.scoreHost == 3) {
			window.alert(this.state.isHost ? 'You won!' : 'You lost!');
			
			let username = cookies.get('username');
			if (username) {
				axios.post(hubUrl + 'api/v1/stats', {
					game: 'rock-paper-scissors',
					username: username,
					result: this.state.isHost ? 1 : 0
				});
				cookies.remove('username');
			}
		}

		this.setState({
			endOfGame: true
		});
	}

	getWinner() {
		if (this.state.winner == 'nobody')
			return '-----';

		if (this.state.winner == 'draw')
			return 'Nobody';

		if ((this.state.winner == 'Host' && this.state.isHost) || (this.state.winner == 'Guest' && !this.state.isHost))
			return 'You';
		
		return 'Opponent';
	}

	getOwnChoice() {
		switch (this.state.isHost ? this.state.choiceHost : this.state.choiceGuest) {
			case 0:
				return 'Rock';
			case 1:
				return 'Paper';
			case 2:
				return 'Scissors';
			default:
				return '-----';
		}
	}

	getOpponentChoice() {
		if ((this.state.isHost && this.state.choiceGuest != -1) || (!this.state.isHost && this.state.choiceHost != -1))
			return 'Ready';
		
		return 'Not ready';
	}

	render() {
		return (
		<React.Fragment>
		{
			this.state.endOfGame ?
				<Redirect to = {'/end'}> 
				</Redirect>
			:

				<Container>
					<Row xs={12}>
						<h1>Rock, Paper, Scissors!</h1>
					</Row>
					<Row>

					</Row>
					<Row className="buttons">
						<Col> <Button onClick={this.choose.bind(this, this.state.host, 0)}><img src={rock} /></Button> </Col>
						<Col> <Button onClick={this.choose.bind(this, this.state.host, 1)}><img src={paper} /></Button> </Col>
						<Col> <Button onClick={this.choose.bind(this, this.state.host, 2)}><img src={scissors} /></Button> </Col>

					</Row>
					<div className="box">
						<div className="col">
							<button onClick={this.choose.bind(this, this.state.host, 0)}>rock</button>
						</div>
						<div className="col">
							<button onClick={this.choose.bind(this, this.state.host, 1)}>paper</button>
						</div>
						<div className="col">
							<button onClick={this.choose.bind(this, this.state.host, 2)}>scissors</button>
						</div>
						<div>
							<h3>Score:</h3>
							<output>{this.state.scoreHost} : {this.state.scoreGuest}</output>
							<h3>Winner of the last round:</h3>
							<output>{this.getWinner()}</output>
						</div>
						<div>
							<output>Your choice: {this.getOwnChoice()}</output><br></br>
							<output>Opponent's choice: {this.getOpponentChoice()}</output>
						</div>
					</div>
				</Container>




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
		if(this.state.endOfGam)
			return;
		if (isHost) {    
			this.setState({
				choiceHost: choice
			})
			socket.emit("new host move", {choice: choice, gameId: this.props.gameId});
		}
		else {
			this.setState({
				choiceGuest: choice
			})
			socket.emit("new guest move", {choice: choice, gameId: this.props.gameId});
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

	React.useEffect(() => {
		socket.on("playerJoinedRoom", statusUpdate => {
			if (socket.id !== statusUpdate.mySocketId) {
				setOpponentSocketId(statusUpdate.mySocketId);
			}
		})

		socket.on("status", statusUpdate => {
			alert(statusUpdate);
			if (statusUpdate === 'This game session does not exist.' || statusUpdate === 'There are already 2 people playing in this room.') {
				doesntExist(true);
			}
		})
		
		

		socket.on('start game', (opponentUserName) => {
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
				socket.emit('recieved userName', {userName: props.myUserName, gameId: gameid});
			}
		})

		socket.on('get Opponent UserName', (data) => {
			if (socket.id !== data.socketId) {
				setUserName(data.userName);
				setOpponentSocketId(data.socketId);
				didJoinGame(true);
			}
		})
	}, []);


	return (
		<React.Fragment>
		{opponentDidJoinTheGame ? (
				<div className="bg">
					<div className="row">
						<div className="col playername">
							<div className="you">
								<h4> You: </h4>
								<h2>{props.myUserName} </h2>
							</div>
						</div>

						<div className="col">
							<div align="center"> vs </div>
						</div>

						<div className="col playername">
							<div className="opponent">
								<h4>Opponent:</h4>
								<h2>{opponentUserName}</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div style={{ display: "flex" }}>
							<Game gameId={gameid} isHost={props.isHost}/>
						</div>
					</div>
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
