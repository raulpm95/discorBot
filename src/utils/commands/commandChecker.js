const AppCommands = require("./commandsConfig.json");


function isValidCommand (message) {
    if (message.length < 2) return false;
    return message.indexOf("/") === 0;
}

function isDefinedCommand (message) {
    if(!isValidCommand(message)) return false;
    const commandsKeys = Object.keys(AppCommands);
    return commandsKeys.findIndex(command => command === message) >= 0;
}

exports.isDefinedCommand = isDefinedCommand;
exports.isValidCommand = isValidCommand;