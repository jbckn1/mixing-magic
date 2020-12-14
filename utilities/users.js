const users = [];

// Join user to chat
function userJoin(id, username, room, role){

    const user = {id, username, room, role};

    users.push(user);

    return user;
}

// Get current user
function getCurrentUser(id){
    return users.find(user => user.id === id);
}

function getRole(role){
    return users.find(user => user.role === role);
}

// User leaves chat
function userLeave(id){
    const index = users.findIndex(user => user.id === id);
    
    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room){
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
    getRole
}