import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Klasse zum Einlesen einer Bytefolge aus einer Datei mit ueberspringen von
 * Bytes.
 * 
 * @author skalt
 * @version 3.0, 07/2009
 */
public class NochEinByteEingabeStrom {

    /**
     * Main-Methode.
     * 
     * @param args
     *            Uebergabeparameter
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        // Dateiname des Eingabestroms
        String dateiName = "ByteAusgabeStromDatei";
        // Methode zum Testen des Eingabestroms aufrufen
        testeEingabeStrom(dateiName);
    }

    /**
     * Methode zum Testen eines Eingabestroms mit ueberspringen von Bytes.
     * 
     * @param dateiName
     *            Name der Datei aus der Daten gelesen werden
     * @throws IOException
     */
    public static void testeEingabeStrom(String dateiName) throws IOException {
        // Eingabestrom oeffnen
        FileInputStream fiStream = new FileInputStream(dateiName);
        DataInputStream diStream = new DataInputStream(fiStream);

        // Die Methode skipBytes() ueberspringt n Bytes im Eingabestrom und
        // liefert die Anzahl der uebersprungenen Bytes zurueck. Sie loest keine
        // EOFException aus.
        if (diStream.skipBytes(3) != 3) {
            System.out.println("Ich habe weniger uebersprungen als erwartet.");
        }

        // Schleife solange noch Daten zum Einlesen vorhanden sind
        while (diStream.available() > 0) {
            // Die Methode readByte() liest ein Byte von einem Datenstrom und
            // gibt den eingelesenen Wert des Bytes zurueck.
            byte einByte = diStream.readByte();
            System.out.print(einByte + " ");
        }

        // Eingabestrom schliessen
        diStream.close();
    }
}
