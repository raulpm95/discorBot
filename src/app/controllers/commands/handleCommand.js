const commands = require("../../../utils/commands/enumCommands");
const CultureCommandsController = require("./culture/cultureCommands.controller");

function handleCommand (message, t, changeLanguage) {
    const command = message.content.split(" ")[0];
    switch(command) {
        case commands.EnumCommands.SETCULTURE:
            CultureCommandsController.executeSetCultureCommand(message, t, changeLanguage);
            break;
        default:
            break;
    }
}
exports.handleCommand = handleCommand;