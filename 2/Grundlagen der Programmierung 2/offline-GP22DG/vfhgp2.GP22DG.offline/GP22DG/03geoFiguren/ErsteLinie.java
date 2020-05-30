import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * ErsteLinie-Objekte zeigen eine einzige Linie im Fenster. Die Linie startet
 * immer am Punkt (40, 60). Die Nutzer-Eingabe bestimmt das Ende der Linie.
 * 
 * @author Görlitz, Eisele, Rapsch, Merceron
 * 
 */

public class ErsteLinie extends JFrame {
    // Alle ErsteLinie-Objekte haben die gleiche Breite, Hoehe
    // und den gleichen Anfangspunkt der Linie
    private static final int BREITE = 400;
    private static final int HOEHE = 300;
    private static final int X1 = 40;
    private static final int Y1 = 60;

    private int x2;
    private int y2;

    /**
     * Erstellt ein Fenster mit der Breite 400, der Hoehe 300 und
     * initialisiert die Koordinaten eines Punktes.
     * 
     * @param x2
     *            , x-Koordinate fuer das Ende einer Linie im Fenster - Die
     *            Eingabe wird mit 400 ersetzt falls sie groesser ist als 400.
     * @param y2
     *            , y-Koordinate fuer das Ende einer Linie im Fenster - Die
     *            Eingabe wird mit 300 ersetzt falls sie groesser ist als 300.
     */
    public ErsteLinie(int x2, int y2) {
        if (x2 > BREITE) {
            this.x2 = BREITE;
        } else {
            this.x2 = x2;
        }
        if (y2 > HOEHE) {
            this.y2 = HOEHE;
        } else {
            this.y2 = y2;
        }
        setSize(BREITE, HOEHE);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet eine Linie.
     */

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawLine(X1, Y1, x2, y2);
    }

    public static void main(String[] args) {
        ErsteLinie el = new ErsteLinie(240, 100);
    }

}