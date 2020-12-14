const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roleName = document.getElementById('role-name');
const userList = document.getElementById('users');

// Get username from URL
const {username, room, role} = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();

// Join the chatroom
socket.emit('joinRoom', {username, room, role});

// Get room and users
socket.on('roomUsers', ({role, users}) => {
    outputRoomName(role);
    outputUsers(users);

})

socket.on('message', message =>{
    console.log(message);
    outputMessage(message);

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Send message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const msg = e.target.elements.msg.value;

    // Sending message to server
    socket.emit('chatMessage', msg);

    // Clear input on chat box
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();

});

// Output message to DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    const p = document.createElement('p');
    p.classList.add('meta');
    p.innerText = message.username + " ";
    p.innerHTML += `<span>${message.time}</span>`;
    div.appendChild(p);
    const para = document.createElement('p');
    para.classList.add('text');
    para.innerText = message.text;
    div.appendChild(para);
    document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room){
    
}

function outputUsers(users){
    userList.innerHTML = '';
    users.forEach(user=>{
        const li = document.createElement('li');
        li.innerText = user.username;
        userList.appendChild(li);
  });
}