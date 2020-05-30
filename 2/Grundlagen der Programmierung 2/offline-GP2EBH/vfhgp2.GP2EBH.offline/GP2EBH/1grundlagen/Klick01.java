/**
 *  Klick01.java
 *  Erzeugt Schaltflaeche, die beim Anklicken ein Ereignis meldet
 *  @author  Eisele
 *  @version 1.0
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Graphics;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Klick01 extends Applet implements ActionListener {
    final int x = 35;
    final int y = 50;
    final int zeilenabstand = 30;

    final String s1 = "Druecken Sie kraeftig den Klingelknopf !";
    final String s2 = "Sie haben viel zu stark gedrueckt !";
    final String s3 = "Nun ist die Klingel defekt - Das war's !";

    Button b;
    boolean esWurdeGedrueckt = false;

    public void init() {
        b = new Button("  Klingel  ");
        add(b);
        b.addActionListener(this);
    }

    public void paint(Graphics g) {
        if (esWurdeGedrueckt) {
      	    g.drawString(s2, x, y);
            g.drawString(s3, x, y + zeilenabstand);
        } else {
            g.drawString( s1, x, y );
		}
    }

    public void actionPerformed( ActionEvent knopfdruck ) {
        if (knopfdruck.getSource() == b) {
            esWurdeGedrueckt = true ;
		}
        repaint();
    }
}

