import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Testen der Methoden der Klasse File.
 * 
 * @author skalt
 * @version 2.0 07/2009
 */
public class DateiKopierenAufgabe {
    /**
     * Main-Methode
     * 
     * @param args
     *            Uebergabeparamater
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        // Uebergabeparameter pruefen
        if (args.length != 2) {
            System.out.println("\nAufruf des Programms:\n"
                    + "java DateiKopierenAufgabe datei  verz");
            System.out.println("\ndatei:  Datei die kopiert wird.");
            System.out.println("verz:  Verzeichnis in das kopierte " + 
                    "Datei geschrieben wird.");
            System.exit(1);
        }
        // Datei kopieren
        kopiereDatei(args[0], args[1]);
    }

    /**
     * Methode zum Kopieren einer Datei.
     * 
     * @param quellDatei
     *            Datei die kopiert werden soll
     * @param zielVerz
     *            Verzeichnis in das quellDatei kopiert werden soll
     * @throws IOException
     */
    private static void kopiereDatei(String quellDatei, String zielVerz)
            throws IOException {
        // Einfachen Eingabestrom oeffnen
        FileInputStream in = new FileInputStream(quellDatei);
        // Einfachen Ausgabestrom mit Angabe des Zielverzeichnis oeffnen        
        FileOutputStream out = new FileOutputStream(zielVerz
                + File.separatorChar + quellDatei);
        long dateiLaenge = (new File(quellDatei)).length();
        // Byte-Array, in das Daten eingelesen werden sollen, erzeugen
        byte[] b = new byte[(int) dateiLaenge];
        int len;
        // Daten aus Quelldatei einlesen und in Zieldatei schreiben
        while ((len = in.read(b)) > 0) {
            out.write(b, 0, len);
        }
        // Einfache Ein- und Ausgabestroeme schliessen
        out.close();
        in.close();
        // Benutzerinformation
        System.out.println("Datei '" + quellDatei
                + "' wurde in das Verzeichnis '" + zielVerz + "' kopiert.");
    }
}