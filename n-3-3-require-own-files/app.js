console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const fiut = require('./notes.js');
console.log(fiut.add)
console.log('Result:', fiut.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
