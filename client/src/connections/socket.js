import io from 'socket.io-client';

const port = process.env.PORT || 8000;
const URL = process.env.URL || `localhost:${port}`;

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
