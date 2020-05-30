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
//# sourceMappingURL=EmptyStackException.js.map