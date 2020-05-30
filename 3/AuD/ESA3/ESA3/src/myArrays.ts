/*
 * Implementation of the (improved) Bubble Sort algorithm
 */
export class MyArrays {
    public static bubbleSort(ar: number[]): number {
        let m: number = ar.length - 1;
        let b: boolean = false;
        let k: number = 0;
        let comparisons = 0;

        do {
            b = false;
            for (let i: number = 0; i < m; i++) {
                comparisons++;
                if (ar[i] > ar[i + 1]) {
                    MyArrays.swapNext(ar, i);
                    b = true;
                    k = i;
                }
            }
            m = k;
        } while (b);

        return comparisons;
    }

    private static swapNext(ar: number[], i: number): void {
        let tmp: number = ar[i];
        ar[i] = ar[i + 1];
        ar[i + 1] = tmp;
    }
}