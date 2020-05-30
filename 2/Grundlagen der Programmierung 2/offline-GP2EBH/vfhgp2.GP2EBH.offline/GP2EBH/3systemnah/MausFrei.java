package de.vfh.gp2.ebh;

/**
 * Zeichnet bei Druck auf die Maus ein 3x3 Pixel Oval
 * an die aktuelle Position des Mauszeigers.
 *  @author Strehlow
 *  @version 1.0
 *  2010-02-09
 */
import java.awt.Dimension;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class MausFrei extends JFrame implements MouseMotionListener {
    private JPanel p;

    // Konstruktor
    public MausFrei() {
        p = new JPanel();

        // Panel dem Fenster hinzufuegen
        getContentPane().add(p);

        p.addMouseMotionListener(this);

        setSize(new Dimension(300, 300));
        setTitle("MausFrei");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    @Override
    public void mouseDragged(MouseEvent me) {
        // Mit Hilfe des Graphics-Objektes einen gefuellten Kreis
        // an der aktuellen Maus-Position auf das Panel zeichnen
        p.getGraphics().fillOval(me.getX(), me.getY(), 3, 3);
    }

    // muss implementiert werden, erfuellt aber keine Funktion
    @Override
    public void mouseMoved(MouseEvent arg0) {
    }

    // Main-Methode
    public static void main(String[] args) {
        MausFrei mausfrei = new MausFrei();
    }
}
