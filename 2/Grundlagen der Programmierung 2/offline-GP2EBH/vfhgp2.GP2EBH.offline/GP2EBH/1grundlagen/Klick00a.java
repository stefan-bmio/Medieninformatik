/**
 *  Klick00a.java
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den Applet-Hintergrund rot faerbt.
 *  Variante: Definition einer anonymen Listener-Klasse bei ihrer
 *  Registrierung.
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Color;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Klick00a extends Applet {
    private Button b;
    private Color aktuelleFarbe = Color.red;

    public void init() {
        b  = new Button(" Vollbremsung ");
        add( b );

        b.addActionListener(  new ActionListener() {
            public void actionPerformed( ActionEvent knopfdruck ) {
                if (knopfdruck.getSource() == b) {
                    setBackground( aktuelleFarbe);
			    }
                repaint();
            }
        }); // Achtung - schliessende Klammer zu Methode addActionListener
    } // ende-init()
}  // ende-Klick00a
