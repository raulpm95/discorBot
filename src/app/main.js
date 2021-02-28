const DiscordBot = require("./bot/discord");
const Culture = require("../dist/culture/i18next");

function start () {
    Culture.startTranslation();
    DiscordBot.startBot();
    DiscordBot.getReady(Culture.translate, Culture.changeLanguage);
}

exports.start = start;