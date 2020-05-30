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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Exception that is thrown when trying to retrieve elements from an empty stack
 */
var EmptyStackException = /** @class */ (function () {
    function EmptyStackException(message) {
        this.message = this.constructor.name + ': ' + message;
    }
    EmptyStackException.prototype.getMessage = function () {
        return this.message;
    };
    return EmptyStackException;
}());
exports.EmptyStackException = EmptyStackException;


/***/ }),
/* 1 */
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
    TestResult.prototype.withDetail = function (detail) {
        this._detail = detail;
        return this;
    };
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = __webpack_require__(3);
var VerketteterStapel_1 = __webpack_require__(4);
var EmptyStackException_1 = __webpack_require__(0);
var EqString_1 = __webpack_require__(5);
var AssertionSet_1 = __webpack_require__(6);
var TestResult_1 = __webpack_require__(1);
/*
    Various test functions for the stack ADT exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test("top of empty stack", function () {
        var stack = new VerketteterStapel_1.VerketteterStapel();
        try {
            stack.top();
            return new TestResult_1.TestResult(false);
        }
        catch (exception) {
            return new TestResult_1.TestResult(exception instanceof EmptyStackException_1.EmptyStackException).withDetail(stack.toString());
        }
    }));
    tests.add(new Test_1.Test("push/top of stack 1 element", function () {
        var EXPECTED = 'Test';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        stack.push(new EqString_1.EqString(EXPECTED));
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.top();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.top();
                return true;
            }
            catch (exception) {
                return false;
            }
        });
        return assertions.toTestResult().withDetail(stack.toString());
    }));
    tests.add(new Test_1.Test("push/top of stack 5 elements", function () {
        var EXPECTED = 'Test 4';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 5; i++) {
            stack.push(new EqString_1.EqString("Test " + i));
        }
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.top();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.top();
                return true;
            }
            catch (exception) {
                return false;
            }
        });
        return assertions.toTestResult().withDetail(stack.toString());
    }));
    tests.add(new Test_1.Test("pop from empty stack", function () {
        var stack = new VerketteterStapel_1.VerketteterStapel();
        try {
            stack.pop();
            return new TestResult_1.TestResult(false);
        }
        catch (exception) {
            return new TestResult_1.TestResult(exception instanceof EmptyStackException_1.EmptyStackException).withDetail(stack.toString());
        }
    }));
    tests.add(new Test_1.Test("push/pop from stack 1 element", function () {
        var EXPECTED = 'Test';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        stack.push(new EqString_1.EqString(EXPECTED));
        var stackStr = stack.toString();
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.pop();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException_1.EmptyStackException;
            }
        });
        return assertions.toTestResult().withDetail(stackStr);
    }));
    tests.add(new Test_1.Test("push/pop from stack 6 elements", function () {
        var EXPECTED = 'Test %n';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 6; i++) {
            stack.push(new EqString_1.EqString("Test " + i));
        }
        var stackStr = stack.toString();
        var assertionSet = new AssertionSet_1.AssertionSet();
        var _loop_1 = function (i) {
            assertionSet.conjunct('pop stack element ' + i, function () {
                try {
                    var actual = stack.pop();
                    return actual.toString() === EXPECTED.replace(/%n/, '' + i);
                }
                catch (exception) {
                    return false;
                }
            });
        };
        for (var i = 5; i >= 0; i--) {
            _loop_1(i);
        }
        assertionSet.conjunct('stack empty', function () {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException_1.EmptyStackException;
            }
        });
        return assertionSet.toTestResult().withDetail(stackStr);
    }));
    tests.add(new Test_1.Test('empty stacks equal', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('empty stack not equal to not empty stack', function () {
        var assertions = new AssertionSet_1.AssertionSet();
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack1.push('Test');
        assertions.conjunct('left stack empty', function () { return !stack0.equals(stack1); });
        var stack2 = new VerketteterStapel_1.VerketteterStapel();
        var stack3 = new VerketteterStapel_1.VerketteterStapel();
        stack3.push('Test');
        assertions.conjunct('right stack empty', function () { return !stack2.equals(stack3); });
        return assertions.toTestResult();
    }));
    tests.add(new Test_1.Test('stacks equal 1 element', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack0.push(new EqString_1.EqString('Test'));
        stack1.push(new EqString_1.EqString('Test'));
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks not equal 1 element', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack0.push(new EqString_1.EqString('Test 0'));
        stack1.push(new EqString_1.EqString('Test 1'));
        return new TestResult_1.TestResult(!stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks equal 10 elements', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks not equal different size', function () {
        var assertions = new AssertionSet_1.AssertionSet();
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }
        stack1.push(new EqString_1.EqString('Test'));
        assertions.conjunct('left stack less elements', function () { return !stack0.equals(stack1); });
        var stack2 = new VerketteterStapel_1.VerketteterStapel();
        var stack3 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack2.push(value);
            stack3.push(value);
        }
        stack2.push(new EqString_1.EqString('Test'));
        assertions.conjunct('right stack less elements', function () { return !stack0.equals(stack1); });
        return assertions.toTestResult();
    }));
    tests.forEach(function (test) {
        test.run();
    });
})();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test(name, fn) {
        this.name = name;
        this.fn = fn;
    }
    Test.prototype.run = function () {
        var testResult = this.fn();
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmptyStackException_1 = __webpack_require__(0);
/*
    Implementation of the stack ADT backed by a linked list
 */
