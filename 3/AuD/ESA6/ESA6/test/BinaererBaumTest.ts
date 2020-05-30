import {Test} from "./Test";
import {Assertion} from "./Assertion";
import {BinaererSuchBaum} from "../src/BinaererSuchBaum";
import {ComparableNumber} from "./ComparableNumber";

/*
    Various test functions for the tree ADT exercise
 */
(function () {
    let tests: Set<Test> = new Set();

    tests.add(new Test("inorder 10 nodes", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum();
        for (let i: number = 0; i < 10; i += 2) {
            tree.insert(new ComparableNumber(i));
        }
        for (let i: number = 9; i >= 1; i -= 2) {
            tree.insert(new ComparableNumber(i));
        }

        return Assertion.that('traverse tree in order', tree.inorder() === '0 1 2 3 4 5 6 7 8 9', tree.inorder());
    }));

    tests.add(new Test("search empty tree", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        return Assertion.that('key 0 not in tree', !tree.search(new ComparableNumber(0)));
    }));

    tests.add(new Test("search 1 node", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));

        return Assertion.that("key in tree", tree.search(new ComparableNumber(0)))
            .and("key not in tree", !tree.search(new ComparableNumber(1)));
    }));

    tests.add(new Test("search 2 keys 5 nodes", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));
        tree.insert(new ComparableNumber(8));
        tree.insert(new ComparableNumber(2));
        tree.insert(new ComparableNumber(4));
        tree.insert(new ComparableNumber(3));

        return Assertion.that("key 8 in tree", tree.search(new ComparableNumber(8)))
            .and("key 8 in tree", tree.search(new ComparableNumber(2)))
            .and("key 1 not in tree", !tree.search(new ComparableNumber(1)))
            .and("key 5 not in tree", !tree.search(new ComparableNumber(5)));
    }));

    tests.add(new Test("height 0", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));
        return Assertion.that('tree 1 node height 0', tree.height() === 0);
    }));

    tests.add(new Test("height 1", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));
        tree.insert(new ComparableNumber(1));

        return Assertion.that('tree 2 nodes height 1', tree.height() === 1);
    }));


    tests.add(new Test("size 0", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        return Assertion.that('empty tree size 0', tree.size() === 0);
    }));

    tests.add(new Test("size 1", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));
        return Assertion.that('tree 1 node size 1', tree.size() === 1);
    }));

    tests.add(new Test("size 7", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        tree.insert(new ComparableNumber(0));
        tree.insert(new ComparableNumber(1));
        tree.insert(new ComparableNumber(1));
        tree.insert(new ComparableNumber(2));
        tree.insert(new ComparableNumber(3));
        tree.insert(new ComparableNumber(5));
        tree.insert(new ComparableNumber(8));
        return Assertion.that('tree size 7', tree.size() === 7);
    }));

    tests.add(new Test("10 nodes height 9", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        for (let i: number = 1; i <= 10; i++){
            tree.insert(new ComparableNumber(i));
        }

        return Assertion.that("height 9", tree.height() === 9, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));

    tests.add(new Test("10 nodes height 3", (): Assertion => {
        let tree: BinaererSuchBaum<ComparableNumber> = new BinaererSuchBaum<ComparableNumber>();
        [7, 4, 9, 2, 6, 8, 10, 1, 3, 5].forEach(n => tree.insert(new ComparableNumber(n)));

        return Assertion.that("height 3", tree.height() === 3, 'height: ' + tree.height())
            .and("size 10", tree.size() === 10, 'size: ' + tree.size());
    }));

    tests.forEach(test => test.run());
})();