package de.vfh.gp2.ebh;

/**
 *  Verfolgt Mauszeigerbewegung und gibt
 *  staendig die aktuellen Koordinaten aus.
 *  Variante: Definition einer anonymen Listener-Klasse bei ihrer
 *  Registrierung.
 *  
 *  @author skalt
 *  @version 1.1, 04/2011
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MausBewegung extends JFrame {
    private String s = "Mouse-Position: ( 0 | 0 )";
    private JLabel l;

    // Konstruktor
    public MausBewegung() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Label l instanzieren und dem Fenster hinzufügen
        l = new JLabel(s);
        getContentPane().add(l);

        // Aktuelle Instanz als MouseMotionListener beim Fenster anmelden
        getContentPane().addMouseMotionListener(new MouseMotionListener() {

            /**
             * Maustaste gedrueckt - Methode wird aufgerufen wenn die Maustaste
             * gedruckt wird
             */
            @Override
            public void mouseDragged(MouseEvent mE) {
                // Maus-Koordinaten zwischenspeichern
                int x = mE.getX();
                int y = mE.getY();
                s = "Mouse-Position: ( " + x + " |  " + y + " )";

                // aktuelle Maus-Position im Label anzeigen
                l.setText(s);
            }

            /** Mausbewegung - Methode wird aufgerufen wenn die Maus bewegt wird */
            @Override
            public void mouseMoved(MouseEvent mE) {
                // Keine Funktionalitaet
            }
        });

        setSize(new Dimension(400, 200));
        setTitle("MausBewegung");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    // Main-Methode
    public static void main(String[] args) {
        MausBewegung mausBewegung = new MausBewegung();
    }
}