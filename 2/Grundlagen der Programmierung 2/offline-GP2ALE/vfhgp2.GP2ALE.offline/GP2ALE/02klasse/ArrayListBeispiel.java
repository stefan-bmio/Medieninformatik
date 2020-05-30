import java.util.ArrayList;

/**
 * Demoprogramm fuer die Klasse ArrayList.
 * 
 * @author S. Kaltofen
 * @version 1.1, 02/2012
 */
public class ArrayListBeispiel {

    /**
     * Main-Methode.
     * 
     * @param args
     *            Uebergabeparameter
     */
    public static void main(String args[]) {
        // Vereinbaren einer neuen Variable list vom Typ ArrayList<String>
        // Nach dem Konstruktoraufruf hat die ArrayList Platz fuer 10 Elemente.
        // Ist die Kapazitaet erschoepft wird sie automatisch erweitert.
        ArrayList<String> list = new ArrayList<>();
        int anz = 50;

        // Methode zum Fuellen der ArrayList aufrufen
        fuelleArrayList(list, anz);

        // Methode zum Ausgeben der ArrayList aufrufen
        ausgebenArrayList(list);
    }

    /**
     * Methode zum Befuellen der ArrayList mit String Objekten.
     * 
     * @param list
     *            ArrayList die gefuellt werden soll
     * @param anz
     *            Anzahl der Elemente die in die ArrayList gefuellt werden
     *            sollen
     */
    private static void fuelleArrayList(ArrayList<String> list, int anz) {
        for (int i = 0; i < anz; i++) {
            // Element zu der Liste hinzufuegen
            list.add("Ich bin das Textobjekt-Nr. " + i);
        }
    }

    /**
     * Methode zum Ausgeben des Inhalts der ArrayList auf der Konsole.
     * 
     * @param list
     *            ArrayList die ausgegeben werden soll
     */
    private static void ausgebenArrayList(ArrayList<String> list) {
        // Gesamtanzahl der Elemente ausgeben
        System.out
                .println("In der ArrayList sind " + list.size() + " Objekte.");

        // Schleife ueber alle Elemente der ArrayList
        for (String inhalt : list) {
            System.out.println(inhalt);
        }
    }
}
