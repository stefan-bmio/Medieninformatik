import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Klasse zur zeichenorientierten Ausgabe in eine Dateien.
 * 
 * @author skalt
 * @version 2.0, 07/2009
 */
class NochEinCharacterAusgabeStrom {

    /**
     * Main-Methode.
     * 
     * @param args
     *            Uebergabeparameter
     * @throws IOException
     */
    static public void main(String[] args) throws IOException {
        // Dateiname
        String dateiName = "EinAusgabe.txt";
        // Array mit Ausgabetext
        String[] textA = { "Das ist ein Test...", "Noch eine Zeile mit Text..." };
        // Methode zum Testen des Ausgabestroms aufrufen
        schreibeTextInDatei(dateiName, textA);
    }

    /**
     * Methode zum Schreiben von Text in eine Datei.
     * 
     * @param dateiName
     *            Name der Datei in die Daten geschrieben werden
     * @param textA
     *            zu schreibendes String-Array         
     * @throws IOException
     */
    public static void schreibeTextInDatei(String dateiName, String[] textA)
            throws IOException {
        // Ausgabestroeme erzeugen und miteinander verbinden
        FileWriter fwStream = new FileWriter(dateiName);
        PrintWriter pwStream = new PrintWriter(fwStream);
        // Ausgabetext zeilenweise (durch die Stroeme) in die Datei schreiben
        for (int i = 0; i < textA.length; i++) {
            pwStream.println(textA[i]);
        }
        // Ausgabestrom schliessen
        pwStream.close();
    }
}