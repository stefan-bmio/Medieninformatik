"use strict";
exports.__esModule = true;
var testBinarySearchGeneric_1 = require("./testBinarySearchGeneric");
var testBinarySearchInt_1 = require("./testBinarySearchInt");
var binarySearch_1 = require("./binarySearch");
(function test() {
    log('Test binary search (int)');
    testBinarySearchInt_1.testInt();
    log('Test binary search (generic)');
    testBinarySearchGeneric_1.testGeneric();
    log('Test 999');
    var ar = Array(1000).fill(0).map(function (v, i) { return i; });
    console.log('Zahl 12 gefunden an Position: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    console.log('Zahl -1 nicht gefunden (Ergebnis: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, -1) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    log('Test 99999');
    ar = Array(100000).fill(0).map(function (v, i) { return i; });
    console.log('Zahl 12 gefunden an Position: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
    console.log('Zahl 100000 nicht gefunden (Ergebnis: ' + binarySearch_1.BinarySearch.binarySearchInt(ar, 100000) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + binarySearch_1.BinarySearch.getRecursionCount());
})();
function log(message) {
    console.log('');
    console.log('####');
    console.log('#### ' + message);
    console.log('####');
}
//# sourceMappingURL=testBinarySearch.js.map