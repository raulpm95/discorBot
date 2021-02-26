const Discord = require("discord.js");
const config = require("../config/discord/credentials.json");
const client = new Discord.Client();

function startBot () {
    client.login(config.TOKEN);
}

exports.startBot = startBot;