/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var myArrays_1 = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzMwODIwZTRhNGEwYjkxNjA2MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL215QXJyYXlzVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbXlBcnJheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLHdDQUFvQztBQUVwQztJQUNJLG9CQUFtQixXQUFtQixFQUFTLEVBQVk7UUFBeEMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFVO0lBQzNELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFFRCxDQUFDO0lBQ0csSUFBSSxLQUFLLEdBQTBCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQixLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRWhDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1FBQ2IsSUFBSSxNQUFNLEdBQWUsRUFBRSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxnQkFBTTtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUM7SUFDeEYsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUMsZ0JBQU07UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQ3pJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGdCQUFNO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQ3JJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFUixDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsZ0JBQWdCLE1BQWMsRUFBRSxNQUFrQjtJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDcEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsaUJBQWlCLE1BQWtCO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUMvRSxDQUFDO0FBRUQ7SUFDSSxJQUFJLEVBQUUsR0FBYSxFQUFFLENBQUM7SUFDdEIsSUFBSSxXQUFXLEdBQVcsbUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7SUFDSSxJQUFJLEVBQUUsR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksV0FBVyxHQUFXLG1CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVEO0lBQ0ksSUFBSSxFQUFFLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxXQUFXLEdBQVcsbUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsMEJBQTBCLFFBQWdCLEVBQUUsUUFBc0M7SUFDOUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxVQUFDLEVBQVk7UUFDL0IsSUFBSSxXQUFXLEdBQVcsbUJBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELHFCQUFxQixRQUFnQixFQUFFLFFBQWdDO0lBQ25FLElBQUksS0FBSyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQ2pELEtBQUssQ0FBQyxrQkFBa0IsR0FBRztRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQWEsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFFLEdBQWEsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLElBQUssV0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFFLENBQUMsQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7Ozs7QUM5RUQ7O0dBRUc7QUFDSDtJQUFBO0lBNEJBLENBQUM7SUEzQmlCLG1CQUFVLEdBQXhCLFVBQXlCLEVBQVk7UUFDakMsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUNsQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFcEIsR0FBRyxDQUFDO1lBQ0EsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNWLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLFdBQVcsRUFBRSxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDVixDQUFDO1lBQ0wsQ0FBQztZQUNELENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBRVosTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRWMsaUJBQVEsR0FBdkIsVUFBd0IsRUFBWSxFQUFFLENBQVM7UUFDM0MsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQTVCWSw0QkFBUSIsImZpbGUiOiJidWlsZC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzA4MjBlNGE0YTBiOTE2MDYxMCIsImltcG9ydCB7TXlBcnJheXN9IGZyb20gXCIuL215QXJyYXlzXCI7XG5cbmNsYXNzIFRlc3RSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21wYXJpc29uczogbnVtYmVyLCBwdWJsaWMgYXI6IG51bWJlcltdKSB7XG4gICAgfVxufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCB0ZXN0czogU2V0PCgpID0+IFRlc3RSZXN1bHQ+ID0gbmV3IFNldCgpO1xuICAgIHRlc3RzLmFkZCh0ZXN0RW1wdHlBcnJheSk7XG4gICAgdGVzdHMuYWRkKHRlc3RPbmVFbGVtZW50QXJyYXkpO1xuICAgIHRlc3RzLmFkZCh0ZXN0Rml2ZUVsZW1lbnRBcnJheSk7XG5cbiAgICB0ZXN0cy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBUZXN0UmVzdWx0ID0gZm4oKTtcbiAgICAgICAgdmVyaWZ5KGZuLm5hbWUsIHJlc3VsdCk7XG4gICAgfSk7XG5cbiAgICB0ZXN0TG9hZEZyb21GaWxlKCdRdWlja1NvcnQudHh0JywgKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IFF1aWNrU29ydFR4dCAodW5zb3J0ZWQpOiAnICsgcmVzdWx0LmNvbXBhcmlzb25zICsgJyBjb21wYXJpc29ucycpO1xuICAgIH0pKTtcblxuICAgIHRlc3RMb2FkRnJvbUZpbGUoJ1F1aWNrU29ydEIudHh0JywgKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGJlc3QgY2FzZTogJyArIChyZXN1bHQuY29tcGFyaXNvbnMgPT09IDk5OTkgPyAnc3VjY2VzcycgOiAnZmFpbGVkJykgKyAnICgnICsgcmVzdWx0LmNvbXBhcmlzb25zICsgJyBjb21wYXJpc29ucyknKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0TG9hZEZyb21GaWxlKCdRdWlja1NvcnRXLnR4dCcsIChyZXN1bHQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCB3b3JzdCBjYXNlOiAnICsgJzogJyArIChpc1ZhbGlkKHJlc3VsdCkgPyAnc3VjY2VzcycgOiAnZmFpbGVkJykgKyAnICgnICsgcmVzdWx0LmNvbXBhcmlzb25zICsgJyBjb21wYXJpc29ucyknKTtcbiAgICB9KSk7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHZlcmlmeShmbk5hbWU6IHN0cmluZywgcmVzdWx0OiBUZXN0UmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2coZm5OYW1lICsgJzogJyArIChpc1ZhbGlkKHJlc3VsdCkgPyAnc3VjY2VzcycgOiAnZmFpbGVkJykgKyAnICgnICsgcmVzdWx0LmNvbXBhcmlzb25zICsgJyBjb21wYXJpc29ucyknKTtcbiAgICBjb25zb2xlLmxvZyhmbk5hbWUgKyAnOiAnICsgcmVzdWx0LmFyKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChyZXN1bHQ6IFRlc3RSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LmNvbXBhcmlzb25zID09PSByZXN1bHQuYXIubGVuZ3RoICogKHJlc3VsdC5hci5sZW5ndGggLSAxKSAvIDJcbn1cblxuZnVuY3Rpb24gdGVzdEVtcHR5QXJyYXkoKTogVGVzdFJlc3VsdCB7XG4gICAgbGV0IGFyOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBjb21wYXJpc29uczogbnVtYmVyID0gTXlBcnJheXMuYnViYmxlU29ydChhcik7XG4gICAgcmV0dXJuIG5ldyBUZXN0UmVzdWx0KGNvbXBhcmlzb25zLCBhcik7XG59XG5cbmZ1bmN0aW9uIHRlc3RPbmVFbGVtZW50QXJyYXkoKTogVGVzdFJlc3VsdCB7XG4gICAgbGV0IGFyOiBudW1iZXJbXSA9IFsxXTtcbiAgICBsZXQgY29tcGFyaXNvbnM6IG51bWJlciA9IE15QXJyYXlzLmJ1YmJsZVNvcnQoYXIpO1xuICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdChjb21wYXJpc29ucywgYXIpO1xufVxuXG5mdW5jdGlvbiB0ZXN0Rml2ZUVsZW1lbnRBcnJheSgpOiBUZXN0UmVzdWx0IHtcbiAgICBsZXQgYXI6IG51bWJlcltdID0gWzksIDgsIDUsIDMsIDFdO1xuICAgIGxldCBjb21wYXJpc29uczogbnVtYmVyID0gTXlBcnJheXMuYnViYmxlU29ydChhcik7XG4gICAgcmV0dXJuIG5ldyBUZXN0UmVzdWx0KGNvbXBhcmlzb25zLCBhcik7XG59XG5cbmZ1bmN0aW9uIHRlc3RMb2FkRnJvbUZpbGUoZmlsZW5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChyZXN1bHQ6IFRlc3RSZXN1bHQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZWFkSW5BcnJheShmaWxlbmFtZSwgKGFyOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICBsZXQgY29tcGFyaXNvbnM6IG51bWJlciA9IE15QXJyYXlzLmJ1YmJsZVNvcnQoYXIpO1xuICAgICAgICBjYWxsYmFjayhuZXcgVGVzdFJlc3VsdChjb21wYXJpc29ucywgYXIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVhZEluQXJyYXkoZmlsZW5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChhcjogbnVtYmVyW10pID0+IHZvaWQpIHtcbiAgICBsZXQgeGh0dHA6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyczogc3RyaW5nW10gPSB4aHR0cC5yZXNwb25zZVRleHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgbGV0IGFyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgICAgbnVtYmVycy5mb3JFYWNoKChuKSA9PiBhci5wdXNoKCtuKSk7XG4gICAgICAgICAgICBjYWxsYmFjayhhcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhodHRwLm9wZW4oJ0dFVCcsIGZpbGVuYW1lKTtcbiAgICB4aHR0cC5zZW5kKCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL215QXJyYXlzVGVzdC50cyIsIi8qXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgKGltcHJvdmVkKSBCdWJibGUgU29ydCBhbGdvcml0aG1cbiAqL1xuZXhwb3J0IGNsYXNzIE15QXJyYXlzIHtcbiAgICBwdWJsaWMgc3RhdGljIGJ1YmJsZVNvcnQoYXI6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG06IG51bWJlciA9IGFyLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBiOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBrOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgY29tcGFyaXNvbnMgPSAwO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGIgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb21wYXJpc29ucysrO1xuICAgICAgICAgICAgICAgIGlmIChhcltpXSA+IGFyW2kgKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICBNeUFycmF5cy5zd2FwTmV4dChhciwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBrID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtID0gaztcbiAgICAgICAgfSB3aGlsZSAoYik7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25zO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHN3YXBOZXh0KGFyOiBudW1iZXJbXSwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCB0bXA6IG51bWJlciA9IGFyW2ldO1xuICAgICAgICBhcltpXSA9IGFyW2kgKyAxXTtcbiAgICAgICAgYXJbaSArIDFdID0gdG1wO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbXlBcnJheXMudHMiXSwic291cmNlUm9vdCI6IiJ9