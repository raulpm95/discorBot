const i18next = require("i18next");
const esTranslation = require("./es/translation.json");
const enTranslation = require("./en/translation.json");

function startTranslation () {
    i18next.init({
        lng: "en",
        debug: true,
        resources: {
            en: { translation: enTranslation},
            es: { translation: esTranslation}
        }
    });
}

function translate (key) {
    return i18next.t(key);
}

exports.startTranslation = startTranslation;
exports.translate = translate;
