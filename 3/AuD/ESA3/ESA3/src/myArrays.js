"use strict";
exports.__esModule = true;
/*
 * Implementation of the (improved) Bubble Sort algorithm
 */
var MyArrays = /** @class */ (function () {
    function MyArrays() {
    }
    MyArrays.bubbleSort = function (ar) {
        var m = ar.length - 1;
        var b = false;
        var k = 0;
        var comparisons = 0;
        do {
            b = false;
            for (var i = 0; i < m; i++) {
                comparisons++;
                if (ar[i] > ar[i + 1]) {
                    MyArrays.swapNext(ar, i);
                    b = true;
                    k = i;
                }
            }
            m = k;
        } while (b);
        return comparisons;
    };
    MyArrays.swapNext = function (ar, i) {
        var tmp = ar[i];
        ar[i] = ar[i + 1];
        ar[i + 1] = tmp;
    };
    return MyArrays;
}());
exports.MyArrays = MyArrays;
//# sourceMappingURL=myArrays.js.map