var VerketteterStapel = /** @class */ (function () {
    /*
        Constructs an empty stack
     */
    function VerketteterStapel() {
        this.head = null;
    }
    /*
        Returns the top element of the stack
     */
    VerketteterStapel.prototype.top = function () {
        if (this.head === null) {
            throw new EmptyStackException_1.EmptyStackException('Cannot retrieve top element');
        }
        return this.last().key;
    };
    /*
        Removes and returns the top element of the stack
     */
    VerketteterStapel.prototype.pop = function () {
        if (this.head === null) {
            throw new EmptyStackException_1.EmptyStackException('Cannot pop element');
        }
        var e = this.head;
        if (this.head.next === null) {
            this.head = null;
            return e.key;
        }
        var eTop;
        while (e.next !== null) {
            eTop = e;
            e = e.next;
        }
        eTop.next = null;
        return e.key;
    };
    /*
        Puts an element on top of the stack
     */
    VerketteterStapel.prototype.push = function (x) {
        var e = new Element(x);
        if (this.head === null) {
            this.head = e;
            return;
        }
        this.last().next = e;
    };
    VerketteterStapel.prototype.last = function () {
        var e = this.head;
        while (e.next !== null) {
            e = e.next;
        }
        return e;
    };
    /*
        Compares this stack to the other stack.
        Two stacks are considered equal if and only if
        - none of both is undefined or null
        - both stacks have the same number of elements
        - the 'key' properties of each two elements at the same position in the two stacks are
          equal according to their definition in the respective implementation of IEquivalence.
     */
    VerketteterStapel.prototype.equals = function (other) {
        if (other === undefined || other === null) {
            return false;
        }
        if (this.head === null && other.head !== null ||
            this.head !== null && other.head === null) {
            return false;
        }
        if (this.head === null && other.head === null) {
            return true;
        }
        var e0 = this.head;
        var e1 = other.head;
        do {
            if (!e0.key.equals(e1.key)) {
                return false;
            }
            e0 = e0.next;
            e1 = e1.next;
        } while (e0 !== null && e1 !== null);
        if (e0 !== null || e1 !== null) {
            return false;
        }
        return true;
    };
    /*
        Returns a string representation of the stack
     */
    VerketteterStapel.prototype.toString = function () {
        var str = '[';
        if (this.head !== null) {
            var e = this.head;
            str += e.key.toString();
            while (e.next !== null) {
                e = e.next;
                str += ', ' + e.key.toString();
            }
        }
        return str + ']';
    };
    return VerketteterStapel;
}());
exports.VerketteterStapel = VerketteterStapel;
/*
    Represents an element in a singly linked list
 */
