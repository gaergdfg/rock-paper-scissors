import React from 'react';
import JoinGame from './join-game';
import Game from '../model/game';
import sha1 from 'sha1';
import { cookies } from '../cookie-manager';
import {Button, Col, Container, Form, FormGroup, FormLabel, Row} from "react-bootstrap";
import './main.css'

const axios = require('axios');


const hubUrl = 'https://game-nexus.herokuapp.com/';


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
				<div className="bg">
					<Container>
						<Row>
							<div className="inputfield">
								<h1>Rock, Paper, Scissors</h1>
							</div>
						</Row>
						<Row>
							<Col className="option" xs={12} md={5}>
								<Form className="login-form">
									<h4>Log in</h4>

									<FormGroup>
										<FormLabel> email:</FormLabel>
										<input
											placeholder="Email"
											ref={this.email}
											onInput={this.typingEmail}></input>
									</FormGroup>
									<FormGroup>
										<FormLabel> password:</FormLabel>
										<input
											ref={this.password}
											type="password"
											placeholder="Password"
											onInput={this.typingPassword}></input>
									</FormGroup>
									<Button className="btn btn-primary btn-block"
											disabled = {!(this.state.inputEmail.length > 0 && this.state.inputPassword.length > 0)}
											onClick = {() => {
												axios.post(hubUrl + 'api/v1/validate/', {
													email: this.state.inputEmail,
													passwordHash: sha1(this.state.inputPassword)
												}).then(response => {
													cookies.set('username', response.data.username.username, { path: '/' });
													this.setState({
														username: response.data.username.username,
														didGetUserName: true
													});
												}).catch(err => {
													alert('Invalid credentials!');
													console.log('got error:', err.response);
												})
											}}>Log in</Button>
								</Form>
							</Col>
							<Col className="option" xs={12} md={5}>
								<Form className="login-form">
									<h4>Play as guest:</h4>

									<FormGroup>
										<FormGroup>Choose nick:</FormGroup>
										<input
											placeholder="nick"
											ref = {this.textArea}
											onInput = {this.typingUserName}></input>
									</FormGroup>
									<Button className="btn btn-primary btn-block"
											disabled = {!(this.state.inputText.length > 0)}
											onClick = {() => {
												// When the 'Submit' button gets pressed from the username screen,
												// We should send a request to the server to create a new room with
												// the uuid we generate here.
												this.setState({
													username: this.state.inputText,
													didGetUserName: true
												})
											}}>Submit</Button>
								</Form>
							</Col>
						</Row>
					</Container>



				</div>
			}
			</React.Fragment>
		);
    }
}

export default JoinRoom;
