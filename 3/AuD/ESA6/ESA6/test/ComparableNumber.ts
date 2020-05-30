import {Comparable} from "../src/Comparable";

export class ComparableNumber implements Comparable<ComparableNumber> {
    private num: number;

    constructor(num: number){
        this.num = num;
    }
    compareTo(other: ComparableNumber): number {
        return this.num < other.num ? -1 : this.num === other.num ? 0 : 1;
    }

    public toString = () : string => {
        return '' + this.num;
    }
}