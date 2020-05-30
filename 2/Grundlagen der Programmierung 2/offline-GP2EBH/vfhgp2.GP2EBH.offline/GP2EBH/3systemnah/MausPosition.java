package de.vfh.gp2.ebh;

/**
 *  Gibt bei Maustastendruck die aktuellen
 *  Positionskoordinaten des Mauszeigers aus.
 *  @author Strehlow
 *  @version 1.0
 *  2010-02-09
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class MausPosition extends JFrame implements MouseListener {
    private String s = "Mouse-Position: ( 0 | 0 )";
    private JLabel l;

    // Konstruktor
    public MausPosition() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Label l instanzieren und dem Fenster hinzufügen
        l = new JLabel(s);
        getContentPane().add(l);

        // aktuelle Instanz als MouseListener beim Fenster anmelden
        getContentPane().addMouseListener(this);

        setSize(new Dimension(400, 200));
        setTitle("MausPosition");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    public void mousePressed(MouseEvent mE) {
        // Maus-Koordinaten zwischenspeichern
        int x = mE.getX();
        int y = mE.getY();

        // aktuelle Maus-Position im Label anzeigen
        s = "Mouse-Position: ( " + x + " |  " + y + " )";
        l.setText(s);
    }

    public void mouseClicked(MouseEvent mE) {
    }

    public void mouseEntered(MouseEvent mE) {
    }

    public void mouseExited(MouseEvent mE) {
    }

    public void mouseReleased(MouseEvent mE) {
    }

    // Main-Methode
    public static void main(String[] args) {
        MausPosition mausPosition = new MausPosition();
    }
}
