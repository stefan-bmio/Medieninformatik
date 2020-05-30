import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Ein VielEckAnwendung-Objekt hat ein Array mit x-Koordinaten und ein Array mit
 * y-Koordinaten. Diese Koordinaten bestimmen die zwei Polygone, die leicht
 * versetzt zur Konsole gezeichnet werden. Ein Polygon ist gefüllt.
 * 
 * @author A. Merceron
 * 
 */

public class VielEckAnwendung extends JFrame {
    // Versetzung für das neue VielEck
    private static final int NEUESVIELECK = 200;

    private int[] xKoordinate;
    private int[] yKoordinate;

    /**
     * Erstellt ein Fenster mit angegebenem Titel, Breite, Hoehe und
     * intialisiert die Arrays mit den x- und y-Koordinaten.
     */

    public VielEckAnwendung(String titel, int breite, int hoehe,
            int[] xKoordinate, int[] yKoordinate) {
        super(titel);
        this.xKoordinate = xKoordinate;
        this.yKoordinate = yKoordinate;
        setSize(breite, hoehe);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Die paint Methode zeichnet Polygone mit den angegebenen x- und
     * y-Koordinaten. Falls die Anzahl der x- und y-Koordinaten nicht gleich ist,
     * wird die kleinste Anzahl gewaehlt.
     */
    @Override
    public void paint(Graphics g) {
        int anzahl = this.xKoordinate.length;
        // Check fuer Robustheit
        if (anzahl > this.yKoordinate.length) {
            anzahl = this.yKoordinate.length;
        }
        g.drawPolygon(this.xKoordinate, this.yKoordinate, anzahl);

        int[] xf = new int[this.xKoordinate.length];
        for (int i = 0; i < this.xKoordinate.length; i++) {
            xf[i] = this.xKoordinate[i] + NEUESVIELECK;
        }

        g.fillPolygon(xf, this.yKoordinate, anzahl);
    }

    /**
     * Die main Methode in der Klasse erlaubt es, das Programm einfach
     * auszuführen.
     * 
     * @param args
     */
    public static void main(String[] args) {
        int[] x = { 40, 40, 80, 150, 110, 75 };
        int[] y = { 30, 180, 180, 140, 40, 70 };
        new VielEckAnwendung("Polygone zeichnen", 400, 400, x, y);
    }
}
