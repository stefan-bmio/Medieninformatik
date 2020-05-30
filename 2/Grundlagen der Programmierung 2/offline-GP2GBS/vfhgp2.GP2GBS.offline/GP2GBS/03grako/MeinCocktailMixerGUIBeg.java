package de.vfh.gp2.gbs.cocktailmixer;

/**
 * Grafische Benutzeroberflaeche fuer das Cocktailmixer Programm.
 * 
 * @author skalt
 * @version 1.0, 07/2010
 */
import java.awt.Dimension;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class MeinCocktailMixerGUIBeg {

    /**
     * Main-Methode.
     * 
     * @param args
     *            Uebergabeparameter
     */
    public static void main(String[] args) {
        MeinCocktailMixerGUIBeg cMixer = new MeinCocktailMixerGUIBeg();
        // Benutzeroberflaeche initialisieren
        cMixer.initGUI();
    }

    /**
     * Methode zum Initialisieren der Benutzeroberflaeche (GUI).
     */
    private void initGUI() {
        JFrame cMixerFenster = new JFrame();
        // Fenstergroesse festlegen
        cMixerFenster.setSize(new Dimension(600, 400));
        // Fenstertitel setzen
        cMixerFenster.setTitle("Mein CocktailMixer");
        // Fensterposition auf die Mitte des Bildschirm festlegen
        cMixerFenster.setLocationRelativeTo(null);
        // Anwendung beim Betaetigen des Schliessen-Buttons beenden
        cMixerFenster.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // BegruessungsPanel erzeugen und anzeigen
        JPanel start = erzeugeBegruessungsPanel();
        // Panel dem Fenster hinzufuegen
        cMixerFenster.getContentPane().add(start); 
        // Fenster sichtbar machen
        cMixerFenster.setVisible(true);
    }

    /**
     * Methode zum Ereugen eines BegruessungsPanels mit Text und Bild.
     * 
     * @return JPanel BegruessungsPanel.
     */
    private static JPanel erzeugeBegruessungsPanel() {
        // Neuen JPanel Conteiner erzeugen
        JPanel startPanel = new JPanel();
        // Begruessungstext erzeugen und in Container einfuegen
        JLabel begText = new JLabel("Willkommen beim CocktailMixer");
        startPanel.add(begText);
        // Bildkomponente aus uebergebener Grafik erzeugen und in Container
        // einfuegen
        JLabel begBild = new JLabel(new ImageIcon("AbbCocktail.gif"));
        startPanel.add(begBild);
        // Container zurueckgeben
        return startPanel;
    }
}