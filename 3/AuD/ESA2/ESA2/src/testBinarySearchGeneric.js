"use strict";
exports.__esModule = true;
var binarySearch_1 = require("./binarySearch");
function testGeneric() {
    var tests = new Set();
    tests.add(testEmptyArray);
    tests.add(testElementInArrayLength1);
    tests.add(testElementNotInArrayLength1);
    tests.add(testElementInArrayPosition1Length5);
    tests.add(testElementInArrayPosition5Length5);
    tests.add(testElementInArrayPosition2Length5);
    tests.add(testElementNotInArrayLength5);
    tests.forEach(function (fn) {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}
exports.testGeneric = testGeneric;
var Instrument = /** @class */ (function () {
    function Instrument(str) {
        this.str = str;
    }
    Instrument.prototype.compareTo = function (other) {
        if (this.str < other.str) {
            return -1;
        }
        if (this.str === other.str) {
            return 0;
        }
        return 1;
    };
    Instrument.createArray = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var array = [];
        for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
            var str = strings_1[_a];
            array.push(new Instrument(str));
        }
        return array;
    };
    return Instrument;
}());
function testEmptyArray() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearch([], new Instrument('Accordion'));
    return EXPECTED === actual;
}
function testElementInArrayLength1() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Accordion'));
    return EXPECTED === actual;
}
function testElementNotInArrayLength1() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Bass guitar'));
    return EXPECTED === actual;
}
function testElementInArrayPosition1Length5() {
    var EXPECTED = 1;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Cymbals'));
    return EXPECTED === actual;
}
function testElementInArrayPosition5Length5() {
    var EXPECTED = 5;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Ukulele'));
    return EXPECTED === actual;
}
function testElementInArrayPosition2Length5() {
    var EXPECTED = 2;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Electric Guitar'));
    return EXPECTED === actual;
}
function testElementNotInArrayLength5() {
    var EXPECTED = 0;
    var ar = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    var actual = binarySearch_1.BinarySearch.binarySearch(ar, new Instrument('Accordion'));
    return EXPECTED === actual;
}
//# sourceMappingURL=testBinarySearchGeneric.js.map