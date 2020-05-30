package de.vfh.gp2.gbs;

import java.awt.BorderLayout;
import java.awt.Container;
import javax.swing.JFrame;
import javax.swing.JLabel;

/**
 * Klasse zum Testen des standardmaessig gesetzten
 * BorderLayouts an einem Fenster.
 * 
 * @author skalt
 * @version 1.0, 03/2011
 *
 */
public class FensterLayoutTest extends JFrame {

    /**
     * Main-Methode.
     * @param args Uebergabeparameter
     */
    public static void main( String[] args) {
        FensterLayoutTest fenster = new FensterLayoutTest();
        fenster.initGUI();
    }
    
    /**
     * Methode zum Initialisieren der Benutzeroberflaeche (GUI).
     */
    private void initGUI() {
        Container c = getContentPane();
        // Fuenf Labels an den entsprechenden
        // BorderLayout-Koordinaten dem Fenster hinzufuegen
        c.add(new JLabel("Norden"), BorderLayout.NORTH);
        c.add(new JLabel("Osten"), BorderLayout.EAST);
        c.add(new JLabel("Sueden"), BorderLayout.SOUTH);
        c.add(new JLabel("Westen"), BorderLayout.WEST);
        c.add(new JLabel("Zentrum"), BorderLayout.CENTER);
        // Fenstergroesse setzen
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Fenster anzeigen
        setVisible(true); 
    }
}
