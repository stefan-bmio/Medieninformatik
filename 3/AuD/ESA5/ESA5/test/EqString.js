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
//# sourceMappingURL=EqString.js.map