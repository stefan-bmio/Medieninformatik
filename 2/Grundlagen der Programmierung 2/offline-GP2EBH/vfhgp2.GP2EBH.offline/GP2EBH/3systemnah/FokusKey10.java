/**
* FokusKey10.java
* Applet reagiert auf Tastatur- und Fokusereignisse.
* @author Kraft
*/
import java.awt.Button;
import java.awt.Graphics;
import java.awt.event.FocusListener;
import java.awt.event.KeyListener;
import java.awt.event.FocusEvent;
import java.awt.event.KeyEvent;
import java.applet.Applet;

public class FokusKey10 extends Applet implements FocusListener, KeyListener {
    private int xlinks=150;
    private int yoben=150;
    private int radius = 10;
    private int schrittweite=10;
    private Button a = new Button("Button A");
    private Button b = new Button("Button B");

    public void init() {
        add(a);
        a.addFocusListener(this);
        a.addKeyListener(this);
        add(b);
        b.addFocusListener(this);
        b.addKeyListener(this);
    }

    public void paint(Graphics g){
        g.drawOval(xlinks, yoben, radius, radius);
    }

    /* Die Methode focusGained() wird aufgerufen, wenn entweder
    Button A oder Button B den Focus erhaelt. */
    public void focusGained(FocusEvent e){
        if ((e.getComponent()).equals(a)) {
            System.out.println("Ich bin Button A. Ich habe den Focus.");
        }
        if ((e.getComponent()).equals(b)) {
            System.out.println("Ich bin Button B. Jetzt hab ich den Focus.");
        }
    }

    /* Wird eine der Tasten 'r'=rechts, 'l'=links, 'o'=oben und 'u'=unten
    gedrueckt, dann bewegt sich der Kreis in die entsprechende Richtung. */
    public void keyPressed(KeyEvent e) {
        if (e.getKeyChar()=='r') {
            xlinks = xlinks + schrittweite;
        }
        if (e.getKeyChar()=='l') {
            xlinks = xlinks - schrittweite;
        }
        if (e.getKeyChar()=='u') {
            yoben = yoben + schrittweite;
        }
        if (e.getKeyChar()=='o') {
            yoben = yoben - schrittweite;
        }
        repaint();
    }

    // Methoden, die leer uebernommen werden muessen (Interface-Formzwang)
    public void focusLost(FocusEvent e) {}
    public void keyTyped(KeyEvent e) {}
    public void keyReleased(KeyEvent e) {}
}