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
//# sourceMappingURL=TestResult.js.map