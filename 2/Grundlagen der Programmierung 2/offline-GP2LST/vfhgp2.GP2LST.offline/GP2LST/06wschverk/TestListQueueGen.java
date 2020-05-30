

/**
 * Überschrift: Test Warteschlange als verkettete Liste
 * Beschreibung: Testklasse zur Klasse ListQueueGen
 * Copyright:     Copyright (c) 2002
 * Organisation: TFH-Berlin (Projektgruppe VFH)
 * @author  A. Merceron - Umstellung auf generic
 * @version 1.0
 */
public class TestListQueueGen {

    public static void main(String[] args) {
    	// Die Klasse ListQueueGen enthelt die Methoden size und print
    	// welche das Interface QueueGen nicht enthaelt
        ListQueueGen<Integer> fs = new ListQueueGen<Integer>();
        try {
            fs.print();
            System.out.println("fs.enqueue 3, 7, 1, 1, 1");
            fs.enqueue(new Integer(3));
            fs.enqueue(7); // auto-boxing
            fs.enqueue(new Integer(1));
            fs.enqueue(new Integer(1));
            fs.enqueue(new Integer(1));
            fs.print();
            System.out.println("fs.size " + fs.size());
            System.out.println("fs.dequeue");
            Integer o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.enqueue 1, 2, 3");
            fs.enqueue(new Integer(1));
            fs.enqueue(new Integer(2));
            fs.enqueue(new Integer(3));
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
            System.out.println("fs.dequeue");
            o = fs.dequeue();
            fs.print();
        } catch (EmptyQueueException e) {
            System.out.println(e.getMessage());
        }
    }
}