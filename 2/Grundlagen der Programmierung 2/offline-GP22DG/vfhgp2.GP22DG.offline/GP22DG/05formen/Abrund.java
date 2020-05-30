import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstriert die Erzeugung von gefuellten und ungefuellten 
 * Rechtecken mit abgerundeten Ecken.
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Abrund extends JFrame {

    /**
     * Erstellt ein Fenster mit angegebener Breite und Hoehe.
     * 
     * @param breite
     *            gibt die Breite des Fensters an
     * @param hoehe
     *            gibt die Hoehe des Fensters an
     */
    public Abrund(int breite, int hoehe) {
        setSize(breite, hoehe);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet zwei Rechtecke mit abgerundeten Ecken. Ein Rechteck 
     * ist gefuellt. Die Koordinaten, Seitenlaengen und Parameter
     * fuer die Rundung sind in der Methode selbst festgelegt.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.drawRoundRect(40, 40, 100, 140, 30, 30);
        g.fillRoundRect(240, 40, 100, 140, 30, 30);
    }

    public static void main(String[] args) {
        new Abrund(380, 200);
    }

}