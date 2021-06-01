import io from 'socket.io-client';

// const port = process.env.PORT || 8000;
// const url = process.env.URL || `localhost:${port}`;
const url = 'https://game-nexus-rps.herokuapp.com';

const socket = io(url);

let mySocketId;

socket.on('createNewGame', status => {
	console.log("A new game has been created! Username: " + status.userName + ", Game id: " + status.gameId + " Socket id: " + status.mySocketId);
	mySocketId = status.mySocketId;
})

export {
	socket,
	mySocketId
};
