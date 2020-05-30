/*
 * Implementation of the Quick Sort algorithm
 */
import {IQuickSortStrategy} from "./IQuickSortStrategy";

export class MeineArrays {
    public static quickSort(ar: number[]): number {
        return MeineArrays.quickSortRecursive(ar, 0, ar.length - 1);
    }

    private static quickSortRecursive(ar: number[], p: number, r: number): number {
        if (p < r) {
            let q: number = MeineArrays.partition(ar, p, r);
            let comparisons = r - p;
            comparisons += MeineArrays.quickSortRecursive(ar, p, q - 1);
            comparisons += MeineArrays.quickSortRecursive(ar, q + 1, r);
            return comparisons;
        } else {
            return 0;
        }
    }

    public static quickSortStrat(ar: number[], st: IQuickSortStrategy): number {
        return MeineArrays.quickSortStratRecursive(ar, 0, ar.length - 1, st);
    }

    private static quickSortStratRecursive(ar: number[], p: number, r: number, st: IQuickSortStrategy): number {
        if(p < r) {
            let pivot: number = st.findPivot(p, r);
            MeineArrays.swap(ar, pivot, r);
            let q: number = MeineArrays.partition(ar, p, r);
            let comparisons = r - p;
            comparisons += MeineArrays.quickSortStratRecursive(ar, p, q - 1, st);
            comparisons += MeineArrays.quickSortStratRecursive(ar, q + 1, r, st);
            return comparisons;
        }else{
            return 0;
        }
    }

    private static partition(ar: number[], p: number, r: number): number {
        let x: number = ar[r];
        let i: number = p - 1;
        for (let j: number = p; j < r; j++) {
            if (ar[j] <= x) {
                i++;
                MeineArrays.swap(ar, i, j);
            }
        }
        i++;
        MeineArrays.swap(ar, i, r);
        return i;
    }

    private static swap(ar: number[], i: number, j: number): void {
        let tmp: number = ar[i];
        ar[i] = ar[j];
        ar[j] = tmp;
    }
}