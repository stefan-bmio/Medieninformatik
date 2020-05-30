package de.vfh.gp2.ebh;

/**
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den JFrame-Hintergrund rot faerbt.
 *  Variante: Globale Implementierung der Listener-Schnittstelle
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

public class KlickAL extends JFrame implements ActionListener {
    private JButton b;
    private Color aktuelleFarbe = Color.red;

    // Konstruktor
    public KlickAL() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Button b instanziieren und in Fenster einfügen
        b = new JButton(" Vollbremsung ");
        getContentPane().add(b);

        // aktuelle Instanz als ActionListener bei b anmelden
        b.addActionListener(this);

        setSize(new Dimension(400, 200));
        setTitle("KlickAL");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent knopfdruck) {
        // Hintergrund des Fensters auf aktuelleFarbe setzen
        getContentPane().setBackground(aktuelleFarbe);
    }

    // Main-Methode
    public static void main(String[] args) {
        KlickAL klick = new KlickAL();
    }
}
