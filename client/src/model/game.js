import React from 'react';
import { useParams } from 'react-router-dom';

const socket = require('../connections/socket').socket;

const port = process.env.PORT || 8000;
const url = process.env.URL || `localhost:${port}`;
//const url = 'https://game-nexus-rps.herokuapp.com';


class Game extends React.Component {
	state = {
		host: this.props.isHost,

		choiceHost: -1,
		choiceGuest: -1,

		scoreHost: 0,
		scoreGuest: 0,
		
		winner: 'nobody'
	}

	updateGameState() {
		if(this.state.choiceGuest == this.state.choiceHost) {
			this.setState({
				winner: 'draw'
			});
		} else if(this.state.choiceGuest == 1 && this.state.choiceHost == 0) {
			this.setState({
				winner: 'Guest'
			});
			this.setState({
				scoreGuest: this.state.scoreGuest + 1
			});
		} else if(this.state.choiceGuest == 2 && this.state.choiceHost == 1) {
			this.setState({
				winner: 'Guest'
			});
			this.setState({
				scoreGuest: this.state.scoreGuest + 1
			});
		} else if(this.state.choiceGuest == 0 && this.state.choiceHost == 2) {
			this.setState({
				winner: 'Guest'
			});
			this.setState({
				scoreGuest: this.state.scoreGuest + 1
			});
		} else if(this.state.choiceGuest == 0 && this.state.choiceHost == 1) {
			this.setState({
				winner: 'Host'
			});
			this.setState({
				scoreHost: this.state.scoreHost + 1
			});
		} else if(this.state.choiceGuest == 1 && this.state.choiceHost == 2) {
			this.setState({
				winner: 'Host'
			});
			this.setState({
				scoreHost: this.state.scoreHost + 1
			});
		} else if(this.state.choiceGuest == 2 && this.state.choiceHost == 0) {
			this.setState({
				winner: 'Host'
			});
			this.setState({
				scoreHost: this.state.scoreHost + 1
			});
		}
	}

	setWinner() {
		alert('winner: ' + this.state.winner);
		if(this.scoreGuest == 5) { // FIXME: this.scoreGuest not defined -> this.state.scoreGuest
			window.location.href = "/guestWin.html"; // FIXME: use React Redirect instead
		} else if(this.scoreHost == 5) {
			window.location.href = "/hostWin.html";
		}
		this.setState({ // FIXME: set state variable to represent that the game is finished, so that render() can redirect the player to end-game screen
			winner: 'nobody',
			choiceGuest: -1, 
			choiceHost: -1
		});
	}

	componentDidMount() {
		this.setState({
			isHost: this.props.isHost
		});

		socket.on("hostMove", choice => {
			if(!this.state.isHost) {
				this.setState({
					choiceHost: choice
				});
			}
			if(this.state.choiceGuest != -1 && this.state.choiceHost != -1) {
				this.updateGameState();
				this.setWinner();
			}
		})

		socket.on("guestMove", choice => {
			if(this.state.isHost) {
				this.setState({
					choiceGuest: choice
				});
			}
			if(this.state.choiceGuest != -1 && this.state.choiceHost != -1) {
				this.updateGameState();
				this.setWinner();
			}
		})
		
	}
	

	render() {
		// FIXME: redirect the player to the end-game screen if a state variable was set
		return (
			<div class="box">
				<div class="row">
				<button onClick={this.choose.bind(this, this.state.host, 0)}>rock</button>
				</div>
				<div class="row">
				<button onClick={this.choose.bind(this, this.state.host, 1)}>paper</button>
				</div>
				<div class="row">
				<button onClick={this.choose.bind(this, this.state.host, 2)}>scissors</button>
				</div>
				Host:
				<div>
				<output>{this.state.choiceHost}</output>
				</div>
				<div>
				<output>{this.state.scoreHost}</output>
				</div>
				Guest:
				<div>
				<output>{this.state.choiceGuest}</output>
				</div>
				<div>
				<output>{this.state.scoreGuest}</output>
				</div>
			</div>
		)
	}
	
	/**
	 * Passes information about player's choice to the game.
	 * @param {boolean} isHost 
	 * @param {0|1|2} choice (0 - rock), (1 - paper), (2 - scissors).
	 */
	choose(isHost, choice) {
		if (isHost) {    
			this.setState({
				choiceHost: choice
			});
			socket.emit("new host move", {choice: choice, gameId: this.props.gameId});
			console.log("inH");
		}
		else {
			this.setState({
				choiceGuest: choice
			});
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
