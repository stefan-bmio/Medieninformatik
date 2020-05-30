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
    /**
     * Implementation like in Java (Javadoc) for easy comparison of the results.
     *
     * @returns {number} the computed hash code of this Spieler object
     */
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
//# sourceMappingURL=Spieler.js.map