package de.vfh.gp2.ebh;

import java.awt.Button;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionListener;

import javax.swing.JFrame;

public class KlickLambda extends JFrame {
    private Button b;
    private Color aktuelleFarbe = Color.red;

    public KlickLambda() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        b = new Button(" Vollbremsung ");
        getContentPane().add(b);

        // Klammer und Typ werden weggelassen, da es nur einen Parameter gibt
        // und einen einzigen Methoden Aufruf ohne Rueckgabe gibt
        b.addActionListener(e -> getContentPane().setBackground(aktuelleFarbe));

        setSize(new Dimension(400, 200));
        setTitle("KlickLambda");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    } // Ende Konstruktor

    // Main-Methode
    public static void main(String[] args) {
        KlickLambda klick = new KlickLambda();
    }

}
