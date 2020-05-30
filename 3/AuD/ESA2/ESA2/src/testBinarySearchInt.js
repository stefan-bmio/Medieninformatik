"use strict";
exports.__esModule = true;
var binarySearch_1 = require("./binarySearch");
function testInt() {
    var tests = new Set();
    tests.add(testEmptyIntArray);
    tests.add(testElementInIntArrayLength1);
    tests.add(testElementNotInIntArrayLength1);
    tests.add(testElementInIntArrayPosition1Length5);
    tests.add(testElementInIntArrayPosition5Length5);
    tests.add(testElementInIntArrayPosition3Length5);
    tests.add(testElementNotInIntArrayLength5);
    tests.forEach(function (fn) {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}
exports.testInt = testInt;
function testEmptyIntArray() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([], 1);
    return EXPECTED === actual;
}
function testElementInIntArrayLength1() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([1], 1);
    return EXPECTED === actual;
}
function testElementNotInIntArrayLength1() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([1], 2);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition1Length5() {
    var EXPECTED = 1;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 3);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition5Length5() {
    var EXPECTED = 5;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 21);
    return EXPECTED === actual;
}
function testElementInIntArrayPosition3Length5() {
    var EXPECTED = 3;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 8);
    return EXPECTED === actual;
}
function testElementNotInIntArrayLength5() {
    var EXPECTED = 0;
    var actual = binarySearch_1.BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 1);
    return EXPECTED === actual;
}
//# sourceMappingURL=testBinarySearchInt.js.map