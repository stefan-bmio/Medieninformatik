"use strict";
exports.__esModule = true;
var BinarySearch = /** @class */ (function () {
    function BinarySearch() {
    }
    /*
     * Calls the recursive function to binary search a number in an array of
     * numbers. Strictly speaking, that could be an array of any type of numbers
     * and an x argument of any type of number, not necessarily integers.
     */
    BinarySearch.binarySearchInt = function (ar, x) {
        BinarySearch.recursionCounter = 0;
        return BinarySearch.binarySearchIntRecursiv(ar, x, 0, ar.length);
    };
    BinarySearch.binarySearchIntRecursiv = function (ar, x, l, r) {
        if (l >= r) {
            return 0;
        }
        var i = Math.floor((l + r) / 2);
        if (ar[i] === x) {
            return i + 1;
        }
        var nextL = l;
        var nextR = r;
        if (ar[i] < x) {
            nextL = i + 1;
        }
        else {
            nextR = i;
        }
        // counting the recursive method calls only, not including the initial call
        BinarySearch.recursionCounter++;
        return BinarySearch.binarySearchIntRecursiv(ar, x, nextL, nextR);
    };
    /*
     * Calls the recursive function to binary search the object x in the array.
     * in order to compare them, the objects in the array and the object x must
     * be of a class which implements the Comparable interface.
     */
    BinarySearch.binarySearch = function (ar, x) {
        return BinarySearch.binarySearchRecursiv(ar, x, 0, ar.length);
    };
    BinarySearch.binarySearchRecursiv = function (ar, x, l, r) {
        if (l >= r) {
            return 0;
        }
        var i = Math.floor((l + r) / 2);
        if (ar[i].compareTo(x) === 0) {
            return i + 1;
        }
        var nextL = l;
        var nextR = r;
        if (ar[i].compareTo(x) < 0) {
            nextL = i + 1;
        }
        else {
            nextR = i;
        }
        return BinarySearch.binarySearchRecursiv(ar, x, nextL, nextR);
    };
    BinarySearch.getRecursionCount = function () {
        return BinarySearch.recursionCounter;
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
//# sourceMappingURL=binarySearch.js.map