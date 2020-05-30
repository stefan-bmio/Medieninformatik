public class MeineArrayList<E> {

    private E[] list;
    private int size;
    private int capacity;
    private int increment;

// with initial capacity c
    public MeineArrayList(int c, int inc) {
        capacity = c;
        list = (E[]) new Object[c];
        size = 0;
        increment = inc;
    }
}