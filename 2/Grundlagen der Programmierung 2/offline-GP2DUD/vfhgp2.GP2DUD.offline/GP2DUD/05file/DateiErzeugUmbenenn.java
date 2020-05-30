/**
 * DateiErzeugUmbenenn.java
 * In neuem Verzeichnis Dateien erzeugen und umbenennen.
 * @author kraft
 * @version 1.0 02/2002
 */
import java.io.IOException;
import java.io.File;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.FileWriter;

public class DateiErzeugUmbenenn {
    public static void main(String[] args) throws IOException {
        String verz = "TestOrdner";
        String name = "TestOrdner/NeueDatei.txt";
        String nameNeu = "TestOrdner/Textzeile.txt";
        File verzNeu = new File(verz);
        File datei = new File(name);
        File dateiNeu = new File(nameNeu);
        if (verzNeu.mkdir()) {
            System.out.println("\nDas Verzeichnis TestOrdner wurde " +
                "angelegt.");
        }
        datei.createNewFile();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Geben Sie eine Textzeile ein: ");
        String text = br.readLine();
        br.close();
        BufferedWriter bw = new BufferedWriter(new FileWriter(datei));
        bw.write(text);
        bw.flush();
        bw.close();
        datei.renameTo(dateiNeu);
    }
}
