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

Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = __webpack_require__(1);
var Assertion_1 = __webpack_require__(2);
var BinaererSuchBaum_1 = __webpack_require__(4);
var ComparableNumber_1 = __webpack_require__(6);
/*
    Various test functions for the tree ADT exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test("inorder 10 nodes", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        for (var i = 0; i < 10; i += 2) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        for (var i = 9; i >= 1; i -= 2) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        return Assertion_1.Assertion.that('traverse tree in order', tree.inorder() === '0 1 2 3 4 5 6 7 8 9', tree.inorder());
    }));
    tests.add(new Test_1.Test("search empty tree", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        return Assertion_1.Assertion.that('key 0 not in tree', !tree.search(new ComparableNumber_1.ComparableNumber(0)));
    }));
    tests.add(new Test_1.Test("search 1 node", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that("key in tree", tree.search(new ComparableNumber_1.ComparableNumber(0)))
            .and("key not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(1)));
    }));
    tests.add(new Test_1.Test("search 2 keys 5 nodes", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(8));
        tree.insert(new ComparableNumber_1.ComparableNumber(2));
        tree.insert(new ComparableNumber_1.ComparableNumber(4));
        tree.insert(new ComparableNumber_1.ComparableNumber(3));
        return Assertion_1.Assertion.that("key 8 in tree", tree.search(new ComparableNumber_1.ComparableNumber(8)))
            .and("key 8 in tree", tree.search(new ComparableNumber_1.ComparableNumber(2)))
            .and("key 1 not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(1)))
            .and("key 5 not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(5)));
    }));
    tests.add(new Test_1.Test("height 0", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that('tree 1 node height 0', tree.height() === 0);
    }));
    tests.add(new Test_1.Test("height 1", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        return Assertion_1.Assertion.that('tree 2 nodes height 1', tree.height() === 1);
    }));
    tests.add(new Test_1.Test("size 0", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        return Assertion_1.Assertion.that('empty tree size 0', tree.size() === 0);
    }));
    tests.add(new Test_1.Test("size 1", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that('tree 1 node size 1', tree.size() === 1);
    }));
    tests.add(new Test_1.Test("size 7", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        tree.insert(new ComparableNumber_1.ComparableNumber(2));
        tree.insert(new ComparableNumber_1.ComparableNumber(3));
        tree.insert(new ComparableNumber_1.ComparableNumber(5));
        tree.insert(new ComparableNumber_1.ComparableNumber(8));
        return Assertion_1.Assertion.that('tree size 7', tree.size() === 7);
    }));
    tests.add(new Test_1.Test("10 nodes height 9", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        for (var i = 1; i <= 10; i++) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        return Assertion_1.Assertion.that("height 9", tree.height() === 9, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));
    tests.add(new Test_1.Test("10 nodes height 3", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        [7, 4, 9, 2, 6, 8, 10, 1, 3, 5].forEach(function (n) { return tree.insert(new ComparableNumber_1.ComparableNumber(n)); });
        return Assertion_1.Assertion.that("height 3", tree.height() === 3, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));
    tests.forEach(function (test) { return test.run(); });
})();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test(name, fn) {
        this.name = name;
        this.fn = fn;
    }
    Test.prototype.run = function () {
        var testResult = this.fn().toTestResult();
        this.updateConsole(testResult.success, testResult.message, testResult.detail);
    };
    Test.prototype.updateConsole = function (isSuccess, message, detail) {
        var container = document.getElementById('consoleContainer');
        if (!isSuccess) {
            container.classList.add(Test.FAILURE_CONSOLE_CONTAINER_STYLE_CLASS);
        }
        var table = document.getElementById('console');
        var row = table.insertRow();
        var nameCell = row.insertCell();
        var resultCell = row.insertCell();
        var messageCell = row.insertCell();
        var detailCell = row.insertCell();
        nameCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS, Test.TEST_NAME_STYLE_CLASS);
        nameCell.innerHTML = this.name;
        resultCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        if (isSuccess) {
            resultCell.classList.add(Test.SUCCESS_STYLE_CLASS);
            resultCell.innerHTML = Test.SUCCESS_RESULT_MESSAGE;
        }
        else {
            resultCell.classList.add(Test.FAILURE_STYLE_CLASS);
            resultCell.innerHTML = Test.FAILURE_RESULT_MESSAGE;
        }
        messageCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        messageCell.innerHTML = message;
        detailCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        detailCell.innerHTML = detail;
    };
    Test.FAILURE_CONSOLE_CONTAINER_STYLE_CLASS = 'hasFailures';
    Test.CONSOLE_CELL_STYLE_CLASS = "consoleCell";
    Test.TEST_NAME_STYLE_CLASS = 'testName';
    Test.SUCCESS_STYLE_CLASS = 'passed';
    Test.FAILURE_STYLE_CLASS = 'failure';
    Test.SUCCESS_RESULT_MESSAGE = 'passed';
    Test.FAILURE_RESULT_MESSAGE = 'failure';
    return Test;
}());
exports.Test = Test;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Represents a number of results from unit tests
 */
