const { MessageManager } = require("discord.js");
const CultureChecker = require("../../../../utils/culture/cultureChecker");

function executeSetCultureCommand (message, t, changeCulture) {
    const completeCommand = message.content.split(" ");
    if (completeCommand.length === 1) {
        message.reply(t("VALIDATION.SETCULTURE_ARGS"));
    }else if (!CultureChecker.isDiscordAppLanguage(completeCommand[1])) {
        message.reply(t("VALIDATION.NOT_AVALIABLE_LANGUAGE"));
    } else {
        message.channel.send(t("COMPLETE.SET_CULTURE"))
        changeCulture(completeCommand[1]);
    }
}

exports.executeSetCultureCommand = executeSetCultureCommand;
