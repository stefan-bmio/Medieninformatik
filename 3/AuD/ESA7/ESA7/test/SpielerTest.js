"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = require("./Test");
var Assertion_1 = require("./Assertion");
var Spieler_1 = require("../src/Spieler");
/*
    Various test functions for the hash function exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test('name 11', function () {
        var spieler = new Spieler_1.Spieler("11", 0);
        return Assertion_1.Assertion.that('name hash code', spieler.hashCode() === 1568, '' + spieler.hashCode());
    }));
    tests.add(new Test_1.Test('1000 points', function () {
        var spieler = new Spieler_1.Spieler("", 1000);
        return Assertion_1.Assertion.that('points hash code', spieler.hashCode() === 1000, '' + spieler.hashCode());
    }));
    tests.add(new Test_1.Test('equal players', function () {
        var spieler0 = new Spieler_1.Spieler('test name', 0);
        var spieler1 = new Spieler_1.Spieler('test name', 0);
        return Assertion_1.Assertion.that('equals', spieler0.equals(spieler1))
            .and('hash codes match', spieler0.hashCode() === spieler1.hashCode());
    }));
    tests.add(new Test_1.Test('unequal players', function () {
        var spieler0 = new Spieler_1.Spieler('name 0', 0);
        var spieler1 = new Spieler_1.Spieler('name 0', 1);
        var spieler2 = new Spieler_1.Spieler('name 1', 1);
        return Assertion_1.Assertion.that('hash code 0 & 1', spieler0.hashCode() != spieler1.hashCode())
            .and('hash code 0 & 2', spieler0.hashCode() != spieler2.hashCode())
            .and('hash code 1 & 2', spieler1.hashCode() != spieler2.hashCode())
            .and('equals 0 & 1', !spieler0.equals(spieler1))
            .and('equals 0 & 2', !spieler0.equals(spieler2))
            .and('equals 1 & 2', !spieler1.equals(spieler2));
    }));
    tests.forEach(function (test) { return test.run(); });
})();
//# sourceMappingURL=SpielerTest.js.map