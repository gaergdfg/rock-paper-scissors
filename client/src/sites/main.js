import React from 'react';
import { Redirect } from 'react-router-dom';
import uuid from 'uuid/v4';
import { ColorContext } from '../context/color-context';
import sha1 from 'sha1';
import { cookies } from '../cookie-manager';

const socket = require('../connections/socket').socket;
const axios = require('axios');


const hubUrl = 'https://game-nexus.herokuapp.com/';

/**
 * Main is where we create the game room.
 */

class CreateNewGame extends React.Component {
	state = {
		didGetUserName: false,
		inputEmail: '',
		inputPassword: '',
		inputText: '',
		gameId: ''
	}

	constructor(props) {
		super(props);

		this.email = React.createRef();
		this.password = React.createRef();

		this.textArea = React.createRef();
	}

	send = () => {
		/**
		 * This method should create a new room in the '/' namespace
		 * with a unique identifier. 
		 */
		const newGameRoomId = uuid();

		// emit an event to the server to create a new room 
		socket.emit('createNewGame', newGameRoomId);

		return newGameRoomId;
	}

	typingEmail = () => {
		// grab the input text from the field from the DOM 
		const typedText = this.email.current.value
		
		// set the state with that text
		this.setState({
			inputEmail: typedText
		})
	}

	typingPassword = () => {
		// grab the input text from the field from the DOM 
		const typedText = this.password.current.value
		
		// set the state with that text
		this.setState({
			inputPassword: typedText
		})
	}

	typingUserName = () => {
		// grab the input text from the field from the DOM 
		const typedText = this.textArea.current.value;
		
		// set the state with that text
		this.setState({
			inputText: typedText
		});
	}

	render() {
		return (
			<React.Fragment>
			{
				this.state.didGetUserName ?

				<Redirect to = {"/game/" + this.state.gameId}/>

			:

				<div>
					<h1 style={{textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px"}}>Log in:</h1>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}} 
						ref = {this.email}
						onInput = {this.typingEmail}></input>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}} 
						ref = {this.password}
						type="password"
						onInput = {this.typingPassword}></input>

					<button className="btn btn-primary" 
						style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px"}} 
						disabled = {!(this.state.inputEmail.length > 0 && this.state.inputPassword.length > 0)} 
						onClick = {async () => {
							try {
								const response = await axios.post(hubUrl + 'api/v1/validate/', {
									email: this.state.inputEmail,
									passwordHash: sha1(this.state.inputPassword)
								})

								cookies.set('username', response.data.username.username, { path: '/' });
								this.props.didRedirect();
								this.props.setUserName(response.data.username.username);
								let roomId = this.send();

								// set the state of this component with the gameId so that we can
								// redirect the user to that URL later. 
								this.setState({
									didGetUserName: true,
									gameId: roomId
								});
							} catch (err) {
								alert('Invalid credentials!');
								console.log('got error:', err);
							}
						}}>Submit</button>

					<h1 style={{textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px"}}>Play as guest:</h1>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}}
						ref = {this.textArea}
						onInput = {this.typingUserName}></input>

					<button
						className="btn btn-primary"
						style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px"}}
						disabled = {!(this.state.inputText.length > 0)}
						onClick = {() => {
							// When the 'Submit' button gets pressed from the username screen,
							// We should send a request to the server to create a new room with
							// the uuid we generate here.
							this.props.didRedirect();
							this.props.setUserName(this.state.inputText);
							let roomId = this.send();

							// set the state of this component with the gameId so that we can
							// redirect the user to that URL later. 
							this.setState({
								didGetUserName: true,
								gameId: roomId
							});
						}}>Submit</button>
				</div>
			}
			</React.Fragment>
		);
	}
}

const Main = (props) => {
    const color = React.useContext(ColorContext);

    return <CreateNewGame didRedirect = {color.playerDidRedirect} setUserName = {props.setUserName}/>
}


export default Main;
