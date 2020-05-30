import {Test} from "./Test";
import {Assertion} from "./Assertion";
import {Spieler} from "../src/Spieler";

/*
    Various test functions for the hash function exercise
 */
(function () {
    let tests: Set<Test> = new Set();

    tests.add(new Test('name 11', (): Assertion => {
        let spieler: Spieler = new Spieler("11", 0);
        return Assertion.that('name hash code', spieler.hashCode() === 1568, '' + spieler.hashCode());
    }));

    tests.add(new Test('1000 points', (): Assertion => {
        let spieler: Spieler = new Spieler("", 1000);
        return Assertion.that('points hash code', spieler.hashCode() === 1000, '' + spieler.hashCode());
    }));

    tests.add(new Test('equal players', (): Assertion => {
        let spieler0 = new Spieler('test name', 0);
        let spieler1 = new Spieler('test name', 0);

        return Assertion.that('equals', spieler0.equals(spieler1))
            .and('hash codes match', spieler0.hashCode() === spieler1.hashCode());
    }));

    tests.add(new Test('unequal players', (): Assertion => {
        let spieler0 = new Spieler('name 0', 0);
        let spieler1 = new Spieler('name 0', 1);
        let spieler2 = new Spieler('name 1', 1);

        return Assertion.that('hash code 0 & 1', spieler0.hashCode() != spieler1.hashCode())
            .and('hash code 0 & 2', spieler0.hashCode() != spieler2.hashCode())
            .and('hash code 1 & 2', spieler1.hashCode() != spieler2.hashCode())
            .and('equals 0 & 1', !spieler0.equals(spieler1))
            .and('equals 0 & 2', !spieler0.equals(spieler2))
            .and('equals 1 & 2', !spieler1.equals(spieler2));
    }));

    tests.forEach(test => test.run());
})();