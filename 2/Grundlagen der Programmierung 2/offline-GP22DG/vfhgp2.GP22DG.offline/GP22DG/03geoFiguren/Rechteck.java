import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Erzeugung eines Rechtecks mittels der Methode drawRect().
 * Ein Rechteck mit den vier Parametern x1, y1, x2 und y2 wird im Fenster
 * gezeichnet.
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Rechteck extends JFrame {
    // Alle Rechteck-Objekte haben die gleiche Breite und Hoehe
    private static final int BREITE = 400;
    private static final int HOEHE = 300;

    private int x1;
    private int y1;
    private int x2;
    private int y2;

    /**
     * Erstellt ein Fenster mit der Breite 400, der Hoehe 300 und
     * initialisiert die Parameter des Rechtecks.
     * 
     * @param x1
     *            , x-Koordinate fuer den linken oberen Eckpunkt
     * @param y1
     *            , y-Koordinate fuer den linken oberen Eckpunkt
     * @param x2
     *            , gibt die Breite des Rechtecks an
     * @param y2
     *            , gibt die Hoehe des Rechtecks an
     */
    public Rechteck(int x1, int y1, int x2, int y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet ein Rechteck.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawRect(x1, y1, x2, y2);
    }

    public static void main(String[] args) {
        Rechteck el = new Rechteck(40, 60, 200, 40);
    }

}
