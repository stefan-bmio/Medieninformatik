export interface Comparable<E> {
    /*
     * Compares this object to the given argument and returns
     * a negative number, zero or a positive number, if this object
     * is less than, equal or greater than the other object,
     * respectively.
     */
    compareTo(other: Comparable<E>): number;
}