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
var BinaererBaum_1 = require("./BinaererBaum");
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
//# sourceMappingURL=BinaererSuchBaum.js.map