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
var Spieler_1 = __webpack_require__(4);
/*
    Various test functions for the hash function exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test('name 11', function () {
        var spieler = new Spieler_1.Spieler("11", 0);
        return Assertion_1.Assertion.that('name hash code', spieler.hashCode() === 1568, '' + spieler.hashCode());
    }));
    tests.add(new Test_1.Test('1000 points', function () {
        var spieler = new Spieler_1.Spieler("", 1000);
        return Assertion_1.Assertion.that('points hash code', spieler.hashCode() === 1000, '' + spieler.hashCode());
    }));
    tests.add(new Test_1.Test('equal players', function () {
        var spieler0 = new Spieler_1.Spieler('test name', 0);
        var spieler1 = new Spieler_1.Spieler('test name', 0);
        return Assertion_1.Assertion.that('equals', spieler0.equals(spieler1))
            .and('hash codes match', spieler0.hashCode() === spieler1.hashCode());
    }));
    tests.add(new Test_1.Test('unequal players', function () {
        var spieler0 = new Spieler_1.Spieler('name 0', 0);
        var spieler1 = new Spieler_1.Spieler('name 0', 1);
        var spieler2 = new Spieler_1.Spieler('name 1', 1);
        return Assertion_1.Assertion.that('hash code 0 & 1', spieler0.hashCode() != spieler1.hashCode())
            .and('hash code 0 & 2', spieler0.hashCode() != spieler2.hashCode())
            .and('hash code 1 & 2', spieler1.hashCode() != spieler2.hashCode())
            .and('equals 0 & 1', !spieler0.equals(spieler1))
            .and('equals 0 & 2', !spieler0.equals(spieler2))
            .and('equals 1 & 2', !spieler1.equals(spieler2));
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
            return this.formatCount(Assertion.ALL_PASSED);
        }
        var failures = Array.from(this.results).filter(function (kv) { return kv[1] === false; });
        return failures.length + '/' + this.formatCount(Assertion.FAILURES) +
            failures.map(function (kv) { return kv[0]; }).join(', ');
    };
    Assertion.prototype.formatCount = function (message, count) {
        if (count !== undefined) {
            message = count + '/' + message;
        }
        return message.replace(/%n/, '' + this.results.size)
            .replace(/{s}/, this.results.size > 1 ? 's' : '');
    };
    Assertion.prototype.toTestResult = function () {
        return new TestResult_1.TestResult(this.allSuccess, this.toString(), this.details.join(', '));
    };
    Assertion.ALL_PASSED = '%n assertion{s}';
    Assertion.FAILURES = '%n failed assertion{s}: ';
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

Object.defineProperty(exports, "__esModule", { value: true });
var Spieler = /** @class */ (function () {
    function Spieler(name, points) {
        this.name = name;
        this.points = points;
    }
    Spieler.prototype.equals = function (other) {
        if (!(other instanceof Spieler)) {
            return false;
        }
        var spieler = other;
        return this.name === other.name && this.points === other.points;
    };
    Spieler.prototype.hashCode = function () {
        var hash = this.points;
        for (var i = 0; i < this.name.length; i++) {
            hash *= 31;
            hash += this.name.charCodeAt(i);
        }
        return hash;
    };
    return Spieler;
}());
exports.Spieler = Spieler;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWU4NzQxZDM1OWZlMWQxMGY5NTAiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9TcGllbGVyVGVzdC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0L1Rlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9Bc3NlcnRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9UZXN0UmVzdWx0LnRzIiwid2VicGFjazovLy8uL3NyYy9TcGllbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQSxvQ0FBNEI7QUFDNUIseUNBQXNDO0FBQ3RDLHVDQUF1QztBQUV2Qzs7R0FFRztBQUNILENBQUM7SUFDRyxJQUFJLEtBQUssR0FBYyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRWpDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLElBQUksT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksV0FBSSxDQUFDLGFBQWEsRUFBRTtRQUM5QixJQUFJLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFdBQUksQ0FBQyxlQUFlLEVBQUU7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLFFBQVEsR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRCxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksV0FBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ2xDLElBQUksUUFBUSxHQUFHLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXhDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2xFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2xFLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVKLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxHQUFHLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7O0FDcENMO0lBV0ksY0FBb0IsSUFBWSxFQUFVLEVBQW1CO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFpQjtJQUU3RCxDQUFDO0lBRU0sa0JBQUcsR0FBVjtRQUNJLElBQUksVUFBVSxHQUFlLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVPLDRCQUFhLEdBQXJCLFVBQXNCLFNBQWtCLEVBQUUsT0FBZSxFQUFFLE1BQWM7UUFDckUsSUFBSSxTQUFTLEdBQW9DLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RixFQUFFLEVBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNYLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQXdDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEYsSUFBSSxHQUFHLEdBQXdCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRCxJQUFJLFFBQVEsR0FBeUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RELElBQUksVUFBVSxHQUF5QixHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDeEQsSUFBSSxXQUFXLEdBQXlCLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6RCxJQUFJLFVBQVUsR0FBeUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXhELFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNsRixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFL0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFeEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZELENBQUM7UUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN6RCxXQUFXLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUVoQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RCxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBbER1QiwwQ0FBcUMsR0FBVyxhQUFhLENBQUM7SUFFOUQsNkJBQXdCLEdBQVcsYUFBYSxDQUFDO0lBQ2pELDBCQUFxQixHQUFXLFVBQVUsQ0FBQztJQUUzQyx3QkFBbUIsR0FBVyxRQUFRLENBQUM7SUFDdkMsd0JBQW1CLEdBQVcsU0FBUyxDQUFDO0lBQ3hDLDJCQUFzQixHQUFXLFFBQVEsQ0FBQztJQUMxQywyQkFBc0IsR0FBVyxTQUFTLENBQUM7SUEyQ3ZFLFdBQUM7Q0FBQTtBQXBEWSxvQkFBSTs7Ozs7Ozs7OztBQ05qQjs7R0FFRztBQUNILDBDQUF3QztBQUV4QztJQWlCSTtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBYmEsY0FBSSxHQUFsQixVQUFtQixJQUFZLEVBQUUsU0FBa0IsRUFBRSxNQUFlO1FBQ2hFLElBQUksU0FBUyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDM0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFRTSx1QkFBRyxHQUFWLFVBQVcsYUFBcUIsRUFBRSxTQUFrQixFQUFFLE1BQWU7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTyw0QkFBUSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQUUsSUFBSSxTQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDL0QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFFLElBQUksU0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sK0JBQVcsR0FBbkIsVUFBb0IsT0FBZSxFQUFFLEtBQWM7UUFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQy9DLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBbkR1QixvQkFBVSxHQUFXLGlCQUFpQixDQUFDO0lBQ3ZDLGtCQUFRLEdBQVcsMEJBQTBCLENBQUM7SUFtRDFFLGdCQUFDO0NBQUE7QUFyRFksOEJBQVM7Ozs7Ozs7OztBQ0x0Qjs7R0FFRzs7QUFFSDtJQUNJLG9CQUFvQixRQUFpQixFQUFVLFFBQWlCLEVBQVUsT0FBZ0I7UUFBdEUsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQzFGLENBQUM7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQWZZLGdDQUFVOzs7Ozs7Ozs7O0FDSnZCO0lBQ0ksaUJBQW9CLElBQVksRUFBVSxNQUFjO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRXhELENBQUM7SUFFTSx3QkFBTSxHQUFiLFVBQWMsS0FBVTtRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxJQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDcEUsQ0FBQztJQUVNLDBCQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1gsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQXRCWSwwQkFBTyIsImZpbGUiOiIuL2J1aWxkL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDllODc0MWQzNTlmZTFkMTBmOTUwIiwiaW1wb3J0IHtUZXN0fSBmcm9tIFwiLi9UZXN0XCI7XG5pbXBvcnQge0Fzc2VydGlvbn0gZnJvbSBcIi4vQXNzZXJ0aW9uXCI7XG5pbXBvcnQge1NwaWVsZXJ9IGZyb20gXCIuLi9zcmMvU3BpZWxlclwiO1xuXG4vKlxuICAgIFZhcmlvdXMgdGVzdCBmdW5jdGlvbnMgZm9yIHRoZSBoYXNoIGZ1bmN0aW9uIGV4ZXJjaXNlXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRlc3RzOiBTZXQ8VGVzdD4gPSBuZXcgU2V0KCk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoJ25hbWUgMTEnLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHNwaWVsZXI6IFNwaWVsZXIgPSBuZXcgU3BpZWxlcihcIjExXCIsIDApO1xuICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLnRoYXQoJ25hbWUgaGFzaCBjb2RlJywgc3BpZWxlci5oYXNoQ29kZSgpID09PSAxNTY4LCAnJyArIHNwaWVsZXIuaGFzaENvZGUoKSk7XG4gICAgfSkpO1xuXG4gICAgdGVzdHMuYWRkKG5ldyBUZXN0KCcxMDAwIHBvaW50cycsICgpOiBBc3NlcnRpb24gPT4ge1xuICAgICAgICBsZXQgc3BpZWxlcjogU3BpZWxlciA9IG5ldyBTcGllbGVyKFwiXCIsIDEwMDApO1xuICAgICAgICByZXR1cm4gQXNzZXJ0aW9uLnRoYXQoJ3BvaW50cyBoYXNoIGNvZGUnLCBzcGllbGVyLmhhc2hDb2RlKCkgPT09IDEwMDAsICcnICsgc3BpZWxlci5oYXNoQ29kZSgpKTtcbiAgICB9KSk7XG5cbiAgICB0ZXN0cy5hZGQobmV3IFRlc3QoJ2VxdWFsIHBsYXllcnMnLCAoKTogQXNzZXJ0aW9uID0+IHtcbiAgICAgICAgbGV0IHNwaWVsZXIwID0gbmV3IFNwaWVsZXIoJ3Rlc3QgbmFtZScsIDApO1xuICAgICAgICBsZXQgc3BpZWxlcjEgPSBuZXcgU3BpZWxlcigndGVzdCBuYW1lJywgMCk7XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KCdlcXVhbHMnLCBzcGllbGVyMC5lcXVhbHMoc3BpZWxlcjEpKVxuICAgICAgICAgICAgLmFuZCgnaGFzaCBjb2RlcyBtYXRjaCcsIHNwaWVsZXIwLmhhc2hDb2RlKCkgPT09IHNwaWVsZXIxLmhhc2hDb2RlKCkpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmFkZChuZXcgVGVzdCgndW5lcXVhbCBwbGF5ZXJzJywgKCk6IEFzc2VydGlvbiA9PiB7XG4gICAgICAgIGxldCBzcGllbGVyMCA9IG5ldyBTcGllbGVyKCduYW1lIDAnLCAwKTtcbiAgICAgICAgbGV0IHNwaWVsZXIxID0gbmV3IFNwaWVsZXIoJ25hbWUgMCcsIDEpO1xuICAgICAgICBsZXQgc3BpZWxlcjIgPSBuZXcgU3BpZWxlcignbmFtZSAxJywgMSk7XG5cbiAgICAgICAgcmV0dXJuIEFzc2VydGlvbi50aGF0KCdoYXNoIGNvZGUgMCAmIDEnLCBzcGllbGVyMC5oYXNoQ29kZSgpICE9IHNwaWVsZXIxLmhhc2hDb2RlKCkpXG4gICAgICAgICAgICAuYW5kKCdoYXNoIGNvZGUgMCAmIDInLCBzcGllbGVyMC5oYXNoQ29kZSgpICE9IHNwaWVsZXIyLmhhc2hDb2RlKCkpXG4gICAgICAgICAgICAuYW5kKCdoYXNoIGNvZGUgMSAmIDInLCBzcGllbGVyMS5oYXNoQ29kZSgpICE9IHNwaWVsZXIyLmhhc2hDb2RlKCkpXG4gICAgICAgICAgICAuYW5kKCdlcXVhbHMgMCAmIDEnLCAhc3BpZWxlcjAuZXF1YWxzKHNwaWVsZXIxKSlcbiAgICAgICAgICAgIC5hbmQoJ2VxdWFscyAwICYgMicsICFzcGllbGVyMC5lcXVhbHMoc3BpZWxlcjIpKVxuICAgICAgICAgICAgLmFuZCgnZXF1YWxzIDEgJiAyJywgIXNwaWVsZXIxLmVxdWFscyhzcGllbGVyMikpO1xuICAgIH0pKTtcblxuICAgIHRlc3RzLmZvckVhY2godGVzdCA9PiB0ZXN0LnJ1bigpKTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9TcGllbGVyVGVzdC50cyIsIi8qXG4gICAgUmVwcmVzZW50cyBhIHVuaXQgdGVzdFxuICovXG5pbXBvcnQge1Rlc3RSZXN1bHR9IGZyb20gXCIuL1Rlc3RSZXN1bHRcIjtcbmltcG9ydCB7QXNzZXJ0aW9ufSBmcm9tIFwiLi9Bc3NlcnRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFRlc3Qge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZBSUxVUkVfQ09OU09MRV9DT05UQUlORVJfU1RZTEVfQ0xBU1M6IHN0cmluZyA9ICdoYXNGYWlsdXJlcyc7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBDT05TT0xFX0NFTExfU1RZTEVfQ0xBU1M6IHN0cmluZyA9IFwiY29uc29sZUNlbGxcIjtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBURVNUX05BTUVfU1RZTEVfQ0xBU1M6IHN0cmluZyA9ICd0ZXN0TmFtZSc7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTVUNDRVNTX1NUWUxFX0NMQVNTOiBzdHJpbmcgPSAncGFzc2VkJztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGQUlMVVJFX1NUWUxFX0NMQVNTOiBzdHJpbmcgPSAnZmFpbHVyZSc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VDQ0VTU19SRVNVTFRfTUVTU0FHRTogc3RyaW5nID0gJ3Bhc3NlZCc7XG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRkFJTFVSRV9SRVNVTFRfTUVTU0FHRTogc3RyaW5nID0gJ2ZhaWx1cmUnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lOiBzdHJpbmcsIHByaXZhdGUgZm46ICgpID0+IEFzc2VydGlvbikge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRlc3RSZXN1bHQ6IFRlc3RSZXN1bHQgPSB0aGlzLmZuKCkudG9UZXN0UmVzdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29uc29sZSh0ZXN0UmVzdWx0LnN1Y2Nlc3MsIHRlc3RSZXN1bHQubWVzc2FnZSwgdGVzdFJlc3VsdC5kZXRhaWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29uc29sZShpc1N1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgZGV0YWlsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlQ29udGFpbmVyJyk7XG4gICAgICAgIGlmKCFpc1N1Y2Nlc3Mpe1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoVGVzdC5GQUlMVVJFX0NPTlNPTEVfQ09OVEFJTkVSX1NUWUxFX0NMQVNTKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gPEhUTUxUYWJsZUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJyk7XG4gICAgICAgIGxldCByb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgbGV0IG5hbWVDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCByZXN1bHRDZWxsOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCBtZXNzYWdlQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgICBsZXQgZGV0YWlsQ2VsbDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuXG4gICAgICAgIG5hbWVDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5DT05TT0xFX0NFTExfU1RZTEVfQ0xBU1MsIFRlc3QuVEVTVF9OQU1FX1NUWUxFX0NMQVNTKTtcbiAgICAgICAgbmFtZUNlbGwuaW5uZXJIVE1MID0gdGhpcy5uYW1lO1xuXG4gICAgICAgIHJlc3VsdENlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkNPTlNPTEVfQ0VMTF9TVFlMRV9DTEFTUyk7XG5cbiAgICAgICAgaWYgKGlzU3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzdWx0Q2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuU1VDQ0VTU19TVFlMRV9DTEFTUyk7XG4gICAgICAgICAgICByZXN1bHRDZWxsLmlubmVySFRNTCA9IFRlc3QuU1VDQ0VTU19SRVNVTFRfTUVTU0FHRTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdENlbGwuY2xhc3NMaXN0LmFkZChUZXN0LkZBSUxVUkVfU1RZTEVfQ0xBU1MpO1xuICAgICAgICAgICAgcmVzdWx0Q2VsbC5pbm5lckhUTUwgPSBUZXN0LkZBSUxVUkVfUkVTVUxUX01FU1NBR0U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlQ2VsbC5jbGFzc0xpc3QuYWRkKFRlc3QuQ09OU09MRV9DRUxMX1NUWUxFX0NMQVNTKTtcbiAgICAgICAgbWVzc2FnZUNlbGwuaW5uZXJIVE1MID0gbWVzc2FnZTtcblxuICAgICAgICBkZXRhaWxDZWxsLmNsYXNzTGlzdC5hZGQoVGVzdC5DT05TT0xFX0NFTExfU1RZTEVfQ0xBU1MpO1xuICAgICAgICBkZXRhaWxDZWxsLmlubmVySFRNTCA9IGRldGFpbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGVzdC9UZXN0LnRzIiwiLypcbiAgICBSZXByZXNlbnRzIGEgbnVtYmVyIG9mIHJlc3VsdHMgZnJvbSB1bml0IHRlc3RzXG4gKi9cbmltcG9ydCB7VGVzdFJlc3VsdH0gZnJvbSBcIi4vVGVzdFJlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgQXNzZXJ0aW9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBTExfUEFTU0VEOiBzdHJpbmcgPSAnJW4gYXNzZXJ0aW9ue3N9JztcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBGQUlMVVJFUzogc3RyaW5nID0gJyVuIGZhaWxlZCBhc3NlcnRpb257c306ICc7XG5cbiAgICBwcml2YXRlIHJlc3VsdHM6IE1hcDxzdHJpbmcsIGJvb2xlYW4+O1xuICAgIHByaXZhdGUgYWxsU3VjY2VzczogYm9vbGVhbjtcbiAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZ1tdO1xuXG4gICAgcHVibGljIHN0YXRpYyB0aGF0KG5hbWU6IHN0cmluZywgY29uZGl0aW9uOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiBBc3NlcnRpb24ge1xuICAgICAgICBsZXQgYXNzZXJ0aW9uOiBBc3NlcnRpb24gPSBuZXcgQXNzZXJ0aW9uKCk7XG4gICAgICAgIGFzc2VydGlvbi5hbmQobmFtZSwgY29uZGl0aW9uKTtcbiAgICAgICAgaWYgKGRldGFpbCkge1xuICAgICAgICAgICAgYXNzZXJ0aW9uLmRldGFpbHMucHVzaChkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3NlcnRpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFsbFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5kKGFzc2VydGlvbk5hbWU6IHN0cmluZywgY29uZGl0aW9uOiBib29sZWFuLCBkZXRhaWw/OiBzdHJpbmcpOiBBc3NlcnRpb24ge1xuICAgICAgICB0aGlzLmFsbFN1Y2Nlc3MgPSB0aGlzLmFsbFN1Y2Nlc3MgJiYgY29uZGl0aW9uO1xuICAgICAgICB0aGlzLnJlc3VsdHMuc2V0KGFzc2VydGlvbk5hbWUsIGNvbmRpdGlvbik7XG4gICAgICAgIGlmIChkZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlscy5wdXNoKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5hbGxTdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRDb3VudChBc3NlcnRpb24uQUxMX1BBU1NFRCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmFpbHVyZXMgPSBBcnJheS5mcm9tKHRoaXMucmVzdWx0cykuZmlsdGVyKGt2ID0+IGt2WzFdID09PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiBmYWlsdXJlcy5sZW5ndGggKyAnLycgKyB0aGlzLmZvcm1hdENvdW50KEFzc2VydGlvbi5GQUlMVVJFUykgK1xuICAgICAgICAgICAgZmFpbHVyZXMubWFwKGt2ID0+IGt2WzBdKS5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9ybWF0Q291bnQobWVzc2FnZTogc3RyaW5nLCBjb3VudD86IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gY291bnQgKyAnLycgKyBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLyVuLywgJycgKyB0aGlzLnJlc3VsdHMuc2l6ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC97c30vLCB0aGlzLnJlc3VsdHMuc2l6ZSA+IDEgPyAncycgOiAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvVGVzdFJlc3VsdCgpOiBUZXN0UmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZXN0UmVzdWx0KHRoaXMuYWxsU3VjY2VzcywgdGhpcy50b1N0cmluZygpLCB0aGlzLmRldGFpbHMuam9pbignLCAnKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvQXNzZXJ0aW9uLnRzIiwiLypcbiAgICBSZXByZXNlbnRzIGEgcmVzdWx0IGZyb20gYSB1bml0IHRlc3RcbiAqL1xuXG5leHBvcnQgY2xhc3MgVGVzdFJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3VjY2VzczogYm9vbGVhbiwgcHJpdmF0ZSBfbWVzc2FnZT86IHN0cmluZywgcHJpdmF0ZSBfZGV0YWlsPzogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgZ2V0IHN1Y2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWNjZXNzO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAodGhpcy5fbWVzc2FnZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX21lc3NhZ2UgPT09IG51bGwpID8gJycgOiB0aGlzLl9tZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBkZXRhaWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9kZXRhaWwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl9kZXRhaWwgPT09IG51bGwpID8gJycgOiB0aGlzLl9kZXRhaWw7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Rlc3QvVGVzdFJlc3VsdC50cyIsImV4cG9ydCBjbGFzcyBTcGllbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZywgcHJpdmF0ZSBwb2ludHM6IG51bWJlcikge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGVxdWFscyhvdGhlcjogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU3BpZWxlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGllbGVyOiBTcGllbGVyID0gb3RoZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG90aGVyLm5hbWUgJiYgdGhpcy5wb2ludHMgPT09IG90aGVyLnBvaW50cztcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzaENvZGUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGhhc2ggPSB0aGlzLnBvaW50cztcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaGFzaCAqPSAzMTtcbiAgICAgICAgICAgIGhhc2ggKz0gdGhpcy5uYW1lLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TcGllbGVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==