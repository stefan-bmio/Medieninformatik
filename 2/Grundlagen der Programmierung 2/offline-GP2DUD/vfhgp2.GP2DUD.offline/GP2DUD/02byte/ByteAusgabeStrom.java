import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Klasse zum Schreiben von Daten aus einem Byte-Datenstrom in eine Datei.
 * 
 * @author skalt
 * @version 2.0, 07/2009
 */
public class ByteAusgabeStrom {

    /**
     * Main-Methode.
     * 
     * @param args
     *            Uebergabeparameter
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        // Variablen deklarieren
        byte[] bA = { 10, 20, 30, 40, 50, 60 };
        String dateiName = "ByteAusgabeStromDatei";

        // Methode zum Testen des Ausgabestroms aufrufen
        testeAusgabeStrom(dateiName, bA);
    }

    /**
     * Methode zum Testen eines Ausgabestroms.
     * 
     * @param dateiName
     *            Name der Datei in die Daten geschrieben werden
     * @param bA
     *            zu schreibendes byte-Array
     * @throws IOException
     */
    public static void testeAusgabeStrom(String dateiName, byte[] bA)
            throws IOException {

        // Ausgabestroeme erzeugen
        FileOutputStream foStream = new FileOutputStream(dateiName);
        DataOutputStream doStream = new DataOutputStream(foStream);

        // Schleife ueber byte-Array
        for (int i = 0; i < bA.length; i++) {
            doStream.write(bA[i]); // in Ausgabestrom schreiben
            System.out.print(bA[i] + ", ");
        }

        // Ausgabestrom schliessen
        doStream.close();
        // Dateigroesse auf der Konsole ausgeben
        System.out.println("\nDateigroesse: " + doStream.size() + " Bytes");
    }
}
