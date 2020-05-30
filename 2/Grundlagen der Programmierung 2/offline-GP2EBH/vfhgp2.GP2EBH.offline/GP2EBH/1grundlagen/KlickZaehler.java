package de.vfh.gp2.ebh;

/**
 *  Erzeugt Schaltfläche, die beim Anklicken ein Ereignis meldet
 *  @author Strehlow
 *  @version 1.0
 *  2010-09-02
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class KlickZaehler extends JFrame implements ActionListener {
    private int anzahl = 0; // Variable zum Mitzählen der Klicks
    private final String s1 = "bisher haben Sie    ";
    private final String s2 = "  mal auf diesen Knopf gedrueckt !";
    private JButton b;
    private JLabel l; // Label zum Anzeigen des Textes

    // Konstruktor
    public KlickZaehler() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Button b instanziieren und in Fenster einfuegen
        b = new JButton("  Klingel  ");
        getContentPane().add(b);

        // aktuelle Instanz als ActionListener bei b anmelden
        b.addActionListener(this);

        // Label l instanziieren
        l = new JLabel();
        // Text des Labels setzen
        l.setText(s1 + anzahl + s2);
        // Label in Fenster einfuegen
        getContentPane().add(l);

        setSize(new Dimension(400, 200));
        setTitle("KlickZaehler");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent knopfdruck) {
        // Anzahl wird um 1 erhoeht
        anzahl++;
        // Text des Labels wird neu gesetzt
        l.setText(s1 + anzahl + s2);
    }

    // Main-Methode
    public static void main(String[] args) {
        KlickZaehler klickZaehler = new KlickZaehler();
    }
}
