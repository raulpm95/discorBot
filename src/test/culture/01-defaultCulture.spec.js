const chai = require("chai");
const { it } = require("mocha");
const assert = chai.assert;
const expect = chai.expect;
const Culture = require("../../dist/culture/i18next");
const enTranslation = require("../../dist/culture/en/translation.json");

describe("Unit test for Culture in default state", () => {
    Culture.startTranslation();
    it("Check that default language is en", () => {
        assert.equal(Culture.getCurrentLanguage(), "en");
    });
    it("Check default general hello", () => {
        const generalHello = Culture.translate("GENERAL.WELCOME_TO_ALL");
        expect(generalHello).to.be.a("string");
        assert.equal(generalHello, enTranslation.GENERAL.WELCOME_TO_ALL);
    });
    it("Check default say hello", () => {
        const sayHello = Culture.translate("GENERAL.SAY_HELLO");
        expect(sayHello).to.be.a("string");
        assert.equal(sayHello, enTranslation.GENERAL.SAY_HELLO);
    });
    it("Check default say good morning", () => {
        const sayGoodMorning = Culture.translate("GENERAL.SAY_GOODMORNING");
        expect(sayGoodMorning).to.be.a("string");
        assert.equal(sayGoodMorning, enTranslation.GENERAL.SAY_GOODMORNING);
    });
});