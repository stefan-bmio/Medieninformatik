"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Represents a number of results from unit tests
 */
var TestResult_1 = require("./TestResult");
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
//# sourceMappingURL=Assertion.js.map