const Discord = require("discord.js");
const config = require("../config/discord/credentials.json");
const GeneralChannelController = require("../controllers/channels/general.controller");
const client = new Discord.Client();
const CommandChecker = require("../../utils/commands/commandChecker");
const HandleCommandsController = require("../controllers/commands/handleCommand");

function startBot () {
    client.login(config.TOKEN);
}

function getReady (t, changeLanguage) {
    client.on("ready", () => {
        GeneralChannelController.catchGeneralChannel(client);
        if (GeneralChannelController.isChannelReady()) {
            GeneralChannelController.sayHelloToGeneral(t);
        }
    })
    client.on("message", message => {
        if (!CommandChecker.isValidCommand(message.content)) {
            GeneralChannelController.handleMessage(message.content, t);
        } else {
            if (CommandChecker.isDefinedCommand(message.content.split(" ")[0])) {
                HandleCommandsController.handleCommand(message, t, changeLanguage);
            } else {
                message.reply(t("VALIDATION.INVALID_COMMAND"));
            }
        }
        
    })
}

exports.startBot = startBot;
exports.getReady = getReady;