console.log('Starting app.');

const fs = require('fs');
const os = require('os');

const user = os.userInfo()
console.log(user)
const name = user.username




fs.appendFile('message.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log(`Hello ${name} The "data to append" was appended to file!`);
  });