/**
 * Überschrift: TestArrayStackGen
 * Beschreibung: Testklasse zur Klasse ArrayStackGen
 * Copyright:     Copyright (c) 2002
 * Organisation: BHT-Berlin (Projektgruppe VFH)
 * @author  M.Esponda  - Agathe Merceron Oktober 2007
 * @version 1.0
 */
public class TestArrayStackGen {

    /**
     * Main-Methode.
     * @param args Uebergabeparameter
     */
    public static void main(String[] args) {
        ArrayStackGen<Integer> fs = new ArrayStackGen<>(5);
        try {
            //TestEnde
            System.out.println(fs); // Stapel-Inhalt ausgeben
                                    // toString()-Methode wird implizit aufgerufen
            // Elemente hinzuguegen
            fs.push(3); // auto-boxing seit Java 5
            fs.push(new Integer(7));
            fs.push(new Integer(1));
            fs.push(new Integer(2));
            fs.push(new Integer(1));
            System.out.println(fs); // Stapel-Inhalt ausgeben
            
            // Elemente entfernen
            System.out.println("fs.pop " + fs.pop());
            System.out.println("fs.pop " + fs.pop());
            System.out.println("fs.pop " + fs.pop());
            System.out.println(fs); // Stapel-Inhalt ausgeben
            
            // Elemente hinzufuegen
            fs.push(new Integer(1));
            fs.push(new Integer(2));
            fs.push(new Integer(3));
            System.out.println(fs); // Stapel-Inhalt ausgeben
            System.out.println("Stapel-Inhalt simple ausgeben:");
            System.out.println(fs.toStringSimple());
        } catch (Exception e) {
            System.out.println(e);
        }
        ;
    }
}