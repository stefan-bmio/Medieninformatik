"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyStackException_1 = require("./EmptyStackException");
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
//# sourceMappingURL=VerketteterStapel.js.map