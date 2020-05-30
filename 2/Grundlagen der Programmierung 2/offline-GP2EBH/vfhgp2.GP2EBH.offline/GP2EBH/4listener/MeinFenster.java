package de.vfh.gp2.ebh;

/**
 * Die Klasse MeinFenster.java beerbt die abstrakte Klasse
 * AWT-WindowAdapter und muss nur noch die Methoden programmieren,
 * die tatsächlich benötigt werden.
 *
 * @author Strehlow
 * @version 1.0
 * 2010-09-03
 */
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.JFrame;

public class MeinFenster extends JFrame {

    // Konstruktor
    MeinFenster(String title) {
        super(title);
        // Instanz von MeinWindowAdapter erstellen
        MeinWindowAdapter meinWa = new MeinWindowAdapter();
        // meinWa als WindowListener beim JFrame anmelden
        addWindowListener(meinWa);
        // Groeße des Fensters setzen
        setSize(320, 100);
        // Fenster anzeigen
        setVisible(true);
    }

    class MeinWindowAdapter extends WindowAdapter {
        public void windowClosing(WindowEvent e) {
            // Beenden der gerade aktiven JVM
            System.exit(0);
        }
    }

    // Main-Methode
    public static void main(String[] args) {
        new MeinFenster(" Noch ein Fenster zum Schliessen!");
    }
}
