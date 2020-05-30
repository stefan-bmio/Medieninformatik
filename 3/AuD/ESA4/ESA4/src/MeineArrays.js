"use strict";
exports.__esModule = true;
var MeineArrays = /** @class */ (function () {
    function MeineArrays() {
    }
    MeineArrays.quickSort = function (ar) {
        return MeineArrays.quickSortRecursive(ar, 0, ar.length - 1);
    };
    MeineArrays.quickSortRecursive = function (ar, p, r) {
        if (p < r) {
            var q = MeineArrays.partition(ar, p, r);
            var comparisons = r - p;
            comparisons += MeineArrays.quickSortRecursive(ar, p, q - 1);
            comparisons += MeineArrays.quickSortRecursive(ar, q + 1, r);
            return comparisons;
        }
        else {
            return 0;
        }
    };
    MeineArrays.quickSortStrat = function (ar, st) {
        return MeineArrays.quickSortStratRecursive(ar, 0, ar.length - 1, st);
    };
    MeineArrays.quickSortStratRecursive = function (ar, p, r, st) {
        if (p < r) {
            var pivot = st.findPivot(p, r);
            MeineArrays.swap(ar, pivot, r);
            var q = MeineArrays.partition(ar, p, r);
            var comparisons = r - p;
            comparisons += MeineArrays.quickSortStratRecursive(ar, p, q - 1, st);
            comparisons += MeineArrays.quickSortStratRecursive(ar, q + 1, r, st);
            return comparisons;
        }
        else {
            return 0;
        }
    };
    MeineArrays.partition = function (ar, p, r) {
        var x = ar[r];
        var i = p - 1;
        for (var j = p; j < r; j++) {
            if (ar[j] <= x) {
                i++;
                MeineArrays.swap(ar, i, j);
            }
        }
        i++;
        MeineArrays.swap(ar, i, r);
        return i;
    };
    MeineArrays.swap = function (ar, i, j) {
        var tmp = ar[i];
        ar[i] = ar[j];
        ar[j] = tmp;
    };
    return MeineArrays;
}());
exports.MeineArrays = MeineArrays;
//# sourceMappingURL=MeineArrays.js.map