var TestResult_1 = __webpack_require__(3);
var Assertion = /** @class */ (function () {
    function Assertion() {
        this.results = new Map();
        this.allSuccess = true;
        this.details = [];
    }
    Assertion.that = function (name, condition, detail) {
        var assertion = new Assertion();
        assertion.and(name, condition);
        if (detail) {
            assertion.details.push(detail);
        }
        return assertion;
    };
    Assertion.prototype.and = function (assertionName, condition, detail) {
        this.allSuccess = this.allSuccess && condition;
        this.results.set(assertionName, condition);
        if (detail) {
            this.details.push(detail);
        }
        return this;
    };
    Assertion.prototype.toString = function () {
        if (this.allSuccess) {
            return Assertion.ALL_PASSED
                .replace(/%n/, '' + this.results.size)
                .replace(/{s}/, this.results.size > 1 ? 's' : '');
        }
        return Assertion.FAILURES +
            Array.from(this.results)
                .filter(function (kv) { return kv[1] === false; })
                .map(function (kv) { return kv[0]; }).join(', ');
    };
    Assertion.prototype.toTestResult = function () {
        return new TestResult_1.TestResult(this.allSuccess, this.toString(), this.details.join(', '));
    };
    Assertion.ALL_PASSED = '%n assertion{s}';
    Assertion.FAILURES = 'Failed assertions: ';
    return Assertion;
}());
exports.Assertion = Assertion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
    Represents a result from a unit test
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TestResult = /** @class */ (function () {
    function TestResult(_success, _message, _detail) {
        this._success = _success;
        this._message = _message;
        this._detail = _detail;
    }
    Object.defineProperty(TestResult.prototype, "success", {
        get: function () {
            return this._success;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestResult.prototype, "message", {
        get: function () {
            return (this._message === undefined || this._message === null) ? '' : this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestResult.prototype, "detail", {
        get: function () {
            return (this._detail === undefined || this._detail === null) ? '' : this._detail;
        },
        enumerable: true,
        configurable: true
    });
    return TestResult;
}());
exports.TestResult = TestResult;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BinaererBaum_1 = __webpack_require__(5);
var BinaererSuchBaum = /** @class */ (function (_super) {
    __extends(BinaererSuchBaum, _super);
    function BinaererSuchBaum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinaererSuchBaum.prototype.insert = function (e) {
        var z = new BinaererBaum_1.Knoten(e);
        var y = null;
        var x = this.root;
        while (x !== null) {
            y = x;
            if (z.key.compareTo(x.key) < 0) {
                x = x.left;
            }
            else {
                x = x.right;
            }
        }
        z.p = y;
        if (y === null) {
            this.root = z;
        }
        else if (z.key.compareTo(y.key) < 0) {
            y.left = z;
        }
        else {
            y.right = z;
        }
    };
    BinaererSuchBaum.prototype.search = function (k) {
        return this.searchRecursive(this.root, k);
    };
    BinaererSuchBaum.prototype.searchRecursive = function (x, k) {
        if (x === null || !k) {
            return false;
        }
        else if (k.compareTo(x.key) === 0) {
            return true;
        }
        if (k.compareTo(x.key) < 0) {
            return this.searchRecursive(x.left, k);
        }
        else {
            return this.searchRecursive(x.right, k);
        }
    };
    return BinaererSuchBaum;
}(BinaererBaum_1.BinaererBaum));
exports.BinaererSuchBaum = BinaererSuchBaum;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BinaererBaum = /** @class */ (function () {
    function BinaererBaum() {
        this.root = null;
    }
    BinaererBaum.prototype.inorder = function () {
        return this.inorderRecursive(this.root).trim();
    };
    BinaererBaum.prototype.inorderRecursive = function (x) {
        var inorder = '';
        if (x !== null) {
            inorder += this.inorderRecursive(x.left);
            inorder += x.key + ' ';
            inorder += this.inorderRecursive(x.right);
        }
        return inorder;
    };
    BinaererBaum.prototype.height = function () {
        return this.heightRecursive(this.root);
    };
    BinaererBaum.prototype.heightRecursive = function (node) {
        var heightLeft = node.left === null ? 0 : 1 + this.heightRecursive(node.left);
        var heightRight = node.right === null ? 0 : 1 + this.heightRecursive(node.right);
        return heightLeft > heightRight ? heightLeft : heightRight;
    };
    BinaererBaum.prototype.size = function () {
        return this.sizeRecursive(this.root);
    };
    BinaererBaum.prototype.sizeRecursive = function (node) {
        if (node === null) {
            return 0;
        }
        else {
            var size = 1;
            size += this.sizeRecursive(node.left);
            size += this.sizeRecursive(node.right);
            return size;
        }
    };
    return BinaererBaum;
}());
exports.BinaererBaum = BinaererBaum;
var Knoten = /** @class */ (function () {
    function Knoten(key) {
        this._key = key;
        this.left = null;
        this.right = null;
        this.p = null;
    }
    Object.defineProperty(Knoten.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    return Knoten;
}());
exports.Knoten = Knoten;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComparableNumber = /** @class */ (function () {
    function ComparableNumber(num) {
        var _this = this;
        this.toString = function () {
            return '' + _this.num;
        };
        this.num = num;
    }
    ComparableNumber.prototype.compareTo = function (other) {
        return this.num < other.num ? -1 : this.num === other.num ? 0 : 1;
    };
    return ComparableNumber;
}());
exports.ComparableNumber = ComparableNumber;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDU3Y2IwNGY0NDE3ZGEyMmJiNTkiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9CaW5hZXJlckJhdW1UZXN0LnRzIiwid2VicGFjazovLy8uL3Rlc3QvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L0Fzc2VydGlvbi50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1Rlc3RSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JpbmFlcmVyU3VjaEJhdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JpbmFlcmVyQmF1bS50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L0NvbXBhcmFibGVOdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLG9DQUE0QjtBQUM1Qix5Q0FBc0M7QUFDdEMsZ0RBQXlEO0FBQ3pELGdEQUFvRDtBQUVwRDs7R0FFRztBQUNILENBQUM7SUFDRyxJQUFJLEtBQUssR0FBYyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRWpDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDbkMsSUFBSSxJQUFJLEdBQXVDLElBQUksbUNBQWdCLEVBQUUsQ0FBQztRQUN0RSxHQUFHLENBQUMsQ0FB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QztJQUVKLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3pCLElBQUksSUFBSSxHQUF1QyxJQUFJLG1DQUFnQixFQUFvQixDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxFQUFFO1FBQ3pCLElBQUksSUFBSSxHQUF1QyxJQUFJLG1DQUFnQixFQUFvQixDQUFDO1FBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lB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QUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVELHNCQUFJLHVCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNMLGFBQUM7QUFBRCxDQUFDO0FBaEJZLHdCQUFNOzs7Ozs7Ozs7O0FDL0NuQjtJQUdJLDBCQUFZLEdBQVc7UUFBdkIsaUJBRUM7UUFLTSxhQUFRLEdBQUc7WUFDZCxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsQ0FBQztRQVJHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsS0FBdUI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUtMLHVCQUFDO0FBQUQsQ0FBQztBQWJZLDRDQUFnQiIsImZpbGUiOiIuL2J1aWxkL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ1N2NiMDRmNDQxN2RhMjJiYjU5IiwiaW1wb3J0IHtUZXN0fSBmcm9tIFwiLi9UZXN0XCI7XG5pbXBvcnQge0Fzc2VydGlvbn0gZnJvbSBcIi4vQXNzZXJ0aW9uXCI7XG5pbXBvcnQge0JpbmFlcmVyU3VjaEJhdW19IGZyb20gXCIuLi9zcmMvQmluYWVyZXJTdWNoQmF1bVwiO1xuaW1wb3J0IHtDb21wYXJhYmxlTnVtYmVyfSBmcm9tIFwiLi9Db21wYXJhYmxlTnVtYmVyXCI7XG5cbi8qXG4gICAgVmFyaW91cyB0ZXN0IGZ1bmN0aW9ucyBmb3IgdGhlIHRyZWUgQURUIGV4ZXJjaXNlXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRlc3RzOiBTZXQ8VGVzdD4gPSBuZXcgU2V0KCk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJpbm9yZGVyIDEwIG5vZGVzXCIsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgdHJlZTogQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPiA9IG5ldyBCaW5hZXJlclN1Y2hCYXVtKCk7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxMDsgaSArPSAyKSB7XG4gICAgICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gOTsgaSA+PSAxOyBpIC09IDIpIHtcbiAgICAgICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKGkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBc3NlcnRpb24udGhhdCgndHJhdmVyc2UgdHJlZSBpbiBvcmRlcicsIHRyZWUuaW5vcmRlcigpID09PSAnMCAxIDIgMyA0IDUgNiA3IDggOScsIHRyZWUuaW5vcmRlcigpKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJzZWFyY2ggZW1wdHkgdHJlZVwiLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHRyZWU6IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4gPSBuZXcgQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPigpO1xuICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLnRoYXQoJ2tleSAwIG5vdCBpbiB0cmVlJywgIXRyZWUuc2VhcmNoKG5ldyBDb21wYXJhYmxlTnVtYmVyKDApKSk7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KFwic2VhcmNoIDEgbm9kZVwiLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHRyZWU6IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4gPSBuZXcgQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPigpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcigwKSk7XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KFwia2V5IGluIHRyZWVcIiwgdHJlZS5zZWFyY2gobmV3IENvbXBhcmFibGVOdW1iZXIoMCkpKVxuICAgICAgICAgICAgLmFuZChcImtleSBub3QgaW4gdHJlZVwiLCAhdHJlZS5zZWFyY2gobmV3IENvbXBhcmFibGVOdW1iZXIoMSkpKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJzZWFyY2ggMiBrZXlzIDUgbm9kZXNcIiwgKCk6IEFzc2VydGlvbiA9PiB7XG4gICAgICAgIGxldCB0cmVlOiBCaW5hZXJlclN1Y2hCYXVtPENvbXBhcmFibGVOdW1iZXI+ID0gbmV3IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4oKTtcbiAgICAgICAgdHJlZS5pbnNlcnQobmV3IENvbXBhcmFibGVOdW1iZXIoMCkpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcig4KSk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDIpKTtcbiAgICAgICAgdHJlZS5pbnNlcnQobmV3IENvbXBhcmFibGVOdW1iZXIoNCkpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcigzKSk7XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KFwia2V5IDggaW4gdHJlZVwiLCB0cmVlLnNlYXJjaChuZXcgQ29tcGFyYWJsZU51bWJlcig4KSkpXG4gICAgICAgICAgICAuYW5kKFwia2V5IDggaW4gdHJlZVwiLCB0cmVlLnNlYXJjaChuZXcgQ29tcGFyYWJsZU51bWJlcigyKSkpXG4gICAgICAgICAgICAuYW5kKFwia2V5IDEgbm90IGluIHRyZWVcIiwgIXRyZWUuc2VhcmNoKG5ldyBDb21wYXJhYmxlTnVtYmVyKDEpKSlcbiAgICAgICAgICAgIC5hbmQoXCJrZXkgNSBub3QgaW4gdHJlZVwiLCAhdHJlZS5zZWFyY2gobmV3IENvbXBhcmFibGVOdW1iZXIoNSkpKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJoZWlnaHQgMFwiLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHRyZWU6IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4gPSBuZXcgQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPigpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcigwKSk7XG4gICAgICAgIHJldHVybiBBc3NlcnRpb24udGhhdCgndHJlZSAxIG5vZGUgaGVpZ2h0IDAnLCB0cmVlLmhlaWdodCgpID09PSAwKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJoZWlnaHQgMVwiLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHRyZWU6IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4gPSBuZXcgQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPigpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcigwKSk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDEpKTtcblxuICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLnRoYXQoJ3RyZWUgMiBub2RlcyBoZWlnaHQgMScsIHRyZWUuaGVpZ2h0KCkgPT09IDEpO1xuICAgIH0pKTtcblxuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KFwic2l6ZSAwXCIsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgdHJlZTogQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPiA9IG5ldyBCaW5hZXJlclN1Y2hCYXVtPENvbXBhcmFibGVOdW1iZXI+KCk7XG4gICAgICAgIHJldHVybiBBc3NlcnRpb24udGhhdCgnZW1wdHkgdHJlZSBzaXplIDAnLCB0cmVlLnNpemUoKSA9PT0gMCk7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KFwic2l6ZSAxXCIsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgdHJlZTogQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPiA9IG5ldyBCaW5hZXJlclN1Y2hCYXVtPENvbXBhcmFibGVOdW1iZXI+KCk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDApKTtcbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KCd0cmVlIDEgbm9kZSBzaXplIDEnLCB0cmVlLnNpemUoKSA9PT0gMSk7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KFwic2l6ZSA3XCIsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgdHJlZTogQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPiA9IG5ldyBCaW5hZXJlclN1Y2hCYXVtPENvbXBhcmFibGVOdW1iZXI+KCk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDApKTtcbiAgICAgICAgdHJlZS5pbnNlcnQobmV3IENvbXBhcmFibGVOdW1iZXIoMSkpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcigxKSk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDIpKTtcbiAgICAgICAgdHJlZS5pbnNlcnQobmV3IENvbXBhcmFibGVOdW1iZXIoMykpO1xuICAgICAgICB0cmVlLmluc2VydChuZXcgQ29tcGFyYWJsZU51bWJlcig1KSk7XG4gICAgICAgIHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKDgpKTtcbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KCd0cmVlIHNpemUgNycsIHRyZWUuc2l6ZSgpID09PSA3KTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCIxMCBub2RlcyBoZWlnaHQgOVwiLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHRyZWU6IEJpbmFlcmVyU3VjaEJhdW08Q29tcGFyYWJsZU51bWJlcj4gPSBuZXcgQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPigpO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDw9IDEwOyBpKyspe1xuICAgICAgICAgICAgdHJlZS5pbnNlcnQobmV3IENvbXBhcmFibGVOdW1iZXIoaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KFwiaGVpZ2h0IDlcIiwgdHJlZS5oZWlnaHQoKSA9PT0gOSwgJ2hlaWdodDogJyArIHRyZWUuaGVpZ2h0KCkpXG4gICAgICAgICAgICAuYW5kKFwic2l6ZSAxMFwiLCB0cmVlLnNpemUoKSA9PT0gMTAsICdzaXplOiAnICsgdHJlZS5zaXplKCkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdChcIjEwIG5vZGVzIGhlaWdodCAzXCIsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgdHJlZTogQmluYWVyZXJTdWNoQmF1bTxDb21wYXJhYmxlTnVtYmVyPiA9IG5ldyBCaW5hZXJlclN1Y2hCYXVtPENvbXBhcmFibGVOdW1iZXI+KCk7XG4gICAgICAgIFs3LCA0LCA5LCAyLCA2LCA4LCAxMCwgMSwgMywgNV0uZm9yRWFjaChuID0+IHRyZWUuaW5zZXJ0KG5ldyBDb21wYXJhYmxlTnVtYmVyKG4pKSk7XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KFwiaGVpZ2h0IDNcIiwgdHJlZS5oZWlnaHQoKSA9PT0gMywgJ2hlaWdodDogJyArIHRyZWUuaGVpZ2h0KCkpXG4gICAgICAgICAgICAuYW5kKFwic2l6ZSAxMFwiLCB0cmVlLnNpemUoKSA9PT0gMTAsICdzaXplOiAnICsgdHJlZS5zaXplKCkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmZvckVhY2godGVzdCA9PiB0ZXN0LnJ1bigpKTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9CaW5hZXJlckJhdW1UZXN0LnRzIiwiLypcbiAgICBSZXByZXNlbnRzIGEgdW5pdCB0ZXN0XG4gKi9cbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSBcIi4vVGVzdFJlc3VsdFwiO1xuaW1wb3J0IHtBc3NlcnRpb259IGZyb20gXCIuL0Fzc2VydGlvblwiO1xuXG5leHBvcnQgY2xhc3MgVGVzdCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkFJTFVSRV9DT05TT0xFX0NPTlRBSU5FUl9TVFlMRV9DTEFTUzogc3RyaW5nID0gJ2hhc0ZhaWx1cmVzJztcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUzogc3RyaW5nID0gXCJjb25zb2xlQ2VsbFwiO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRFU1RfTkFNRV9TVFlMRV9DTEFTUzogc3RyaW5nID0gJ3Rlc3ROYW1lJztcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNVQ0NFU1NfU1RZTEVfQ0xBU1M6IHN0cmluZyA9ICdwYXNzZWQnO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZBSUxVUkVfU1RZTEVfQ0xBU1M6IHN0cmluZyA9ICdmYWlsdXJlJztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVUNDRVNTX1JFU1VMVF9NRVNTQUdFOiBzdHJpbmcgPSAncGFzc2VkJztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGQUlMVVJFX1JFU1VMVF9NRVNTQUdFOiBzdHJpbmcgPSAnZmFpbHVyZSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZywgcHJpdmF0ZSBmbjogKCkgPT4gQXNzZXJ0aW9uKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGVzdFJlc3VsdDogVGVzdFJlc3VsdCA9IHRoaXMuZm4oKS50b1Rlc3RSZXN1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zb2xlKHRlc3RSZXN1bHQuc3VjY2VzcywgdGVzdFJlc3VsdC5tZXNzYWdlLCB0ZXN0UmVzdWx0LmRldGFpbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb25zb2xlKGlzU3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBkZXRhaWw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGVDb250YWluZXInKTtcbiAgICAgICAgaWYoIWlzU3VjY2Vzcyl7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChUZXN0LkZBSUxVUkVfQ09OU09MRV9DT05UQUlORVJfU1RZTEVfQ0xBU1MpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSA8SFRNTFRhYmxlRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKTtcbiAgICAgICAgbGV0IHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICBsZXQgbmFtZUNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IHJlc3VsdENlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCBkZXRhaWxDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG5cbiAgICAgICAgbmFtZUNlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkNPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUywgVGVzdC5URVNUX05BTUVfU1RZTEVfQ0xBU1MpO1xuICAgICAgICBuYW1lQ2VsbC5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgcmVzdWx0Q2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuQ09OU09MRV9DRUxMX1NUWUxFX0NMQVNTKTtcblxuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXN1bHRDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5TVUNDRVNTX1NUWUxFX0NMQVNTKTtcbiAgICAgICAgICAgIHJlc3VsdENlbGwuaW5uZXJIVE1MID0gVGVzdC5TVUNDRVNTX1JFU1VMVF9NRVNTQUdFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0Q2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuRkFJTFVSRV9TVFlMRV9DTEFTUyk7XG4gICAgICAgICAgICByZXN1bHRDZWxsLmlubmVySFRNTCA9IFRlc3QuRkFJTFVSRV9SRVNVTFRfTUVTU0FHRTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2VDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5DT05TT0xFX0NFTExfU1RZTEVfQ0xBU1MpO1xuICAgICAgICBtZXNzYWdlQ2VsbC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXG4gICAgICAgIGRldGFpbENlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkNPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUyk7XG4gICAgICAgIGRldGFpbENlbGwuaW5uZXJIVE1MID0gZGV0YWlsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1Rlc3QudHMiLCIvKlxuICAgIFJlcHJlc2VudHMgYSBudW1iZXIgb2YgcmVzdWx0cyBmcm9tIHVuaXQgdGVzdHNcbiAqL1xuaW1wb3J0IHtUZXN0UmVzdWx0fSBmcm9tIFwiLi9UZXN0UmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBBc3NlcnRpb24ge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFMTF9QQVNTRUQ6IHN0cmluZyA9ICclbiBhc3NlcnRpb257c30nO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZBSUxVUkVTOiBzdHJpbmcgPSAnRmFpbGVkIGFzc2VydGlvbnM6ICc7XG5cbiAgICBwcml2YXRlIHJlc3VsdHM6IE1hcDxzdHJpbmcsIGJvb2xlYW4+O1xuICAgIHByaXZhdGUgYWxsU3VjY2VzczogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIHN0YXRpYyB0aGF0KG5hbWU6IHN0cmluZywgY29uZGl0aW9uOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiBBc3NlcnRpb24ge1xuICAgICAgICBsZXQgYXNzZXJ0aW9uOiBBc3NlcnRpb24gPSBuZXcgQXNzZXJ0aW9uKCk7XG4gICAgICAgIGFzc2VydGlvbi5hbmQobmFtZSwgY29uZGl0aW9uKTtcbiAgICAgICAgaWYgKGRldGFpbCkge1xuICAgICAgICAgICAgYXNzZXJ0aW9uLmRldGFpbHMucHVzaChkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3NlcnRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFsbFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5kKGFzc2VydGlvbk5hbWU6IHN0cmluZywgY29uZGl0aW9uOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiBBc3NlcnRpb24ge1xuICAgICAgICB0aGlzLmFsbFN1Y2Nlc3MgPSB0aGlzLmFsbFN1Y2Nlc3MgJiYgY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnJlc3VsdHMuc2V0KGFzc2VydGlvbk5hbWUsIGNvbmRpdGlvbik7XG4gICAgICAgIGlmIChkZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlscy5wdXNoKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5hbGxTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLkFMTF9QQVNTRURcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJW4vLCAnJyArIHRoaXMucmVzdWx0cy5zaXplKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC97c30vLCB0aGlzLnJlc3VsdHMuc2l6ZSA+IDEgPyAncycgOiAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLkZBSUxVUkVTICtcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5yZXN1bHRzKVxuICAgICAgICAgICAgLmZpbHRlcihrdiA9PiBrdlsxXSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAubWFwKGt2ID0+IGt2WzBdKS5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1Rlc3RSZXN1bHQoKTogVGVzdFJlc3VsdCB7XG4gICAgICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdCh0aGlzLmFsbFN1Y2Nlc3MsIHRoaXMudG9TdHJpbmcoKSwgdGhpcy5kZXRhaWxzLmpvaW4oJywgJykpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L0Fzc2VydGlvbi50cyIsIi8qXG4gICAgUmVwcmVzZW50cyBhIHJlc3VsdCBmcm9tIGEgdW5pdCB0ZXN0XG4gKi9cblxuZXhwb3J0IGNsYXNzIFRlc3RSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N1Y2Nlc3M6IGJvb2xlYW4sIHByaXZhdGUgX21lc3NhZ2U/OiBzdHJpbmcsIHByaXZhdGUgX2RldGFpbD86IHN0cmluZykge1xuICAgIH1cblxuICAgIGdldCBzdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VjY2VzcztcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuX21lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9tZXNzYWdlID09PSBudWxsKSA/ICcnIDogdGhpcy5fbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgZGV0YWlsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5fZGV0YWlsID09PSB1bmRlZmluZWQgfHwgdGhpcy5fZGV0YWlsID09PSBudWxsKSA/ICcnIDogdGhpcy5fZGV0YWlsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1Rlc3RSZXN1bHQudHMiLCJpbXBvcnQge0NvbXBhcmFibGV9IGZyb20gXCIuL0NvbXBhcmFibGVcIjtcbmltcG9ydCB7QmluYWVyZXJCYXVtLCBLbm90ZW59IGZyb20gXCIuL0JpbmFlcmVyQmF1bVwiO1xuXG5leHBvcnQgY2xhc3MgQmluYWVyZXJTdWNoQmF1bTxFIGV4dGVuZHMgQ29tcGFyYWJsZTxFPj4gZXh0ZW5kcyBCaW5hZXJlckJhdW08RT4ge1xuXG4gICAgcHVibGljIGluc2VydChlOiBFKTogdm9pZCB7XG4gICAgICAgIGxldCB6OiBLbm90ZW48RT4gPSBuZXcgS25vdGVuKGUpO1xuICAgICAgICBsZXQgeTogS25vdGVuPEU+ID0gbnVsbDtcbiAgICAgICAgbGV0IHg6IEtub3RlbjxFPiA9IHRoaXMucm9vdDtcblxuICAgICAgICB3aGlsZSAoeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgeSA9IHg7XG4gICAgICAgICAgICBpZiAoei5rZXkuY29tcGFyZVRvKHgua2V5KSA8IDApIHtcbiAgICAgICAgICAgICAgICB4ID0geC5sZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0geC5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHoucCA9IHk7XG4gICAgICAgIGlmICh5ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSB6O1xuICAgICAgICB9IGVsc2UgaWYgKHoua2V5LmNvbXBhcmVUbyh5LmtleSkgPCAwKSB7XG4gICAgICAgICAgICB5LmxlZnQgPSB6O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeS5yaWdodCA9IHo7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VhcmNoKGs6IEUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoUmVjdXJzaXZlKHRoaXMucm9vdCwgayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWFyY2hSZWN1cnNpdmUoeDogS25vdGVuPEU+LCBrOiBFKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh4ID09PSBudWxsIHx8ICFrKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoay5jb21wYXJlVG8oeC5rZXkpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrLmNvbXBhcmVUbyh4LmtleSkgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hSZWN1cnNpdmUoeC5sZWZ0LCBrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFJlY3Vyc2l2ZSh4LnJpZ2h0LCBrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQmluYWVyZXJTdWNoQmF1bS50cyIsImltcG9ydCB7Q29tcGFyYWJsZX0gZnJvbSBcIi4vQ29tcGFyYWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgQmluYWVyZXJCYXVtPEUgZXh0ZW5kcyBDb21wYXJhYmxlPEU+PiB7XG4gICAgcHJvdGVjdGVkIHJvb3Q6IEtub3RlbjxFPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbm9yZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlub3JkZXJSZWN1cnNpdmUodGhpcy5yb290KS50cmltKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbm9yZGVyUmVjdXJzaXZlKHg6IEtub3RlbjxFPik6IHN0cmluZyB7XG4gICAgICAgIGxldCBpbm9yZGVyOiBzdHJpbmcgPSAnJztcbiAgICAgICAgaWYgKHggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlub3JkZXIgKz0gdGhpcy5pbm9yZGVyUmVjdXJzaXZlKHgubGVmdCk7XG4gICAgICAgICAgICBpbm9yZGVyICs9IHgua2V5ICsgJyAnO1xuICAgICAgICAgICAgaW5vcmRlciArPSB0aGlzLmlub3JkZXJSZWN1cnNpdmUoeC5yaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlub3JkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHRSZWN1cnNpdmUodGhpcy5yb290KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhlaWdodFJlY3Vyc2l2ZShub2RlOiBLbm90ZW48RT4pOiBudW1iZXIge1xuICAgICAgICBsZXQgaGVpZ2h0TGVmdDogbnVtYmVyID0gbm9kZS5sZWZ0ID09PSBudWxsID8gMCA6IDEgKyB0aGlzLmhlaWdodFJlY3Vyc2l2ZShub2RlLmxlZnQpO1xuICAgICAgICBsZXQgaGVpZ2h0UmlnaHQ6IG51bWJlciA9IG5vZGUucmlnaHQgPT09IG51bGwgPyAwIDogMSArIHRoaXMuaGVpZ2h0UmVjdXJzaXZlKG5vZGUucmlnaHQpO1xuICAgICAgICByZXR1cm4gaGVpZ2h0TGVmdCA+IGhlaWdodFJpZ2h0ID8gaGVpZ2h0TGVmdCA6IGhlaWdodFJpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZVJlY3Vyc2l2ZSh0aGlzLnJvb3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2l6ZVJlY3Vyc2l2ZShub2RlOiBLbm90ZW48RT4pOiBudW1iZXJ7XG4gICAgICAgIGlmIChub2RlID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBzaXplOiBudW1iZXIgPSAxO1xuICAgICAgICAgICAgc2l6ZSArPSB0aGlzLnNpemVSZWN1cnNpdmUobm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIHNpemUgKz0gdGhpcy5zaXplUmVjdXJzaXZlKG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBLbm90ZW48VD4ge1xuICAgIHByaXZhdGUgX2tleTogVDtcbiAgICBwdWJsaWMgbGVmdDogS25vdGVuPFQ+O1xuICAgIHB1YmxpYyByaWdodDogS25vdGVuPFQ+O1xuICAgIHB1YmxpYyBwOiBLbm90ZW48VD47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IFQpIHtcbiAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQga2V5KCk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQmluYWVyZXJCYXVtLnRzIiwiaW1wb3J0IHtDb21wYXJhYmxlfSBmcm9tIFwiLi4vc3JjL0NvbXBhcmFibGVcIjtcblxuZXhwb3J0IGNsYXNzIENvbXBhcmFibGVOdW1iZXIgaW1wbGVtZW50cyBDb21wYXJhYmxlPENvbXBhcmFibGVOdW1iZXI+IHtcbiAgICBwcml2YXRlIG51bTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobnVtOiBudW1iZXIpe1xuICAgICAgICB0aGlzLm51bSA9IG51bTtcbiAgICB9XG4gICAgY29tcGFyZVRvKG90aGVyOiBDb21wYXJhYmxlTnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtIDwgb3RoZXIubnVtID8gLTEgOiB0aGlzLm51bSA9PT0gb3RoZXIubnVtID8gMCA6IDE7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gJycgKyB0aGlzLm51bTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9Db21wYXJhYmxlTnVtYmVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==