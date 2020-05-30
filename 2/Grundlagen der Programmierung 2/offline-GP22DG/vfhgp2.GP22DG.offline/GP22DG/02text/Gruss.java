import java.awt.Graphics;
import javax.swing.JFrame;

/**
 * Demonstration von Text im Grafik-Modus.
 * 
 * @author Görlitz, Eisele, Rapsch, Merceron
 * @version 1.0
 */

public class Gruss extends JFrame {
    private String namen;

    /**
     * Erstellt ein Fenster mit der Breite 300, der Hoehe 100 
     * und initialisiert den Namen der Gruss-Botschaft.
     * 
     * @param namen
     *            fuer die Gruss-Botschaft im Fenster
     */
    public Gruss(String namen) {
        this.namen = namen;
        setSize(300, 100);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Schreibt den Text "Gruss an " u. den Namen, der dem 
     * Konstruktor uebergeben wurde, an die Stelle 100, 50.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g); // empfohlen, siehe javadoc der paint-
        // Methode der Klasse java.awt.Window
        g.drawString("Gruss an " + namen, 100, 50);
    }

    public static void main(String[] args) {
        new Gruss("Fritz");
    }
}