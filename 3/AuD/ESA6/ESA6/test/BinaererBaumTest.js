"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = require("./Test");
var Assertion_1 = require("./Assertion");
var BinaererSuchBaum_1 = require("../src/BinaererSuchBaum");
var ComparableNumber_1 = require("./ComparableNumber");
/*
    Various test functions for the tree ADT exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test("inorder 10 nodes", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        for (var i = 0; i < 10; i += 2) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        for (var i = 9; i >= 1; i -= 2) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        return Assertion_1.Assertion.that('traverse tree in order', tree.inorder() === '0 1 2 3 4 5 6 7 8 9', tree.inorder());
    }));
    tests.add(new Test_1.Test("search empty tree", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        return Assertion_1.Assertion.that('key 0 not in tree', !tree.search(new ComparableNumber_1.ComparableNumber(0)));
    }));
    tests.add(new Test_1.Test("search 1 node", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that("key in tree", tree.search(new ComparableNumber_1.ComparableNumber(0)))
            .and("key not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(1)));
    }));
    tests.add(new Test_1.Test("search 2 keys 5 nodes", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(8));
        tree.insert(new ComparableNumber_1.ComparableNumber(2));
        tree.insert(new ComparableNumber_1.ComparableNumber(4));
        tree.insert(new ComparableNumber_1.ComparableNumber(3));
        return Assertion_1.Assertion.that("key 8 in tree", tree.search(new ComparableNumber_1.ComparableNumber(8)))
            .and("key 8 in tree", tree.search(new ComparableNumber_1.ComparableNumber(2)))
            .and("key 1 not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(1)))
            .and("key 5 not in tree", !tree.search(new ComparableNumber_1.ComparableNumber(5)));
    }));
    tests.add(new Test_1.Test("height 0", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that('tree 1 node height 0', tree.height() === 0);
    }));
    tests.add(new Test_1.Test("height 1", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        return Assertion_1.Assertion.that('tree 2 nodes height 1', tree.height() === 1);
    }));
    tests.add(new Test_1.Test("size 0", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        return Assertion_1.Assertion.that('empty tree size 0', tree.size() === 0);
    }));
    tests.add(new Test_1.Test("size 1", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        return Assertion_1.Assertion.that('tree 1 node size 1', tree.size() === 1);
    }));
    tests.add(new Test_1.Test("size 7", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        tree.insert(new ComparableNumber_1.ComparableNumber(0));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        tree.insert(new ComparableNumber_1.ComparableNumber(1));
        tree.insert(new ComparableNumber_1.ComparableNumber(2));
        tree.insert(new ComparableNumber_1.ComparableNumber(3));
        tree.insert(new ComparableNumber_1.ComparableNumber(5));
        tree.insert(new ComparableNumber_1.ComparableNumber(8));
        return Assertion_1.Assertion.that('tree size 7', tree.size() === 7);
    }));
    tests.add(new Test_1.Test("10 nodes height 9", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        for (var i = 1; i <= 10; i++) {
            tree.insert(new ComparableNumber_1.ComparableNumber(i));
        }
        return Assertion_1.Assertion.that("height 9", tree.height() === 9, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));
    tests.add(new Test_1.Test("10 nodes height 3", function () {
        var tree = new BinaererSuchBaum_1.BinaererSuchBaum();
        [7, 4, 9, 2, 6, 8, 10, 1, 3, 5].forEach(function (n) { return tree.insert(new ComparableNumber_1.ComparableNumber(n)); });
        return Assertion_1.Assertion.that("height 3", tree.height() === 3, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));
    tests.forEach(function (test) { return test.run(); });
})();
//# sourceMappingURL=BinaererBaumTest.js.map