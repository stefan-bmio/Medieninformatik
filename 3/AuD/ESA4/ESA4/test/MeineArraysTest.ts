import {MeineArrays} from "../src/MeineArrays";
import {Test} from "./Test";
import {IQuickSortStrategy} from "../src/IQuickSortStrategy";


(function () {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let numbers: string[] = xhttp.responseText.split('\n');
            let ar: number[] = [];
            numbers.forEach((n) => ar.push(+n));

            MeineArraysTest(ar);
        }
    };
    xhttp.open('GET', "QuickSort.txt");
    xhttp.send();
})();

function MeineArraysTest(ar: number[]) {
    let fileArray: number[] = ar;

    function newArrayFromFile(): number[] {
        return JSON.parse(JSON.stringify(fileArray));
    }

    let tests: Set<Test> = new Set();

    tests.add(new Test("empty array", (): boolean => {
        let ar: number[] = [];
        let comparisons: number = MeineArrays.quickSort(ar);
        return ar.length === 0 && comparisons === 0;
    }));

    tests.add(new Test("one element array", (): boolean => {
        let ar: number[] = [1];
        let comparisons: number = MeineArrays.quickSort(ar);
        return ar.length === 1 && ar[0] === 1 && comparisons === 0;
    }));

    tests.add(new Test("several elements array", (): boolean => {
        let ar: number[] = [11, 15, 13, 8, 1, 10, 16, 12];

        let comparisons: number = MeineArrays.quickSort(ar);
        const EXPECTED: number[] = [1, 8, 10, 11, 12, 13, 15, 16];
        if (EXPECTED.length !== ar.length) {
            return false;
        }
        for (let i = 0; i < EXPECTED.length; i++) {
            if (ar[i] !== EXPECTED[i]) {
                return false;
            }
        }
        return true;
    }));

    tests.add(new Test("QuickSort.txt", function () {
        let ar: number[] = newArrayFromFile();
        let comparisons: number = MeineArrays.quickSort(ar);
        this.auxiliaryLog(comparisons + " comparisons");

        return verifyQuickSortTxt(ar);
    }));

    tests.add(new Test("QuickSort.txt with strategy pattern", function (): boolean {
        let ar: number[] = newArrayFromFile();
        let comparisons: number = MeineArrays.quickSortStrat(ar, {
            findPivot(l, r): number {
                return Math.floor(Math.random() * (r - l)) + l;
            }
        });
        this.auxiliaryLog(comparisons + " comparisons");

        return verifyQuickSortTxt(ar);
    }));

    tests.forEach(test => {
        test.test();
    });
}

function verifyQuickSortTxt(ar: number[]): boolean {
    let isPass: boolean = true;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] !== i + 1) {
            isPass = false;
            break;
        }
    }

    return isPass;
}

