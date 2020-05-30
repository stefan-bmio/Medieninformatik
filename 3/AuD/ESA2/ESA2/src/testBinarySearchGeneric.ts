import { BinarySearch, Comparable } from './binarySearch';

export function testGeneric(){
    let tests: Set<() => boolean> = new Set();
    tests.add(testEmptyArray);
    tests.add(testElementInArrayLength1);
    tests.add(testElementNotInArrayLength1);
    tests.add(testElementInArrayPosition1Length5);
    tests.add(testElementInArrayPosition5Length5);
    tests.add(testElementInArrayPosition2Length5);
    tests.add(testElementNotInArrayLength5);

    tests.forEach((fn) => {
        console.log(fn.name + ': ' + (fn() ? 'success' : 'failed'));
    });
}

class Instrument implements Comparable<string>{
    constructor(private str: string) {
    }

    compareTo(other: Comparable<string>): number {
        if(this.str < (other as Instrument).str){
            return -1;
        }

        if(this.str === (other as Instrument).str){
            return 0;
        }

        return 1;
    }

    static createArray(...strings: string[]): Instrument[]{
        let array: Instrument[] = [];
        for(let str of strings){
            array.push(new Instrument(str));
        }
        return array;
    }
}

function testEmptyArray(): boolean {
    const EXPECTED: number = 0;
    let actual: number = BinarySearch.binarySearch([], new Instrument('Accordion'));
    return EXPECTED === actual;
}

function testElementInArrayLength1() {
    const EXPECTED: number = 1;
    let actual: number = BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Accordion'));
    return EXPECTED === actual;
}

function testElementNotInArrayLength1() {
    const EXPECTED: number = 0;
    let actual: number = BinarySearch.binarySearch([new Instrument('Accordion')], new Instrument('Bass guitar'));
    return EXPECTED === actual;
}

function testElementInArrayPosition1Length5(): boolean {
    const EXPECTED: number = 1;
    let ar: Instrument[] = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    let actual: number = BinarySearch.binarySearch(ar, new Instrument('Cymbals'));
    return EXPECTED === actual;
}

function testElementInArrayPosition5Length5(): boolean {
    const EXPECTED: number = 5;
    let ar: Instrument[] = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    let actual: number = BinarySearch.binarySearch(ar, new Instrument('Ukulele'));
    return EXPECTED === actual;
}

function testElementInArrayPosition2Length5(): boolean {
    const EXPECTED: number = 2;
    let ar: Instrument[] = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    let actual: number = BinarySearch.binarySearch(ar, new Instrument('Electric Guitar'));
    return EXPECTED === actual;
}

function testElementNotInArrayLength5(): boolean {
    const EXPECTED: number = 0;
    let ar: Instrument[] = Instrument.createArray('Cymbals', 'Electric Guitar', 'Harmonica', 'Mandolin', 'Ukulele');
    let actual: number = BinarySearch.binarySearch(ar, new Instrument('Accordion'));
    return EXPECTED === actual;
}