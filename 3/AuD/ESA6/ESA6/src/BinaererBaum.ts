import {Comparable} from "./Comparable";

export class BinaererBaum<E extends Comparable<E>> {
    protected root: Knoten<E>;

    constructor() {
        this.root = null;
    }

    public inorder(): string {
        return this.inorderRecursive(this.root).trim();
    }

    private inorderRecursive(x: Knoten<E>): string {
        let inorder: string = '';
        if (x !== null) {
            inorder += this.inorderRecursive(x.left);
            inorder += x.key + ' ';
            inorder += this.inorderRecursive(x.right);
        }
        return inorder;
    }

    public height(): number {
        return this.heightRecursive(this.root);
    }

    private heightRecursive(node: Knoten<E>): number {
        let heightLeft: number = node.left === null ? 0 : 1 + this.heightRecursive(node.left);
        let heightRight: number = node.right === null ? 0 : 1 + this.heightRecursive(node.right);
        return heightLeft > heightRight ? heightLeft : heightRight;
    }

    public size(): number{
        return this.sizeRecursive(this.root);
    }

    private sizeRecursive(node: Knoten<E>): number{
        if (node === null){
            return 0;
        }else{
            let size: number = 1;
            size += this.sizeRecursive(node.left);
            size += this.sizeRecursive(node.right);
            return size;
        }
    }
}

export class Knoten<T> {
    private _key: T;
    public left: Knoten<T>;
    public right: Knoten<T>;
    public p: Knoten<T>;

    constructor(key: T) {
        this._key = key;
        this.left = null;
        this.right = null;
        this.p = null;
    }

    get key(): T {
        return this._key;
    }
}