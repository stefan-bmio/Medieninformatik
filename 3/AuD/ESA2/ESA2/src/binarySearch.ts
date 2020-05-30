export class BinarySearch {
    private static recursionCounter: number;

    /*
     * Calls the recursive function to binary search a number in an array of
     * numbers. Strictly speaking, that could be an array of any type of numbers
     * and an x argument of any type of number, not necessarily integers.
     */
    public static binarySearchInt(ar: number[], x: number): number {
        BinarySearch.recursionCounter = 0;
        return BinarySearch.binarySearchIntRecursiv(ar, x, 0, ar.length);
    }

    private static binarySearchIntRecursiv(ar: number[], x: number, l: number, r: number): number {

        if (l >= r) {
            return 0;
        }

        let i = Math.floor((l + r) / 2);

        if (ar[i] === x) {
            return i + 1;
        }

        let nextL = l;
        let nextR = r;
        if (ar[i] < x) {
            nextL = i + 1;
        } else {
            nextR = i;
        }

        // counting the recursive method calls only, not including the initial call
        BinarySearch.recursionCounter++;
        return BinarySearch.binarySearchIntRecursiv(ar, x, nextL, nextR);
    }

    /*
     * Calls the recursive function to binary search the object x in the array.
     * in order to compare them, the objects in the array and the object x must
     * be of a class which implements the Comparable interface.
     */
    public static binarySearch<E extends Comparable<E>>(ar: E[], x: E): number {
        return BinarySearch.binarySearchRecursiv(ar, x, 0, ar.length);
    }

    private static binarySearchRecursiv<E extends Comparable<E>>(ar: E[], x: E, l: number, r: number): number {
        if (l >= r) {
            return 0;
        }

        let i = Math.floor((l + r) / 2);

        if (ar[i].compareTo(x) === 0) {
            return i + 1;
        }

        let nextL = l;
        let nextR = r;
        if (ar[i].compareTo(x) < 0) {
            nextL = i + 1;
        } else {
            nextR = i;
        }

        return BinarySearch.binarySearchRecursiv(ar, x, nextL, nextR);
    }

    static getRecursionCount(): number {
        return BinarySearch.recursionCounter;
    }
}

export interface Comparable<E> {
    /*
     * Compares this object to the given argument and returns
     * a negative number, zero or a positive number, if this object
     * is less than, equal or greater than the other object,
     * respectively.
     */
    compareTo(other: Comparable<E>): number;
}