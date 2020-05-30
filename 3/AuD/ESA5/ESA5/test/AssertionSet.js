"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Represents a number of results from unit tests
 */
var TestResult_1 = require("./TestResult");
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
//# sourceMappingURL=AssertionSet.js.map