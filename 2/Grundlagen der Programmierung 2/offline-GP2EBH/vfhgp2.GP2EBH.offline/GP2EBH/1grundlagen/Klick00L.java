/**
 *  Klick00L.java
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den Applet-Hintergrund rot faerbt.
 *  Variante: Lokale Implementierung der
 *  Listener-Schnittstelle in einer inneren Klasse.
 *  @author  Eisele
 *  @version 1.0
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Klick00L extends Applet {
    Button b;
    FarbReaktion faerbeRot;

    public void init() {
        b = new Button(" Vollbremsung ");
        add(b );
        faerbeRot = new FarbReaktion(Color.red);
        b.addActionListener(faerbeRot);
    }

    //  Empfaengerklasse Farbreaktion wechselt die Hintergrundfarbe,
    //  nachdem die Schaltflaeche b  gedrueckt wurde.
    class FarbReaktion implements ActionListener {
        private Color aktuelleFarbe;

        public FarbReaktion(Color c) {
            aktuelleFarbe = c;
        }

        public void actionPerformed(ActionEvent knopfdruck) {
            if (knopfdruck.getSource() == b) {
                setBackground(aktuelleFarbe);
                repaint();
            }
        }
    }
}