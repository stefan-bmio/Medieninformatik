import {IStapel} from "./IStapel";
import {EmptyStackException} from "./EmptyStackException";
import {IEquivalence} from "./IEquivalence";

/*
    Implementation of the stack ADT backed by a linked list
 */
export class VerketteterStapel<E extends IEquivalence> implements IStapel<E>, IEquivalence {
    private head: Element<E>;

    /*
        Constructs an empty stack
     */
    public constructor() {
        this.head = null;
    }

    /*
        Returns the top element of the stack
     */
    public top(): E {
        if (this.head === null) {
            throw new EmptyStackException('Cannot retrieve top element');
        }

        return this.last().key;
    }

    /*
        Removes and returns the top element of the stack
     */
    public pop(): E {
        if (this.head === null) {
            throw new EmptyStackException('Cannot pop element');
        }

        let e: Element<E> = this.head;
        if (this.head.next === null) {
            this.head = null;
            return e.key;
        }

        let eTop: Element<E>;
        while (e.next !== null) {
            eTop = e;
            e = e.next;
        }
        eTop.next = null;

        return e.key;
    }

    /*
        Puts an element on top of the stack
     */
    public push(x: E): void {
        let e: Element<E> = new Element(x);
        if (this.head === null) {
            this.head = e;
            return;
        }

        this.last().next = e;
    }

    private last(): Element<E> {
        let e: Element<E> = this.head;
        while (e.next !== null) {
            e = e.next;
        }
        return e;
    }

    /*
        Compares this stack to the other stack.
        Two stacks are considered equal if and only if
        - none of both is undefined or null
        - both stacks have the same number of elements
        - the 'key' properties of each two elements at the same position in the two stacks are
          equal according to their definition in the respective implementation of IEquivalence.
     */
    public equals(other: VerketteterStapel<E>): boolean{
        if(other === undefined || other === null){
            return false;
        }

        if(this.head === null && other.head !== null ||
            this.head !== null && other.head === null){
            return false;
        }

        if(this.head === null && other.head === null){
            return true;
        }

        let e0: Element<E> = this.head;
        let e1: Element<E> = other.head;

        do{
            if(!e0.key.equals(e1.key)){
                return false;
            }

            e0 = e0.next;
            e1 = e1.next;
        }while(e0 !== null && e1 !== null);

        if(e0 !== null || e1 !== null){
            return false;
        }

        return true;
    }

    /*
        Returns a string representation of the stack
     */
    public toString(): string {
        let str: string = '[';
        if (this.head !== null) {
            let e: Element<E> = this.head;
            str += e.key.toString();
            while (e.next !== null) {
                e = e.next;
                str += ', ' + e.key.toString();
            }
        }
        return str + ']';
    }
}

/*
    Represents an element in a singly linked list
 */
class Element<E> {
    next: Element<E>;
    key: E;

    constructor(key: E) {
        this.next = null;
        this.key = key;
    }
}