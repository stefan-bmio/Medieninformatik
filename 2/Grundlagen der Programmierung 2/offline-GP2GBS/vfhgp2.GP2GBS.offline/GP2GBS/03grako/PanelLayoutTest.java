package de.vfh.gp2.gbs;

import java.awt.Container;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * Klasse zum Testen des standardmaessig gesetzten FlowLayouts in einem Panel.
 * 
 * @author skalt
 * @version 1.0, 03/2011
 * 
 */
public class PanelLayoutTest extends JFrame {

    /**
     * Main-Methode.
     * 
     * @param args Uebergabeparameter
     */
    public static void main(String[] args) {
        PanelLayoutTest fenster = new PanelLayoutTest();
        fenster.initGUI();
    }

    /**
     * Methode zum Initialisieren der Benutzeroberflaeche (GUI).
     */
    private void initGUI() {
        Container c = getContentPane();
        // Panel erzeugen
        JPanel panel = new JPanel();
        // Fuenf Labels dem Panel hinzufuegen
        panel.add(new JLabel("Norden"));
        panel.add(new JLabel("Osten"));
        panel.add(new JLabel("Sueden"));
        panel.add(new JLabel("Westen"));
        panel.add(new JLabel("Zentrum"));
        // Panel dem Fenster hinzufuegen
        c.add(panel);
        // Fenstereigenschaften setzen
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Fenster anzeigen
        setVisible(true);
    }
}
