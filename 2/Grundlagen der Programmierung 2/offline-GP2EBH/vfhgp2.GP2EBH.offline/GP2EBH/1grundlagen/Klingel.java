package de.vfh.gp2.ebh;

/**
 *  Erzeugt Schaltflaeche, die beim Anklicken ein Ereignis meldet
 *  @author  Strehlow
 *  @version 1.0
 *  2010-09-03
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class Klingel extends JFrame implements ActionListener {

    // Text der zu Beginn angezeigt wird
    private final String s1 = "Drücken Sie kräftig den Klingelknopf !";
    // s2 mit Html-Markup, um mehrzeiligen Text in JLabel anzuzeigen
    private final String s2 = "<html>Sie haben viel zu stark gedr&uuml;ckt!<br />"
            + "Nun ist die Klingel defekt - Das war's!</html>";

    private JLabel l; // Label zur Anzeige des Textes
    private JButton b;

    // Konstruktor
    public Klingel() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Button b instanziieren und in Fenster einfuegen
        b = new JButton("  Klingel  ");
        getContentPane().add(b);

        // Label l instanziieren und in Fenster einfügen
        l = new JLabel(s1);
        getContentPane().add(l);

        // aktuelle Instanz als ActionListener bei b anmelden
        b.addActionListener(this);

        setSize(new Dimension(300, 200));
        setTitle("Klingel");
        setLocationRelativeTo(null);
        // Die Anwendung beenden, sobald das Kreuz im Fenster geklickt wird.
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent knopfdruck) {
        // Text des Labels l auf s2 setzen.
        l.setText(s2);
    }

    // Main-Methode
    public static void main(String[] args) {
        Klingel klingel = new Klingel();
    }

}
