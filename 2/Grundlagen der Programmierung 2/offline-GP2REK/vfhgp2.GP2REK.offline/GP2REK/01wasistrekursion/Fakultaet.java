/**
  * Fakultaet.java
  * Programm zur Berechnung der Fakultaet
  * rekursiv und iterativ.
  * @author Görlitz
  * @version 2.0, 12/2001
  */
class Fakultaet {

    /**
     * Rekursiver Algorithmus zur Fakultätsberechnung
     */
    static int rekursiv(int zahl) {
        if (zahl == 1) { // Abbruch bei 1
            return 1;
        }
        else {
            return zahl * rekursiv(zahl - 1);  //rekursiver Aufruf
        }
     }

    /**
     * Iterativer Algorithmus zur Fakultätsberechnung
     */
    static int iterativ (int zahl) {
        int i = 1;             // Schleifenvariable vereinbaren
        int f = 1;             // Variable für Zwischenprodukt
        while (i <= zahl) {    // Berechnungsschleife
            f = i * f;         // Teilprodukt
            i++;               // Schleifenzaehler erhoehen
        }
        return f;              //  Rueckgabe des Fakultaetswertes
    }
}


