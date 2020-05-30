package LE08_grafischeBO;

import java.awt.Dimension;
import javax.swing.JFrame;

/**
 * Erstellen eines leeren Fensters und anzeigen auf dem Bildschirm.
 * 
 * @author skalt
 * @version 1.0, 07/2010
 */
public class ErstesFenster {

    public static void main(String[] args) {
        JFrame erstesFenster = new JFrame();
        // Fenstergroesse festlegen
        erstesFenster.setSize(new Dimension(400, 300));
        // Fenstertitel setzen
        erstesFenster.setTitle("Erstes Fenster");
        // Fensterposition auf die Mitte des Bildschirm festlegen
        erstesFenster.setLocationRelativeTo(null);
        // Fenster sichtbar machen
        erstesFenster.setVisible(true);
    }
}
