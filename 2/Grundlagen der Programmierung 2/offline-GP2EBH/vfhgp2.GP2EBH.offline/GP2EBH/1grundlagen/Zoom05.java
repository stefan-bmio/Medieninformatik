/**
 *  Zoom05.java
 *  Simuliert einen Zoom - in Gestalt eines leeren Quadrats.
 *  Zwei Buttons erlauben es zu vergroessern und zu verkleinern.
 *  @author Eisele
 *  @version 1.0
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Graphics;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Zoom05 extends Applet implements ActionListener {
    private int xlinks = 35;
    private int yoben  = 55;
    private int breite = 60;  // in dieser Aufgabe ist  hoehe = breite !
    private int schrittweite = 10;
    private Button b1;
    private Button b2;

    public void init() {
        b1 = new Button("  verkleinern   ");
        b2 = new Button("  vergroessern  ");

        add(b1);
        add(b2);
        b1.addActionListener(this);
        b2.addActionListener(this);
    }

    public void actionPerformed(ActionEvent knopfdruck) {
        if (knopfdruck.getSource() == b1) {
            breite = breite - schrittweite ;  // = Aktion a1
		}

        if (knopfdruck.getSource() == b2) {
            breite = breite + schrittweite ;  // = Aktion a2
		}
        repaint();
    }

    public void paint(Graphics gg) {
        zeichne(gg);
    }

    public void zeichne(Graphics g) {
        g.drawRect( xlinks, yoben, breite, breite );
    }
}
