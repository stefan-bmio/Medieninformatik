/*
    A string that can be tested for equivalence to another string
    using the 'equals' method.
 */
import {IEquivalence} from "../src/IEquivalence";

export class EqString implements IEquivalence {

    constructor(private value: string) {
    }

    equals(other: EqString): boolean {
        return this.value === other.value;
    }

    public toString(): string {
        return this.value;
    }
}