import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Erzeugung einer Ellipse und zweier Kreise mittels der
 * Methode drawOval(). Zusätzlich wird ein Gruss-Text ausgegeben.
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Kreise extends JFrame {
    // Alle Kreise-Objekte haben die gleiche Breite und Hoehe
    private static final int BREITE = 400;
    private static final int HOEHE = 300;
    // x,y Koordinaten fuer die Grussbotschaft
    private static final int X_GRUSS = 85;
    private static final int Y_GRUSS = 85;
    // Parameter fuer die Ellipse
    private static final int X_ELLIPSE = 40;
    private static final int Y_ELLIPSE = 60;
    private static final int B_ELLIPSE = 200;
    private static final int H_ELLIPSE = 40;
    // Parameter fuer den ersten Kreis
    private static final int X_KREIS1 = 240;
    private static final int Y_KREIS1 = 100;
    private static final int B_KREIS1 = 20;
    private static final int H_KREIS1 = 20;
    // Parameter fuer den zweiten Kreis
    private static final int X_KREIS2 = 260;
    private static final int Y_KREIS2 = 130;
    private static final int B_KREIS2 = 10;
    private static final int H_KREIS2 = 10;

    private String gruss;

    /**
     * Erstellt ein Fenster mit der Breite 400, der Hoehe 300 und initialisiert
     * die Grussbotschaft fuer die Ellipse.
     * 
     * @param gruss
     *            , Gruss-Text fuer die Ellipse
     */
    public Kreise(String gruss) {
        this.gruss = gruss;
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet eine Ellipse, zwei Kreise und den uebergebenen Gruss.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawString(gruss, X_GRUSS, Y_GRUSS);
        g.drawOval(X_ELLIPSE, Y_ELLIPSE, B_ELLIPSE, H_ELLIPSE);
        g.drawOval(X_KREIS1, Y_KREIS1, B_KREIS1, H_KREIS1);
        g.drawOval(X_KREIS2, Y_KREIS2, B_KREIS2, H_KREIS2);
    }

    public static void main(String[] args) {
        new Kreise("Hallo, Herr Schmidt...");
    }

}