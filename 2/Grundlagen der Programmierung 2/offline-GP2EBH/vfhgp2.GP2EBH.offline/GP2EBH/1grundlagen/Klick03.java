/**
 *  Klick03.java
 *  Erzeugt Schaltfläche, die beim Anklicken ein Ereignis meldet
 *  @author Eisele
 *  @version 1.0
 */
import java.applet.Applet;
import java.awt.Button;
import java.awt.Graphics;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Klick03 extends Applet implements ActionListener {
    final int x = 35;
    final int y = 50;
    int anzahl = 0;
    final String s1 = "bisher haben Sie    ";
    final String s2 = "  mal auf diesen Knopf gedrueckt !" ;
    Button b;

    public void init() {
        b = new Button("  Klingel  ");
        add( b );
        b.addActionListener(this);
    }

    public void paint(Graphics g) {
        g.drawString(s1 + anzahl + s2 , x , y);
    }

    public void actionPerformed(ActionEvent knopfdruck) {
        anzahl++;
        repaint();
    }
}
