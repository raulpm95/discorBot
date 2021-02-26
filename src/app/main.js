const DiscordBot = require("./bot/discord");

function start () {
    DiscordBot.startBot();
    DiscordBot.getReady();
}

exports.start = start;