import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Ausgabe eines Kreisbogens.
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Bogen extends JFrame {
    // Alle Bogen-Objekte haben die gleiche Breite und Hoehe
    private static final int BREITE = 400;
    private static final int HOEHE = 300;

    private int x;
    private int y;
    private int b;
    private int h;
    private int startwinkel;
    private int drehwinkel;

    /**
     * Erstellt ein Fenster mit der Breite 400, der Hoehe 300 und
     * intialisiert alle Parameter um einen Bogen zu zeichnen.
     * 
     * @param x
     *            , x-Koordinate der linken oberen Ecke
     * @param y
     *            , y-Koordinate der linken oberen Ecke
     * @param b
     *            , Breite des Rechtecks gemessen von (x,y)
     * @param h
     *            , Hoehe des Rechtecks gemessen von (x,y)
     * @param startwinkel
     *            , Anfangswinkel des zu zeichnenden Bogenstuecks
     * @param drehwinkel
     *            , Drehwinkel des vom gezeichneten Bogen insgesamt
     *            überstrichenen Winkels
     */
    public Bogen(int x, int y, int b, int h, int startwinkel, int drehwinkel) {
        this.x = x;
        this.y = y;
        this.b = b;
        this.h = h;
        this.startwinkel = startwinkel;
        this.drehwinkel = drehwinkel;
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet einen Kreisbogen.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawArc(x, y, b, h, startwinkel, drehwinkel);
    }

    public static void main(String[] args) {
        new Bogen(40, 60, 200, 40, 90, 270);
    }

}
