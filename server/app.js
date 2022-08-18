require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// app.set('port', port);


// db connection
const db = require('./configs/db.config');

// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var charactersRouter = require('./routes/characters');
var challengesRouter = require('./routes/challenges');
var animalsRouter = require('./routes/animals');
var unlockedRouter = require('./routes/unlockedAnimals');
var challengeParticipants = require('./routes/challengeParticipants');
var loginRouter = require('./routes/login');
const levelsRouter = require('./routes/levels');
const followersRouter = require('./routes/followers');

var app = express();

//socket io
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    console.log(data);
    socket.join(data.room);
    socket.to(data.room).emit(`User with username: ${data.author} joined room: ${data.room}`);
    console.log(`User with username: ${data.author} joined room: ${data.room}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '3000');
server.listen(port,()=>{
  console.log("server runnings");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter(db));
app.use('/characters', charactersRouter(db));
app.use('/challenges', challengesRouter(db));
app.use('/animals', animalsRouter(db));
app.use('/unlocked', unlockedRouter(db));
app.use('/participants', challengeParticipants(db));
app.use('/login', loginRouter(db));
app.use('/levels', levelsRouter(db));
app.use('/followers',followersRouter(db));



module.exports = app;

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}