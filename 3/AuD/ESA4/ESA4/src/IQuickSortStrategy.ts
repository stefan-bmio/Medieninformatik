export interface IQuickSortStrategy{
    findPivot(l: number, r: number): number;
}