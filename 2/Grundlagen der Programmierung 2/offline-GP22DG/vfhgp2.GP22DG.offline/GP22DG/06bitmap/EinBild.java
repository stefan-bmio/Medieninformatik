import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import javax.swing.JFrame;

/**
 * Demonstriert wie Bitmap-Grafiken eingebunden werden.
 * 
 * @author Görlitz, Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class EinBild extends JFrame {
    // Alle EinBild-Objekte haben die gleiche Breite und Hoehe
    private static final int BREITE = 200;
    private static final int HOEHE = 200;
    // Die Hintergrundfarbe ist fuer alle EinBild-Objekte weiss
    private static final Color BACKGROUNDFARBE = Color.WHITE;

    private int x;
    private int y;

    /**
     * Erstellt ein Fenster mit der Breite 200, der Hoehe 200 
     * und initialisert die x,y-Koordinaten fuer die Grafik.
     * 
     * @param x
     *            x-Koordinate fuer die Grafik
     * @param y
     *            y-Koordinate fuer die Grafik
     */
    public EinBild(int x, int y) {
        this.x = x;
        this.y = y;
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet eine Bitmap-Grafik, mit weissem Hintergrund.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        getContentPane().setBackground(BACKGROUNDFARBE);
        Image img = getToolkit().getImage("javalogo.gif");
        g.drawImage(img, x, y, this);
    }

    public static void main(String[] args) {
        new EinBild(50, 50);
    }
}
