import React from 'react';
import JoinGame from './join-game';
import Game from '../model/game';
import sha1 from 'sha1';
import { cookies } from '../cookie-manager';

const axios = require('axios');


const hubUrl = 'https://game-nexus.herokuapp.com';


/**
 * Onboard is where we create the game room.
 */

class JoinRoom extends React.Component {
	state = {
		didGetUserName: false,
		username: '',
		inputEmail: '',
		inputPassword: '',
		inputText: ''
	}

	constructor(props) {
		super(props);

		this.email = React.createRef();
		this.password = React.createRef();

		this.textArea = React.createRef();
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
		const typedText = this.textArea.current.value
		
		// set the state with that text
		this.setState({
			inputText: typedText
		})
	}

    render() {
		return (
			<React.Fragment>
			{
				this.state.didGetUserName ? 
				<React.Fragment>
					<JoinGame userName = {this.state.username} isHost = {false}/>
					<Game myUserName = {this.state.username} isHost = {false}/>
				</React.Fragment>
			:
				<div>
					<h1 style={{textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px"}}>Log in:</h1>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}} 
						ref={this.email}
						onInput={this.typingEmail}></input>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}} 
						ref={this.password}
						type="password"
						onInput={this.typingPassword}></input>

					<button className="btn btn-primary" 
						style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px"}} 
						disabled = {!(this.state.inputEmail.length > 0 && this.state.inputPassword.length > 0)} 
						onClick = {() => {
							console.log('logging in');
							axios.post(hubUrl + 'api/v1/validate/', {
								email: this.state.inputEmail,
								passwordHash: sha1(this.state.inputPassword)
							}).then(response => {
								console.log('got response:', response);
								cookies.set('username', response.username, { path: '/' });
								// TODO: remove this cookie right as the game ends
								this.setState({
									username: response.username,
									didGetUserName: true
								});
							}).catch(err => {
								alert('Invalid credentials!');
								console.log('got error:', err);
							})
						}}>Submit</button>


					<h1 style={{textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px"}}>Play as guest:</h1>

					<input
						style={{marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px"}} 
						ref = {this.textArea}
						onInput = {this.typingUserName}></input>

					<button className="btn btn-primary" 
						style = {{marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px"}} 
						disabled = {!(this.state.inputText.length > 0)} 
						onClick = {() => {
							// When the 'Submit' button gets pressed from the username screen,
							// We should send a request to the server to create a new room with
							// the uuid we generate here.
							this.setState({
								username: this.state.inputText,
								didGetUserName: true
							})
						}}>Submit</button>
				</div>
			}
			</React.Fragment>
		);
    }
}

export default JoinRoom;
