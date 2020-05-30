"use strict";
exports.__esModule = true;
var myArrays_1 = require("./myArrays");
var TestResult = /** @class */ (function () {
    function TestResult(comparisons, ar) {
        this.comparisons = comparisons;
        this.ar = ar;
    }
    return TestResult;
}());
(function () {
    var tests = new Set();
    tests.add(testEmptyArray);
    tests.add(testOneElementArray);
    tests.add(testFiveElementArray);
    tests.forEach(function (fn) {
        var result = fn();
        verify(fn.name, result);
    });
    testLoadFromFile('QuickSort.txt', (function (result) {
        console.log('test QuickSortTxt (unsorted): ' + result.comparisons + ' comparisons');
    }));
    testLoadFromFile('QuickSortB.txt', (function (result) {
        console.log('test best case: ' + (result.comparisons === 9999 ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    }));
    testLoadFromFile('QuickSortW.txt', (function (result) {
        console.log('test worst case: ' + ': ' + (isValid(result) ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    }));
})();
function verify(fnName, result) {
    console.log(fnName + ': ' + (isValid(result) ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    console.log(fnName + ': ' + result.ar);
}
function isValid(result) {
    return result.comparisons === result.ar.length * (result.ar.length - 1) / 2;
}
function testEmptyArray() {
    var ar = [];
    var comparisons = myArrays_1.MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}
function testOneElementArray() {
    var ar = [1];
    var comparisons = myArrays_1.MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}
function testFiveElementArray() {
    var ar = [9, 8, 5, 3, 1];
    var comparisons = myArrays_1.MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}
function testLoadFromFile(filename, callback) {
    readInArray(filename, function (ar) {
        var comparisons = myArrays_1.MyArrays.bubbleSort(ar);
        callback(new TestResult(comparisons, ar));
    });
}
function readInArray(filename, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var numbers = xhttp.responseText.split('\n');
            var ar_1 = [];
            numbers.forEach(function (n) { return ar_1.push(+n); });
            callback(ar_1);
        }
    };
    xhttp.open('GET', filename);
    xhttp.send();
}
//# sourceMappingURL=myArraysTest.js.map