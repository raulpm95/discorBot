function isValidCommand (message) {
    if (message.length < 2) return false;
    return message.indexOf("/") === 0;
    
}

exports.isValidCommand = isValidCommand;