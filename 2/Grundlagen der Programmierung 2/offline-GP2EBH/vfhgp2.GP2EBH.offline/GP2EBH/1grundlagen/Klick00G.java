/**
 *  Klick00G.java
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den Applet-Hintergrund rot faerbt.
 *  Variante: Globale Implementierung der Listener-Schnittstelle
 *  @author  Eisele
 *  @version 1.0
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Klick00G extends Applet implements ActionListener {
    Button b;
    Color aktuelleFarbe = Color.red;

    public void init() {
        b = new Button(" Vollbremsung ");
        add(b);
        b.addActionListener( this );
    }

    public void actionPerformed( ActionEvent knopfdruck ) {
        if (knopfdruck.getSource() == b) {
            setBackground(aktuelleFarbe);
		}
        repaint();
    }
}
