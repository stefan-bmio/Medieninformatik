/*
    Interface for the stack ADT
 */
export interface IStapel<E>{
    top(): E;
    pop(): E;
    push(e: E): void;
}