const os = require('os');

let userName = os.userInfo().username;

module.exports = "Добрый день " + userName;