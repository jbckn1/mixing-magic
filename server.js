
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utilities/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers, getRole} = require('./utilities/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const serverName = "Mixing Magic Server";

// Run for when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({username, room, role}) => {

        const user = userJoin(socket.id, username, room, role);

        socket.join(user.room)

        // Welcome new users
        socket.emit('message', formatMessage(serverName, 'Welcome to Mixing Magic'));

        // Notify when user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(serverName, `${user.username} has joined the chat`));

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room),
            role: user.role
        })
    });

    // Listen for chatMessage
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg))
    });

    // Notify on user disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        
        if(user){
            io.to(user.room).emit('message', formatMessage(serverName, `${user.username} has left the chat`));
        }

/*         io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        }) */
    });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log('Server running on port ' + PORT ));



