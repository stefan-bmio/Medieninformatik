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
//# sourceMappingURL=ComparableNumber.js.map