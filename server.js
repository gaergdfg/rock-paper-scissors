const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const gameLogic = require('./game-logic');
const app = express();

const port = process.env.PORT || 8000;

const server = http.createServer(app);
const io = socketio(server);


io.on('connection', client => {
    gameLogic.initialiseGame(io, client);
});


// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// This middleware informs the express application to serve our compiled React files
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});


server.listen(port, () => {
    console.log(`Backend server listening on port ${port}`);
});
