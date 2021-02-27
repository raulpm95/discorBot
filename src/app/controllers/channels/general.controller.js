const channelsIds = require("../../config/discord/channels.json");
const EspCulture = require("../../config/culture/es/translate.json")
var generalChannel = null;

function catchGeneralChannel (client) {
    generalChannel = client.channels.cache.get(channelsIds.GENERAL);
}

function isChannelReady () {
    return generalChannel !== null;
}

function sayHelloToGeneral (t) {
    if (isChannelReady) generalChannel.send(t("GENERAL.WELCOME_TO_ALL"));
}

function handleMessage (message, t) {
    if (isChannelReady) {
        switch (message.toLowerCase()) {
            case "hola":
                generalChannel.send(t("GENERAL.SAY_HELLO"));
                break;
            case "buenos dias":
                generalChannel.send(t("GENERAL.SAY_GOODMORNING"));
                break;
            default:
                break;
        }
    }
}

exports.catchGeneralChannel = catchGeneralChannel;
exports.sayHelloToGeneral = sayHelloToGeneral;
exports.isChannelReady = isChannelReady;
exports.handleMessage = handleMessage;