var Element = /** @class */ (function () {
    function Element(key) {
        this.next = null;
        this.key = key;
    }
    return Element;
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EqString = /** @class */ (function () {
    function EqString(value) {
        this.value = value;
    }
    EqString.prototype.equals = function (other) {
        return this.value === other.value;
    };
    EqString.prototype.toString = function () {
        return this.value;
    };
    return EqString;
}());
exports.EqString = EqString;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Represents a number of results from unit tests
 */
var TestResult_1 = __webpack_require__(1);
var AssertionSet = /** @class */ (function () {
    function AssertionSet() {
        this.results = new Map();
        this.allSuccess = true;
    }
    AssertionSet.prototype.conjunct = function (assertionName, fn) {
        var isSuccess = fn();
        this.allSuccess = this.allSuccess && isSuccess;
        this.results.set(assertionName, isSuccess);
    };
    AssertionSet.prototype.toString = function () {
        if (this.allSuccess) {
            return AssertionSet.ALL_PASSED.replace(/%n/, '' + this.results.size);
        }
        var result = AssertionSet.FAILURES;
        this.results.forEach(function (value, key) {
            if (!value) {
                result += key + ' ';
            }
        });
        return result;
    };
    AssertionSet.prototype.toTestResult = function () {
        return new TestResult_1.TestResult(this.allSuccess, this.toString());
    };
    AssertionSet.ALL_PASSED = '%n assertions';
    AssertionSet.FAILURES = 'Failed assertions: ';
    return AssertionSet;
}());
exports.AssertionSet = AssertionSet;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWYyN2NhNjJjMDc5ZWFhMDY0NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VtcHR5U3RhY2tFeGNlcHRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9UZXN0UmVzdWx0LnRzIiwid2VicGFjazovLy8uL3Rlc3QvVmVya2V0dGV0ZXJTdGFwZWxUZXN0LnRzIiwid2VicGFjazovLy8uL3Rlc3QvVGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVmVya2V0dGV0ZXJTdGFwZWwudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9FcVN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L0Fzc2VydGlvblNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0dBRUc7QUFDSDtJQUdJLDZCQUFtQixPQUFlO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUMxRCxDQUFDO0lBRU0sd0NBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDO0FBVlksa0RBQW1COzs7Ozs7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QVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBVyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNULE1BQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLG1DQUFZLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFsQ3VCLHVCQUFVLEdBQVcsZUFBZSxDQUFDO0lBQ3JDLHFCQUFRLEdBQVcscUJBQXFCLENBQUM7SUFrQ3JFLG1CQUFDO0NBQUE7QUFwQ1ksb0NBQVkiLCJmaWxlIjoiLi9idWlsZC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZjI3Y2E2MmMwNzllYWEwNjQ0MiIsIi8qXG4gICAgRXhjZXB0aW9uIHRoYXQgaXMgdGhyb3duIHdoZW4gdHJ5aW5nIHRvIHJldHJpZXZlIGVsZW1lbnRzIGZyb20gYW4gZW1wdHkgc3RhY2tcbiAqL1xuZXhwb3J0IGNsYXNzIEVtcHR5U3RhY2tFeGNlcHRpb24ge1xuICAgIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnOiAnICsgbWVzc2FnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW1wdHlTdGFja0V4Y2VwdGlvbi50cyIsIi8qXG4gICAgUmVwcmVzZW50cyBhIHJlc3VsdCBmcm9tIGEgdW5pdCB0ZXN0XG4gKi9cblxuZXhwb3J0IGNsYXNzIFRlc3RSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N1Y2Nlc3M6IGJvb2xlYW4sIHByaXZhdGUgX21lc3NhZ2U/OiBzdHJpbmcsIHByaXZhdGUgX2RldGFpbD86IHN0cmluZykge1xuICAgIH1cblxuICAgIHB1YmxpYyB3aXRoRGV0YWlsKGRldGFpbDogc3RyaW5nKTogVGVzdFJlc3VsdCB7XG4gICAgICAgIHRoaXMuX2RldGFpbCA9IGRldGFpbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWNjZXNzO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5fbWVzc2FnZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX21lc3NhZ2UgPT09IG51bGwpID8gJycgOiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBkZXRhaWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9kZXRhaWwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kZXRhaWwgPT09IG51bGwpID8gJycgOiB0aGlzLl9kZXRhaWw7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvVGVzdFJlc3VsdC50cyIsImltcG9ydCB7VGVzdH0gZnJvbSBcIi4vVGVzdFwiO1xuaW1wb3J0IHtWZXJrZXR0ZXRlclN0YXBlbH0gZnJvbSBcIi4uL3NyYy9WZXJrZXR0ZXRlclN0YXBlbFwiO1xuaW1wb3J0IHtFbXB0eVN0YWNrRXhjZXB0aW9ufSBmcm9tIFwiLi4vc3JjL0VtcHR5U3RhY2tFeGNlcHRpb25cIjtcbmltcG9ydCB7RXFTdHJpbmd9IGZyb20gXCIuL0VxU3RyaW5nXCI7XG5pbXBvcnQge0Fzc2VydGlvblNldH0gZnJvbSBcIi4vQXNzZXJ0aW9uU2V0XCI7XG5pbXBvcnQge1Rlc3RSZXN1bHR9IGZyb20gXCIuL1Rlc3RSZXN1bHRcIjtcblxuLypcbiAgICBWYXJpb3VzIHRlc3QgZnVuY3Rpb25zIGZvciB0aGUgc3RhY2sgQURUIGV4ZXJjaXNlXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRlc3RzOiBTZXQ8VGVzdD4gPSBuZXcgU2V0KCk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoXCJ0b3Agb2YgZW1wdHkgc3RhY2tcIiwgKCk6IFRlc3RSZXN1bHQgPT4ge1xuICAgICAgICBsZXQgc3RhY2s6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhY2sudG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRlc3RSZXN1bHQoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdChleGNlcHRpb24gaW5zdGFuY2VvZiBFbXB0eVN0YWNrRXhjZXB0aW9uKS53aXRoRGV0YWlsKHN0YWNrLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KFwicHVzaC90b3Agb2Ygc3RhY2sgMSBlbGVtZW50XCIsICgpOiBUZXN0UmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgRVhQRUNURUQgPSAnVGVzdCc7XG4gICAgICAgIGxldCBzdGFjazogVmVya2V0dGV0ZXJTdGFwZWw8RXFTdHJpbmc+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG4gICAgICAgIHN0YWNrLnB1c2gobmV3IEVxU3RyaW5nKEVYUEVDVEVEKSk7XG5cbiAgICAgICAgbGV0IGFzc2VydGlvbnM6IEFzc2VydGlvblNldCA9IG5ldyBBc3NlcnRpb25TZXQoKTtcblxuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KFwidG9wIGVsZW1lbnRcIiwgKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgbGV0IGFjdHVhbCA9IHN0YWNrLnRvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdHVhbC50b1N0cmluZygpID09PSBFWFBFQ1RFRFxuICAgICAgICB9KTtcblxuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KCdzdGFjayBlbXB0eScsICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RhY2sudG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXNzZXJ0aW9ucy50b1Rlc3RSZXN1bHQoKS53aXRoRGV0YWlsKHN0YWNrLnRvU3RyaW5nKCkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdChcInB1c2gvdG9wIG9mIHN0YWNrIDUgZWxlbWVudHNcIiwgKCk6IFRlc3RSZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBFWFBFQ1RFRCA9ICdUZXN0IDQnO1xuICAgICAgICBsZXQgc3RhY2s6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXcgRXFTdHJpbmcoXCJUZXN0IFwiICsgaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2VydGlvbnM6IEFzc2VydGlvblNldCA9IG5ldyBBc3NlcnRpb25TZXQoKTtcblxuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KFwidG9wIGVsZW1lbnRcIiwgKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgbGV0IGFjdHVhbCA9IHN0YWNrLnRvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdHVhbC50b1N0cmluZygpID09PSBFWFBFQ1RFRFxuICAgICAgICB9KTtcblxuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KCdzdGFjayBlbXB0eScsICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RhY2sudG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXNzZXJ0aW9ucy50b1Rlc3RSZXN1bHQoKS53aXRoRGV0YWlsKHN0YWNrLnRvU3RyaW5nKCkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdChcInBvcCBmcm9tIGVtcHR5IHN0YWNrXCIsICgpOiBUZXN0UmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IHN0YWNrOiBWZXJrZXR0ZXRlclN0YXBlbDxFcVN0cmluZz4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXN0UmVzdWx0KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFRlc3RSZXN1bHQoZXhjZXB0aW9uIGluc3RhbmNlb2YgRW1wdHlTdGFja0V4Y2VwdGlvbikud2l0aERldGFpbChzdGFjay50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdChcInB1c2gvcG9wIGZyb20gc3RhY2sgMSBlbGVtZW50XCIsICgpOiBUZXN0UmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgRVhQRUNURUQgPSAnVGVzdCc7XG4gICAgICAgIGxldCBzdGFjazogVmVya2V0dGV0ZXJTdGFwZWw8RXFTdHJpbmc+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG4gICAgICAgIHN0YWNrLnB1c2gobmV3IEVxU3RyaW5nKEVYUEVDVEVEKSk7XG4gICAgICAgIGxldCBzdGFja1N0cjogc3RyaW5nID0gc3RhY2sudG9TdHJpbmcoKTtcblxuICAgICAgICBsZXQgYXNzZXJ0aW9uczogQXNzZXJ0aW9uU2V0ID0gbmV3IEFzc2VydGlvblNldCgpO1xuXG4gICAgICAgIGFzc2VydGlvbnMuY29uanVuY3QoXCJ0b3AgZWxlbWVudFwiLCAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0dWFsID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gYWN0dWFsLnRvU3RyaW5nKCkgPT09IEVYUEVDVEVEXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFzc2VydGlvbnMuY29uanVuY3QoJ3N0YWNrIGVtcHR5JywgKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEVtcHR5U3RhY2tFeGNlcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhc3NlcnRpb25zLnRvVGVzdFJlc3VsdCgpLndpdGhEZXRhaWwoc3RhY2tTdHIpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdChcInB1c2gvcG9wIGZyb20gc3RhY2sgNiBlbGVtZW50c1wiLCAoKTogVGVzdFJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IEVYUEVDVEVEID0gJ1Rlc3QgJW4nO1xuICAgICAgICBsZXQgc3RhY2s6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXcgRXFTdHJpbmcoXCJUZXN0IFwiICsgaSkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFja1N0cjogc3RyaW5nID0gc3RhY2sudG9TdHJpbmcoKTtcblxuICAgICAgICBsZXQgYXNzZXJ0aW9uU2V0OiBBc3NlcnRpb25TZXQgPSBuZXcgQXNzZXJ0aW9uU2V0KCk7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBhc3NlcnRpb25TZXQuY29uanVuY3QoJ3BvcCBzdGFjayBlbGVtZW50ICcgKyBpLCAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdHVhbCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0dWFsLnRvU3RyaW5nKCkgPT09IEVYUEVDVEVELnJlcGxhY2UoLyVuLywgJycgKyBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnRpb25TZXQuY29uanVuY3QoJ3N0YWNrIGVtcHR5JywgKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEVtcHR5U3RhY2tFeGNlcHRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhc3NlcnRpb25TZXQudG9UZXN0UmVzdWx0KCkud2l0aERldGFpbChzdGFja1N0cik7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KCdlbXB0eSBzdGFja3MgZXF1YWwnLCAoKTogVGVzdFJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBzdGFjazA6IFZlcmtldHRldGVyU3RhcGVsPGFueT4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcbiAgICAgICAgbGV0IHN0YWNrMTogVmVya2V0dGV0ZXJTdGFwZWw8YW55PiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdChzdGFjazAuZXF1YWxzKHN0YWNrMSkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdCgnZW1wdHkgc3RhY2sgbm90IGVxdWFsIHRvIG5vdCBlbXB0eSBzdGFjaycsICgpOiBUZXN0UmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IGFzc2VydGlvbnM6IEFzc2VydGlvblNldCA9IG5ldyBBc3NlcnRpb25TZXQoKTtcblxuICAgICAgICBsZXQgc3RhY2swOiBWZXJrZXR0ZXRlclN0YXBlbDxhbnk+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG4gICAgICAgIGxldCBzdGFjazE6IFZlcmtldHRldGVyU3RhcGVsPGFueT4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcbiAgICAgICAgc3RhY2sxLnB1c2goJ1Rlc3QnKTtcbiAgICAgICAgYXNzZXJ0aW9ucy5jb25qdW5jdCgnbGVmdCBzdGFjayBlbXB0eScsICgpOiBib29sZWFuID0+ICFzdGFjazAuZXF1YWxzKHN0YWNrMSkpO1xuXG4gICAgICAgIGxldCBzdGFjazI6IFZlcmtldHRldGVyU3RhcGVsPGFueT4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcbiAgICAgICAgbGV0IHN0YWNrMzogVmVya2V0dGV0ZXJTdGFwZWw8YW55PiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICBzdGFjazMucHVzaCgnVGVzdCcpO1xuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KCdyaWdodCBzdGFjayBlbXB0eScsICgpOiBib29sZWFuID0+ICFzdGFjazIuZXF1YWxzKHN0YWNrMykpO1xuXG4gICAgICAgIHJldHVybiBhc3NlcnRpb25zLnRvVGVzdFJlc3VsdCgpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdCgnc3RhY2tzIGVxdWFsIDEgZWxlbWVudCcsICgpOiBUZXN0UmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IHN0YWNrMDogVmVya2V0dGV0ZXJTdGFwZWw8RXFTdHJpbmc+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG4gICAgICAgIGxldCBzdGFjazE6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuXG4gICAgICAgIHN0YWNrMC5wdXNoKG5ldyBFcVN0cmluZygnVGVzdCcpKTtcbiAgICAgICAgc3RhY2sxLnB1c2gobmV3IEVxU3RyaW5nKCdUZXN0JykpO1xuXG4gICAgICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdChzdGFjazAuZXF1YWxzKHN0YWNrMSkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdCgnc3RhY2tzIG5vdCBlcXVhbCAxIGVsZW1lbnQnLCAoKTogVGVzdFJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBzdGFjazA6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICBsZXQgc3RhY2sxOiBWZXJrZXR0ZXRlclN0YXBlbDxFcVN0cmluZz4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcblxuICAgICAgICBzdGFjazAucHVzaChuZXcgRXFTdHJpbmcoJ1Rlc3QgMCcpKTtcbiAgICAgICAgc3RhY2sxLnB1c2gobmV3IEVxU3RyaW5nKCdUZXN0IDEnKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBUZXN0UmVzdWx0KCFzdGFjazAuZXF1YWxzKHN0YWNrMSkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdCgnc3RhY2tzIGVxdWFsIDEwIGVsZW1lbnRzJywgKCk6IFRlc3RSZXN1bHQgPT4ge1xuICAgICAgICBsZXQgc3RhY2swOiBWZXJrZXR0ZXRlclN0YXBlbDxFcVN0cmluZz4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcbiAgICAgICAgbGV0IHN0YWNrMTogVmVya2V0dGV0ZXJTdGFwZWw8RXFTdHJpbmc+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG5cbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgdmFsdWU6IEVxU3RyaW5nID0gbmV3IEVxU3RyaW5nKCcnICsgaSk7XG4gICAgICAgICAgICBzdGFjazAucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICBzdGFjazEucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFRlc3RSZXN1bHQoc3RhY2swLmVxdWFscyhzdGFjazEpKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoJ3N0YWNrcyBub3QgZXF1YWwgZGlmZmVyZW50IHNpemUnLCAoKTogVGVzdFJlc3VsdCA9PiB7XG4gICAgICAgIGxldCBhc3NlcnRpb25zOiBBc3NlcnRpb25TZXQgPSBuZXcgQXNzZXJ0aW9uU2V0KCk7XG5cbiAgICAgICAgbGV0IHN0YWNrMDogVmVya2V0dGV0ZXJTdGFwZWw8RXFTdHJpbmc+ID0gbmV3IFZlcmtldHRldGVyU3RhcGVsKCk7XG4gICAgICAgIGxldCBzdGFjazE6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgbGV0IHZhbHVlOiBFcVN0cmluZyA9IG5ldyBFcVN0cmluZygnJyArIGkpO1xuICAgICAgICAgICAgc3RhY2swLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgc3RhY2sxLnB1c2godmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhY2sxLnB1c2gobmV3IEVxU3RyaW5nKCdUZXN0JykpO1xuXG4gICAgICAgIGFzc2VydGlvbnMuY29uanVuY3QoJ2xlZnQgc3RhY2sgbGVzcyBlbGVtZW50cycsICgpOiBib29sZWFuID0+ICFzdGFjazAuZXF1YWxzKHN0YWNrMSkpO1xuXG4gICAgICAgIGxldCBzdGFjazI6IFZlcmtldHRldGVyU3RhcGVsPEVxU3RyaW5nPiA9IG5ldyBWZXJrZXR0ZXRlclN0YXBlbCgpO1xuICAgICAgICBsZXQgc3RhY2szOiBWZXJrZXR0ZXRlclN0YXBlbDxFcVN0cmluZz4gPSBuZXcgVmVya2V0dGV0ZXJTdGFwZWwoKTtcblxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogRXFTdHJpbmcgPSBuZXcgRXFTdHJpbmcoJycgKyBpKTtcbiAgICAgICAgICAgIHN0YWNrMi5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHN0YWNrMy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YWNrMi5wdXNoKG5ldyBFcVN0cmluZygnVGVzdCcpKTtcblxuICAgICAgICBhc3NlcnRpb25zLmNvbmp1bmN0KCdyaWdodCBzdGFjayBsZXNzIGVsZW1lbnRzJywgKCk6IGJvb2xlYW4gPT4gIXN0YWNrMC5lcXVhbHMoc3RhY2sxKSk7XG5cbiAgICAgICAgcmV0dXJuIGFzc2VydGlvbnMudG9UZXN0UmVzdWx0KCk7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuZm9yRWFjaCh0ZXN0ID0+IHtcbiAgICAgICAgdGVzdC5ydW4oKTtcbiAgICB9KTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9WZXJrZXR0ZXRlclN0YXBlbFRlc3QudHMiLCIvKlxuICAgIFJlcHJlc2VudHMgYSB1bml0IHRlc3RcbiAqL1xuaW1wb3J0IHtUZXN0UmVzdWx0fSBmcm9tIFwiLi9UZXN0UmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXN0IHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGQUlMVVJFX0NPTlNPTEVfQ09OVEFJTkVSX1NUWUxFX0NMQVNTOiBzdHJpbmcgPSAnaGFzRmFpbHVyZXMnO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ09OU09MRV9DRUxMX1NUWUxFX0NMQVNTOiBzdHJpbmcgPSBcImNvbnNvbGVDZWxsXCI7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEVTVF9OQU1FX1NUWUxFX0NMQVNTOiBzdHJpbmcgPSAndGVzdE5hbWUnO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VDQ0VTU19TVFlMRV9DTEFTUzogc3RyaW5nID0gJ3Bhc3NlZCc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkFJTFVSRV9TVFlMRV9DTEFTUzogc3RyaW5nID0gJ2ZhaWx1cmUnO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNVQ0NFU1NfUkVTVUxUX01FU1NBR0U6IHN0cmluZyA9ICdwYXNzZWQnO1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZBSUxVUkVfUkVTVUxUX01FU1NBR0U6IHN0cmluZyA9ICdmYWlsdXJlJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nLCBwcml2YXRlIGZuOiAoKSA9PiBUZXN0UmVzdWx0KSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGVzdFJlc3VsdDogVGVzdFJlc3VsdCA9IHRoaXMuZm4oKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb25zb2xlKHRlc3RSZXN1bHQuc3VjY2VzcywgdGVzdFJlc3VsdC5tZXNzYWdlLCB0ZXN0UmVzdWx0LmRldGFpbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb25zb2xlKGlzU3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBkZXRhaWw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IDxIVE1MRGl2RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGVDb250YWluZXInKTtcbiAgICAgICAgaWYoIWlzU3VjY2Vzcyl7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChUZXN0LkZBSUxVUkVfQ09OU09MRV9DT05UQUlORVJfU1RZTEVfQ0xBU1MpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSA8SFRNTFRhYmxlRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKTtcbiAgICAgICAgbGV0IHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICBsZXQgbmFtZUNlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IHJlc3VsdENlbGw6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgICAgbGV0IG1lc3NhZ2VDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCBkZXRhaWxDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG5cbiAgICAgICAgbmFtZUNlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkNPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUywgVGVzdC5URVNUX05BTUVfU1RZTEVfQ0xBU1MpO1xuICAgICAgICBuYW1lQ2VsbC5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgcmVzdWx0Q2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuQ09OU09MRV9DRUxMX1NUWUxFX0NMQVNTKTtcblxuICAgICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXN1bHRDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5TVUNDRVNTX1NUWUxFX0NMQVNTKTtcbiAgICAgICAgICAgIHJlc3VsdENlbGwuaW5uZXJIVE1MID0gVGVzdC5TVUNDRVNTX1JFU1VMVF9NRVNTQUdFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0Q2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuRkFJTFVSRV9TVFlMRV9DTEFTUyk7XG4gICAgICAgICAgICByZXN1bHRDZWxsLmlubmVySFRNTCA9IFRlc3QuRkFJTFVSRV9SRVNVTFRfTUVTU0FHRTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2VDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5DT05TT0xFX0NFTExfU1RZTEVfQ0xBU1MpO1xuICAgICAgICBtZXNzYWdlQ2VsbC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXG4gICAgICAgIGRldGFpbENlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkNPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUyk7XG4gICAgICAgIGRldGFpbENlbGwuaW5uZXJIVE1MID0gZGV0YWlsO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L1Rlc3QudHMiLCJpbXBvcnQge0lTdGFwZWx9IGZyb20gXCIuL0lTdGFwZWxcIjtcbmltcG9ydCB7RW1wdHlTdGFja0V4Y2VwdGlvbn0gZnJvbSBcIi4vRW1wdHlTdGFja0V4Y2VwdGlvblwiO1xuaW1wb3J0IHtJRXF1aXZhbGVuY2V9IGZyb20gXCIuL0lFcXVpdmFsZW5jZVwiO1xuXG4vKlxuICAgIEltcGxlbWVudGF0aW9uIG9mIHRoZSBzdGFjayBBRFQgYmFja2VkIGJ5IGEgbGlua2VkIGxpc3RcbiAqL1xuZXhwb3J0IGNsYXNzIFZlcmtldHRldGVyU3RhcGVsPEUgZXh0ZW5kcyBJRXF1aXZhbGVuY2U+IGltcGxlbWVudHMgSVN0YXBlbDxFPiwgSUVxdWl2YWxlbmNlIHtcbiAgICBwcml2YXRlIGhlYWQ6IEVsZW1lbnQ8RT47XG5cbiAgICAvKlxuICAgICAgICBDb25zdHJ1Y3RzIGFuIGVtcHR5IHN0YWNrXG4gICAgICovXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgdGhlIHRvcCBlbGVtZW50IG9mIHRoZSBzdGFja1xuICAgICAqL1xuICAgIHB1YmxpYyB0b3AoKTogRSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFbXB0eVN0YWNrRXhjZXB0aW9uKCdDYW5ub3QgcmV0cmlldmUgdG9wIGVsZW1lbnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3QoKS5rZXk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlcyBhbmQgcmV0dXJucyB0aGUgdG9wIGVsZW1lbnQgb2YgdGhlIHN0YWNrXG4gICAgICovXG4gICAgcHVibGljIHBvcCgpOiBFIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVtcHR5U3RhY2tFeGNlcHRpb24oJ0Nhbm5vdCBwb3AgZWxlbWVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGU6IEVsZW1lbnQ8RT4gPSB0aGlzLmhlYWQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWQubmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBlLmtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlVG9wOiBFbGVtZW50PEU+O1xuICAgICAgICB3aGlsZSAoZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlVG9wID0gZTtcbiAgICAgICAgICAgIGUgPSBlLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZVRvcC5uZXh0ID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gZS5rZXk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUHV0cyBhbiBlbGVtZW50IG9uIHRvcCBvZiB0aGUgc3RhY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgcHVzaCh4OiBFKTogdm9pZCB7XG4gICAgICAgIGxldCBlOiBFbGVtZW50PEU+ID0gbmV3IEVsZW1lbnQoeCk7XG4gICAgICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3QoKS5uZXh0ID0gZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxhc3QoKTogRWxlbWVudDxFPiB7XG4gICAgICAgIGxldCBlOiBFbGVtZW50PEU+ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSAoZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlID0gZS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIENvbXBhcmVzIHRoaXMgc3RhY2sgdG8gdGhlIG90aGVyIHN0YWNrLlxuICAgICAgICBUd28gc3RhY2tzIGFyZSBjb25zaWRlcmVkIGVxdWFsIGlmIGFuZCBvbmx5IGlmXG4gICAgICAgIC0gbm9uZSBvZiBib3RoIGlzIHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgIC0gYm90aCBzdGFja3MgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgZWxlbWVudHNcbiAgICAgICAgLSB0aGUgJ2tleScgcHJvcGVydGllcyBvZiBlYWNoIHR3byBlbGVtZW50cyBhdCB0aGUgc2FtZSBwb3NpdGlvbiBpbiB0aGUgdHdvIHN0YWNrcyBhcmVcbiAgICAgICAgICBlcXVhbCBhY2NvcmRpbmcgdG8gdGhlaXIgZGVmaW5pdGlvbiBpbiB0aGUgcmVzcGVjdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBJRXF1aXZhbGVuY2UuXG4gICAgICovXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogVmVya2V0dGV0ZXJTdGFwZWw8RT4pOiBib29sZWFue1xuICAgICAgICBpZihvdGhlciA9PT0gdW5kZWZpbmVkIHx8IG90aGVyID09PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaGVhZCA9PT0gbnVsbCAmJiBvdGhlci5oZWFkICE9PSBudWxsIHx8XG4gICAgICAgICAgICB0aGlzLmhlYWQgIT09IG51bGwgJiYgb3RoZXIuaGVhZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmhlYWQgPT09IG51bGwgJiYgb3RoZXIuaGVhZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlMDogRWxlbWVudDxFPiA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IGUxOiBFbGVtZW50PEU+ID0gb3RoZXIuaGVhZDtcblxuICAgICAgICBkb3tcbiAgICAgICAgICAgIGlmKCFlMC5rZXkuZXF1YWxzKGUxLmtleSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZTAgPSBlMC5uZXh0O1xuICAgICAgICAgICAgZTEgPSBlMS5uZXh0O1xuICAgICAgICB9d2hpbGUoZTAgIT09IG51bGwgJiYgZTEgIT09IG51bGwpO1xuXG4gICAgICAgIGlmKGUwICE9PSBudWxsIHx8IGUxICE9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YWNrXG4gICAgICovXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBzdHI6IHN0cmluZyA9ICdbJztcbiAgICAgICAgaWYgKHRoaXMuaGVhZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGU6IEVsZW1lbnQ8RT4gPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICBzdHIgKz0gZS5rZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHdoaWxlIChlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlID0gZS5uZXh0O1xuICAgICAgICAgICAgICAgIHN0ciArPSAnLCAnICsgZS5rZXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyICsgJ10nO1xuICAgIH1cbn1cblxuLypcbiAgICBSZXByZXNlbnRzIGFuIGVsZW1lbnQgaW4gYSBzaW5nbHkgbGlua2VkIGxpc3RcbiAqL1xuY2xhc3MgRWxlbWVudDxFPiB7XG4gICAgbmV4dDogRWxlbWVudDxFPjtcbiAgICBrZXk6IEU7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IEUpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WZXJrZXR0ZXRlclN0YXBlbC50cyIsIi8qXG4gICAgQSBzdHJpbmcgdGhhdCBjYW4gYmUgdGVzdGVkIGZvciBlcXVpdmFsZW5jZSB0byBhbm90aGVyIHN0cmluZ1xuICAgIHVzaW5nIHRoZSAnZXF1YWxzJyBtZXRob2QuXG4gKi9cbmltcG9ydCB7SUVxdWl2YWxlbmNlfSBmcm9tIFwiLi4vc3JjL0lFcXVpdmFsZW5jZVwiO1xuXG5leHBvcnQgY2xhc3MgRXFTdHJpbmcgaW1wbGVtZW50cyBJRXF1aXZhbGVuY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgZXF1YWxzKG90aGVyOiBFcVN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gb3RoZXIudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXN0L0VxU3RyaW5nLnRzIiwiLypcbiAgICBSZXByZXNlbnRzIGEgbnVtYmVyIG9mIHJlc3VsdHMgZnJvbSB1bml0IHRlc3RzXG4gKi9cbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSBcIi4vVGVzdFJlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgQXNzZXJ0aW9uU2V0IHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBTExfUEFTU0VEOiBzdHJpbmcgPSAnJW4gYXNzZXJ0aW9ucyc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkFJTFVSRVM6IHN0cmluZyA9ICdGYWlsZWQgYXNzZXJ0aW9uczogJztcblxuICAgIHByaXZhdGUgcmVzdWx0czogTWFwPHN0cmluZywgYm9vbGVhbj47XG4gICAgcHJpdmF0ZSBhbGxTdWNjZXNzOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hbGxTdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uanVuY3QoYXNzZXJ0aW9uTmFtZTogc3RyaW5nLCBmbjogKCkgPT4gYm9vbGVhbikge1xuICAgICAgICBsZXQgaXNTdWNjZXNzOiBib29sZWFuID0gZm4oKTtcbiAgICAgICAgdGhpcy5hbGxTdWNjZXNzID0gdGhpcy5hbGxTdWNjZXNzICYmIGlzU3VjY2VzcztcbiAgICAgICAgdGhpcy5yZXN1bHRzLnNldChhc3NlcnRpb25OYW1lLCBpc1N1Y2Nlc3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5hbGxTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gQXNzZXJ0aW9uU2V0LkFMTF9QQVNTRUQucmVwbGFjZSgvJW4vLCAnJyArIHRoaXMucmVzdWx0cy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IEFzc2VydGlvblNldC5GQUlMVVJFUztcbiAgICAgICAgdGhpcy5yZXN1bHRzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0ga2V5ICsgJyAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyB0b1Rlc3RSZXN1bHQoKTogVGVzdFJlc3VsdCB7XG4gICAgICAgIHJldHVybiBuZXcgVGVzdFJlc3VsdCh0aGlzLmFsbFN1Y2Nlc3MsIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvQXNzZXJ0aW9uU2V0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==