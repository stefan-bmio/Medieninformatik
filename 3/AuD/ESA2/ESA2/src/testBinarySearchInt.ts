import { BinarySearch } from './binarySearch';

export function testInt(){
    let tests: Set<() => boolean> = new Set();
    tests.add(testEmptyIntArray);
    tests.add(testElementInIntArrayLength1);
    tests.add(testElementNotInIntArrayLength1);
    tests.add(testElementInIntArrayPosition1Length5);
    tests.add(testElementInIntArrayPosition5Length5);
    tests.add(testElementInIntArrayPosition3Length5);
    tests.add(testElementNotInIntArrayLength5);

    tests.forEach((fn) => {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}
function testEmptyIntArray(){
    const EXPECTED: number = 0;
    let actual: number = BinarySearch.binarySearchInt([], 1);
    return EXPECTED === actual;
}

function testElementInIntArrayLength1(){
    const EXPECTED: number = 1;
    let actual: number = BinarySearch.binarySearchInt([1], 1);
    return EXPECTED === actual;
}

function testElementNotInIntArrayLength1(){
    const EXPECTED: number = 0;
    let actual: number = BinarySearch.binarySearchInt([1], 2);
    return EXPECTED === actual;
}

function testElementInIntArrayPosition1Length5(){
    const EXPECTED: number = 1;
    let actual: number = BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 3);
    return EXPECTED === actual;
}

function testElementInIntArrayPosition5Length5(){
    const EXPECTED: number = 5;
    let actual: number = BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 21);
    return EXPECTED === actual;
}

function testElementInIntArrayPosition3Length5(){
    const EXPECTED: number = 3;
    let actual: number = BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 8);
    return EXPECTED === actual;
}

function testElementNotInIntArrayLength5(){
    const EXPECTED: number = 0;
    let actual: number = BinarySearch.binarySearchInt([3, 5, 8, 13, 21], 1);
    return EXPECTED === actual;
}