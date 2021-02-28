const avaliableLanguages = require("./avaliableLanguages.json");

function isDiscordAppLanguage (culture) {
    return avaliableLanguages.DISCORD_APP_LANGUAGES.findIndex(language => language === culture) >= 0;
}

exports.isDiscordAppLanguage = isDiscordAppLanguage;