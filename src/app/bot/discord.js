const Discord = require("discord.js");
const config = require("../config/discord/credentials.json");
const GeneralChannelController = require("../controllers/channels/general.controller");
const client = new Discord.Client();

function startBot () {
    client.login(config.TOKEN);
}

function getReady (t) {
    client.on("ready", () => {
        GeneralChannelController.catchGeneralChannel(client);
        if (GeneralChannelController.isChannelReady()) {
            GeneralChannelController.sayHelloToGeneral(t);
        }
    })
    client.on("message", message => {
        GeneralChannelController.handleMessage(message.content, t);
    })
}

exports.startBot = startBot;
exports.getReady = getReady;