const { assert } = require("chai");
const CommandChecker = require("../../utils/commands/commandChecker");

describe("Unit test for Command checker", () => {
    it("Check that /set is a command", () => {
        assert.equal(CommandChecker.isValidCommand("/set"), true);
    });
    it("Check that hello is not a command", () => {
        assert.equal(CommandChecker.isValidCommand("hello"), false);
    });
    it("Check that set/ is not a command", () => {
        assert.equal(CommandChecker.isValidCommand("set/"), false);
    });
    it("Check that / is not a command", () => {
        assert.equal(CommandChecker.isValidCommand("/"), false);
    });
    it("Check that /setCulture is a defined command", () => {
        assert.equal(CommandChecker.isDefinedCommand("/setCulture"), true);
    });
    it("Check that /set is not a defined command", () => {
        assert.equal(CommandChecker.isDefinedCommand("/set"), false);
    });
});