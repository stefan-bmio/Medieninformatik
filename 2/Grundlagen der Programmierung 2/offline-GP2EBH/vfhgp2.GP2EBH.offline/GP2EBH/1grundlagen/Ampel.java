package de.vfh.gp2.ebh;

/**
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den JFrame-Hintergrund rot faerbt.
 *  Variante: Lokale Implementierung der
 *  Listener-Schnittstelle in einer inneren Klasse.
 *  @author  Strehlow
 *  @version 1.0 
 *  2010-09-02
 */
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class Ampel extends JFrame {
    private JButton ajb[];
    private String[] labels = { " rot ", " gelb ", " grün " };

    // Konstruktor
    public Ampel() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // das JButton-Array, FarbReaktiion-Array und Color-Array erzeugen
        ajb = new JButton[3];
        FarbReaktion[] afaerbe = new FarbReaktion[3];
        Color[] ac = { Color.red, Color.yellow, Color.green };

        // Buttons instanziieren und in Fenster einfügen
        for (int i = 0; i < ajb.length; i++) {
            // Buttons mit entsprechenden Beschriftungen
            // instanziieren und ins das Array hinzufuegen
            ajb[i] = new JButton(labels[i]);
            // Komponenten dem Fenster hinzufuegen
            getContentPane().add(ajb[i]);
            // ActionListener instanziieren und bei den Buttons anmelden
            afaerbe[i] = new FarbReaktion(ac[i]);
            ajb[i].addActionListener(afaerbe[i]);
        }

        setSize(new Dimension(400, 200));
        setTitle("Klick Ampel");
        setLocationRelativeTo(null);
        // Die Anwendung beenden, sobald das Kreuz im Fenster geklickt wird.
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    // Main-Methode
    public static void main(String[] args) {
        Ampel ampel = new Ampel();

    }

    // Empfaengerklasse Farbreaktion wechselt die Hintergrundfarbe,
    // nachdem die Schaltflaeche b gedrueckt wurde.
    class FarbReaktion implements ActionListener {
        private Color aktuelleFarbe;

        public FarbReaktion(Color c) {
            aktuelleFarbe = c;
        }

        public void actionPerformed(ActionEvent knopfdruck) {
            getContentPane().setBackground(aktuelleFarbe);
        }
    }
}
