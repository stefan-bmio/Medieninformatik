import java.awt.Frame;
import java.awt.Graphics;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

/**
 * Erzeugt ein AWT-Fenster und gibt eine Grussbotschaft aus.
 * 
 * @author A.Merceron
 * @version 1.0
 */

public class Grussawt extends Frame {
    private String namen;

    /**
     * Erstellt ein Fenster mit der Breite 300, der Hoehe 100 und 
     * initialisiert den Namen fuer die Gruss-Botschaft.
     * 
     * @param namen
     *            fuer die Gruss-Botschaft im Fenster
     */
    public Grussawt(String namen) {
        this.namen = namen;
        setSize(300, 100);
        addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
        setVisible(true);
    }

    /**
     * Schreibt den Text "Gruss an " und den Namen, der dem 
     * Konstruktor uebergeben wurde, an die Stelle 100, 50.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g); // empfohlen, siehe javadoc der paint-
        // Methode der Klasse java.awt.Window
        g.drawString("Gruss an " + namen, 100, 50);
    }

    public static void main(String[] args) {
        new Grussawt("Fritz");
    }

}