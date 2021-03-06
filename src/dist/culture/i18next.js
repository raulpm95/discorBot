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

function getCurrentLanguage () {
    return i18next.language;
}

function changeLanguage (language) {
    i18next.changeLanguage(language);
}

exports.startTranslation = startTranslation;
exports.translate = translate;
exports.getCurrentLanguage = getCurrentLanguage;
exports.changeLanguage= changeLanguage;
