const chai = require("chai");
const { it } = require("mocha");
const assert = chai.assert;
const expect = chai.expect;
const Culture = require("../../dist/culture/i18next");

describe("Unit test for Culture in default state", () => {
    Culture.startTranslation();
    it("Check that default language is en", () => {
        assert.equal(Culture.getCurrentLanguage(), "en");
    });
});