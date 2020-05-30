/**
 * Überschrift: TestFeldStapel
 * Beschreibung: Testklasse zur Klasse ReiheStapel
 * Copyright:     Copyright (c) 2002
 * Organisation: BHT-Berlin (Projektgruppe VFH)
 * @author  M.Esponda
 * @version 1.0
 */
public class TestReiheQueueGen {

    public static void main(String[] args) {
        ReiheQueueGen<Integer> fs = new ReiheQueueGen<Integer>(4);
        try {
            System.out.println(fs); // Queue-Inhalt ausgeben
                   // toString()-Methode wird implizit aufgerufen
            
            // Elemente hinzufuegen
            fs.enqueue(3); // auto boxing
            System.out.println(fs);
            fs.enqueue(new Integer(7));
            fs.enqueue(new Integer(1));
            System.out.println(fs);
            // Element entfernen
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println(fs);
            // Element hinzufuegen 
            fs.enqueue(new Integer(1));
            System.out.println(fs);
            System.out.println("fs. dequeue " + fs.dequeue());
            // Element hinzufuegen 
            fs.enqueue(new Integer(1));
            System.out.println(fs);
            // Elemente entfernen
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println(fs);
            fs.enqueue(new Integer(1));
            fs.enqueue(new Integer(2));
            // Elemente entfernen
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println("fs. dequeue " + fs.dequeue());
            System.out.println(fs);
        } catch (Exception e) {
            System.out.println(e);
        }
        ;
    }
}