import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Rechtecke, Ellipsen, ein Bogenstueck und eine Sektorflaeche werden sowohl im
 * Umriss- als auch im Fuellmodus ausgegeben.
 * 
 * @author Görlitz, Eisele, Rapsch
 * 
 */
public class Fuell01 extends JFrame {

    /**
     * Erstellt ein Fenster mit angegebener Breite und Hoehe.
     * 
     * @param breiteFenster
     *            fuer die Breite des Fensters
     * @param hoeheFenster
     *            fuer die Hoehe des Fensters
     */

    public Fuell01(int breiteFenster, int hoeheFenster) {
        setSize(breiteFenster, hoeheFenster);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet Rechtecke, Ellipsen, ein Bogenstueck und eine Sektorflaeche. Die
     * Koordinaten und Parameter fuer die geometrischen Figuren sind in der
     * Methode selbst festgelegt.
     */

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        int breite = 100;
        int hoehe = 70;
        // Rechteck blau, ohne Fuellung
        g.setColor(Color.blue);
        g.drawRect(40, 30, breite, hoehe);
        // Rechteck gruen, gefuellt
        g.setColor(Color.green);
        g.fillRect(200, 30, breite, hoehe);
        // Ellipse rot, ohne Fuellung
        g.setColor(Color.red);
        g.drawOval(40, 130, breite, hoehe);
        // Ellipse gelb, gefuellt
        g.setColor(Color.yellow);
        g.fillOval(200, 130, breite, hoehe);
        // Bogenstueck schwarz, ohne Fuellung
        g.setColor(Color.black);
        g.drawArc(40, 230, breite, hoehe, 90, 270);
        // Sektorflaeche Magenta, gefuellt
        g.setColor(Color.magenta);
        g.fillArc(200, 230, breite, hoehe, 90, 270);
    }

    public static void main(String[] args) {
        new Fuell01(340, 340);
    }
}