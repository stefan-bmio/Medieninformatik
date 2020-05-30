import {Comparable} from "./Comparable";
import {BinaererBaum, Knoten} from "./BinaererBaum";

export class BinaererSuchBaum<E extends Comparable<E>> extends BinaererBaum<E> {

    public insert(e: E): void {
        let z: Knoten<E> = new Knoten(e);
        let y: Knoten<E> = null;
        let x: Knoten<E> = this.root;

        while (x !== null) {
            y = x;
            if (z.key.compareTo(x.key) < 0) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        z.p = y;
        if (y === null) {
            this.root = z;
        } else if (z.key.compareTo(y.key) < 0) {
            y.left = z;
        } else {
            y.right = z;
        }
    }

    public search(k: E): boolean {
        return this.searchRecursive(this.root, k);
    }

    private searchRecursive(x: Knoten<E>, k: E): boolean {
        if (x === null || !k) {
            return false;
        } else if (k.compareTo(x.key) === 0) {
            return true;
        }

        if (k.compareTo(x.key) < 0) {
            return this.searchRecursive(x.left, k);
        } else {
            return this.searchRecursive(x.right, k);
        }
    }
}