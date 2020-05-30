"use strict";
exports.__esModule = true;
var MeineArrays_1 = require("../src/MeineArrays");
var Test_1 = require("./Test");
(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var numbers = xhttp.responseText.split('\n');
            var ar_1 = [];
            numbers.forEach(function (n) { return ar_1.push(+n); });
            MeineArraysTest(ar_1);
        }
    };
    xhttp.open('GET', "QuickSort.txt");
    xhttp.send();
})();
function MeineArraysTest(ar) {
    var fileArray = ar;
    function newArrayFromFile() {
        return JSON.parse(JSON.stringify(fileArray));
    }
    var tests = new Set();
    tests.add(new Test_1.Test("empty array", function () {
        var ar = [];
        var comparisons = MeineArrays_1.MeineArrays.quickSort(ar);
        return ar.length === 0 && comparisons === 0;
    }));
    tests.add(new Test_1.Test("one element array", function () {
        var ar = [1];
        var comparisons = MeineArrays_1.MeineArrays.quickSort(ar);
        return ar.length === 1 && ar[0] === 1 && comparisons === 0;
    }));
    tests.add(new Test_1.Test("several elements array", function () {
        var ar = [11, 15, 13, 8, 1, 10, 16, 12];
        var comparisons = MeineArrays_1.MeineArrays.quickSort(ar);
        var EXPECTED = [1, 8, 10, 11, 12, 13, 15, 16];
        if (EXPECTED.length !== ar.length) {
            return false;
        }
        for (var i = 0; i < EXPECTED.length; i++) {
            if (ar[i] !== EXPECTED[i]) {
                return false;
            }
        }
        return true;
    }));
    tests.add(new Test_1.Test("QuickSort.txt", function () {
        var ar = newArrayFromFile();
        var comparisons = MeineArrays_1.MeineArrays.quickSort(ar);
        this.auxiliaryLog(comparisons + " comparisons");
        return verifyQuickSortTxt(ar);
    }));
    tests.add(new Test_1.Test("QuickSort.txt with strategy pattern", function () {
        var ar = newArrayFromFile();
        var comparisons = MeineArrays_1.MeineArrays.quickSortStrat(ar, {
            findPivot: function (l, r) {
                return Math.floor(Math.random() * (r - l)) + l;
            }
        });
        this.auxiliaryLog(comparisons + " comparisons");
        return verifyQuickSortTxt(ar);
    }));
    tests.forEach(function (test) {
        test.test();
    });
}
function verifyQuickSortTxt(ar) {
    var isPass = true;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] !== i + 1) {
            isPass = false;
            break;
        }
    }
    return isPass;
}
//# sourceMappingURL=MeineArraysTest.js.map