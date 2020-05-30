import { testGeneric } from './testBinarySearchGeneric';
import { testInt } from './testBinarySearchInt';
import {BinarySearch} from "./binarySearch";


(function test() {
    log('Test binary search (int)');
    testInt();

    log('Test binary search (generic)');
    testGeneric();

    log('Test 999');
    let ar: number[] = Array(1000).fill(0).map((v, i) => i);
    console.log('Zahl 12 gefunden an Position: ' + BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + BinarySearch.getRecursionCount());
    console.log('Zahl -1 nicht gefunden (Ergebnis: ' + BinarySearch.binarySearchInt(ar, -1) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + BinarySearch.getRecursionCount());

    log('Test 99999');
    ar = Array(100000).fill(0).map((v, i) => i);
    console.log('Zahl 12 gefunden an Position: ' + BinarySearch.binarySearchInt(ar, 12));
    console.log('Anzahl rekursiver Aufrufe: ' + BinarySearch.getRecursionCount());
    console.log('Zahl 100000 nicht gefunden (Ergebnis: ' + BinarySearch.binarySearchInt(ar, 100000) + ')');
    console.log('Anzahl rekursiver Aufrufe: ' + BinarySearch.getRecursionCount());
})();

function log(message: string){
    console.log('');
    console.log('####');
    console.log('#### ' + message);
    console.log('####');
}

