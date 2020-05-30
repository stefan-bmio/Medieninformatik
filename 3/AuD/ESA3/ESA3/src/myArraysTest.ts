import {MyArrays} from "./myArrays";

class TestResult {
    constructor(public comparisons: number, public ar: number[]) {
    }
}

(function () {
    let tests: Set<() => TestResult> = new Set();
    tests.add(testEmptyArray);
    tests.add(testOneElementArray);
    tests.add(testFiveElementArray);

    tests.forEach((fn) => {
        let result: TestResult = fn();
        verify(fn.name, result);
    });

    testLoadFromFile('QuickSort.txt', (result => {
        console.log('test QuickSortTxt (unsorted): ' + result.comparisons + ' comparisons');
    }));

    testLoadFromFile('QuickSortB.txt', (result => {
        console.log('test best case: ' + (result.comparisons === 9999 ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    }));

    testLoadFromFile('QuickSortW.txt', (result => {
        console.log('test worst case: ' + ': ' + (isValid(result) ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    }));

})();

function verify(fnName: string, result: TestResult) {
    console.log(fnName + ': ' + (isValid(result) ? 'success' : 'failed') + ' (' + result.comparisons + ' comparisons)');
    console.log(fnName + ': ' + result.ar);
}

function isValid(result: TestResult): boolean {
    return result.comparisons === result.ar.length * (result.ar.length - 1) / 2
}

function testEmptyArray(): TestResult {
    let ar: number[] = [];
    let comparisons: number = MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}

function testOneElementArray(): TestResult {
    let ar: number[] = [1];
    let comparisons: number = MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}

function testFiveElementArray(): TestResult {
    let ar: number[] = [9, 8, 5, 3, 1];
    let comparisons: number = MyArrays.bubbleSort(ar);
    return new TestResult(comparisons, ar);
}

function testLoadFromFile(filename: string, callback: (result: TestResult) => void): void {
    readInArray(filename, (ar: number[]) => {
        let comparisons: number = MyArrays.bubbleSort(ar);
        callback(new TestResult(comparisons, ar));
    });
}

function readInArray(filename: string, callback: (ar: number[]) => void) {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let numbers: string[] = xhttp.responseText.split('\n');
            let ar: number[] = [];
            numbers.forEach((n) => ar.push(+n));
            callback(ar);
        }
    };
    xhttp.open('GET', filename);
    xhttp.send();
}