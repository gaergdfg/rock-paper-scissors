let io;
let gameSocket;
let gameSessions = [];


const initialiseGame = (sio, socket) => {
	io = sio;
	gameSocket = socket;

	gameSessions.push(gameSocket);

	gameSocket.on('createNewGame', createNewGame);
	
	gameSocket.on('new host move', newHostMove);
	
	gameSocket.on('new guest move', newGuestMove);

	gameSocket.on('disconnect', onDisconnect);

	gameSocket.on('playerJoinGame', playerJoinsGame);

	gameSocket.on('request username', requestUserName);

	gameSocket.on('recieved userName', receivedUserName);
}

function createNewGame(gameId) {
    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    this.emit('createNewGame', {gameId: gameId, mySocketId: this.id});

    // Join the Room and wait for the other player
    this.join(gameId);
}

function newHostMove(move) {
    /**
     * First, we need to get the room ID in which to send this message. 
     * Next, we actually send this message to everyone except the sender
     * in this room. 
     */
    const gameId = move.gameId;
    
    io.to(gameId).emit('hostMove', move.choice);
}

function newGuestMove(move) {
    /**
     * First, we need to get the room ID in which to send this message. 
     * Next, we actually send this message to everyone except the sender
     * in this room. 
     */
    const gameId = move.gameId;
    
    io.to(gameId).emit('guestMove', move.choice);
}

function playerJoinsGame(idData) {
	/**
	 * Joins the given socket to a session with it's gameId
	 */

	// A reference to the player's Socket.IO socket object
	var sock = this;

	// Look up the room ID in the Socket.IO manager object.
	var room = io.sockets.adapter.rooms[idData.gameId];
	// console.log(room)

	// If the room exists...
	if (room === undefined) {
		this.emit('status' , 'This game session does not exist.');
		return;
	}
	if (room.length < 2) {
		// attach the socket id to the data object.
		idData.mySocketId = sock.id;

		// Join the room
		sock.join(idData.gameId);

		console.log(room.length);

		if (room.length === 2) {
			io.sockets.in(idData.gameId).emit('start game', idData.userName);
		}

		// Emit an event notifying the clients that the player has joined the room.
		io.sockets.in(idData.gameId).emit('playerJoinedRoom', idData);

	} else {
		// Otherwise, send an error message back to the player.
		this.emit('status' , 'There are already 2 people playing in this room.');
	}
}

function onDisconnect() {
    var i = gameSessions.indexOf(gameSocket);
    gameSessions.splice(i, 1);
}


function requestUserName(gameId) {
    io.to(gameId).emit('give userName', this.id);
}

function receivedUserName(data) {
    data.socketId = this.id;
    io.to(data.gameId).emit('get Opponent UserName', data);
}


exports.initialiseGame = initialiseGame;
