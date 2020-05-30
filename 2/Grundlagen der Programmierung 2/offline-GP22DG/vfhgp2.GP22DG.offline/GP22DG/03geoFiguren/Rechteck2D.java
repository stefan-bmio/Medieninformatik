import javax.swing.JFrame;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;

/**
 * Demonstriert die Erzeugung eines 2D-Rechtecks mittels der Klasse
 * Rectangle2D.Float und der Methode draw().
 * 
 * @author Görlitz , Eisele, Rapsch, Merceron
 * @version 1.0
 */
public class Rechteck2D extends JFrame {

    /**
     * Erstellt ein Fenster mit angegebenem Titel, Breite und Hoehe.
     * 
     * @param titel
     *            fuer den Titel des Fensters
     * @param breite
     *            fuer die Breite des Fensters
     * @param hoehe
     *            fuer die Hoehe des Fensters
     * 
     */
    public Rechteck2D(String titel, int breite, int hoehe) {
        setTitle(titel);
        setSize(breite, hoehe);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet eine Rechteck mit 50.0F, 50.0F als Koordinaten der oberen linken
     * Ecke, Laenge 100.0F und Hoehe 75.0F
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);

        // Umwandlung des grafischen Kontext in einen 2D-Kontext
        Graphics2D g2 = (Graphics2D) g;

        // Klasse zum Zeichnen eines 2D-Rechtecks mit
        // float-Werten als Parameter
        Rectangle2D.Float floatRect = new Rectangle2D.Float(50.0F, 50.0F,
                100.0F, 75.0F);
        g2.draw(floatRect);
    }

    public static void main(String[] args) {
        new Rechteck2D("Rechteck2D", 200, 170);
    }
}