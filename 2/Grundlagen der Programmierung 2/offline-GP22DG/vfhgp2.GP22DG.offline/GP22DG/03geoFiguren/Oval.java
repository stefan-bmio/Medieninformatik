import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Erzeugung einer Ellipse mittels der Methode drawOval()
 * 
 * @author Görlitz, Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Oval extends JFrame {
    // Alle Oval-Objekte haben die gleiche Breite, Hoehe
    // und den gleichen Anfangspunkt
    private static final int BREITE = 400;
    private static final int HOEHE = 300;
    private static final int X1 = 40;
    private static final int Y1 = 60;

    private int x2;
    private int y2;

    /**
     * Erstellt ein Fenster mit der Breite 400, der Hoehe 300 und
     * initialisert die Breite und Höhe der Ellipse.
     * 
     * @param x2
     *            , fuer die Breite der Ellipse
     * @param y2
     *            , fuer die Hoehe der Ellipse
     */

    public Oval(int x2, int y2) {
        this.x2 = x2;
        this.y2 = y2;
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet eine Ellipse.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawOval(X1, Y1, x2, y2);
    }

    public static void main(String[] args) {
        Oval o1 = new Oval(200, 40);
    }

}
