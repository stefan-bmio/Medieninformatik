package de.vfh.gp2.ebh;

/**
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den JFrame-Hintergrund rot faerbt.
 *  Variante: Definition einer anonymen Listener-Klasse bei ihrer
 *  Registrierung.
 *  @author Strehlow
 *  2010-09-02
 */
import java.awt.Button;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;

public class KlickAnonym extends JFrame {
    private Button b;
    private Color aktuelleFarbe = Color.red;

    // Konstruktor
    public KlickAnonym() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Button b instanziieren und in Fenster einfügen
        b = new Button(" Vollbremsung ");
        getContentPane().add(b);

        // Anonymen ActionListener erzeugen und bei b anmelden
        b.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent knopfdruck) {
                // Hintergrund des Fensters auf aktuelleFarbe setzen
                getContentPane().setBackground(aktuelleFarbe);
            }
        }); // Achtung - schliessende Klammer zu Methode addActionListener

        setSize(new Dimension(400, 200));
        setTitle("KlickAnonym");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    } // Ende Konstruktor

    // Main-Methode
    public static void main(String[] args) {
        KlickAnonym klickAnonym = new KlickAnonym();
    }
} // Ende-KlickAnonym
