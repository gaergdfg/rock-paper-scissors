import io from 'socket.io-client';

const URL = 'localhost:3000';
const socket = io(URL);

let mySocketId;

socket.on('createNewGame', status => {
	console.log("A new game has been created! Username: " + status.userName + ", Game id: " + status.gameId + " Socket id: " + status.mySocketId);
	mySocketId = status.mySocketId;
})

export {
	socket,
	mySocketId
};
