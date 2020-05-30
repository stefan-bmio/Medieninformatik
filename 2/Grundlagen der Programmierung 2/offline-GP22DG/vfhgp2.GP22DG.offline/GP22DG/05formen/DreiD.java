import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Erzeugung von Rechtecken, die dreidimensional 
 * hervorgehoben erscheinen.
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class DreiD extends JFrame {
    /**
     * Erstellt ein Fenster mit angegebener Breite und Hoehe.
     * 
     * @param breite
     *            gibt die Breite des Fensters an
     * @param hoehe
     *            gibt die Hoehe des Fensters an
     */
    public DreiD(int breite, int hoehe) {
        setSize(breite, hoehe);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet rote, dreidimensional erscheinende Rechtecke. 
     * Die Farbe, Koordinaten, Breite, Hoehe, und Hervorhebung
     * des Rechtecks sind in der Methode selbst festgelegt.
     */
    @Override
    public final void paint(Graphics g) {
        super.paint(g);
        g.setColor(Color.RED);
        g.draw3DRect(40, 40, 100, 140, false);
        g.fill3DRect(240, 40, 100, 140, true);
    }

    public static void main(String[] args) {
        new DreiD(380, 200);
    }

}
