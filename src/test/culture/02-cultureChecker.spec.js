const { assert } = require("chai");
const CultureChecker = require("../../utils/culture/cultureChecker");

describe("Unit test for culture checker", () => {
    it ("Check that es is a valid language", () => {
        assert.equal(CultureChecker.isDiscordAppLanguage("es"), true);
    });
    it ("Check that en is a valid language", () => {
        assert.equal(CultureChecker.isDiscordAppLanguage("en"), true);
    });
    it ("Check that ch is not a valid language", () => {
        assert.equal(CultureChecker.isDiscordAppLanguage("ch"), false);
    });
});