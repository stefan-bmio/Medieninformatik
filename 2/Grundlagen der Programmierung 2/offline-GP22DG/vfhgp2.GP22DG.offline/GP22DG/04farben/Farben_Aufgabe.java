import java.awt.Color;
import java.awt.Graphics;
import java.util.Random;
import javax.swing.JFrame;

/**
 * Dreiecke der gleichen Groesse werden nebeneinander ausgegeben.
 * 
 * @author A. Merceron
 * 
 */

public class Farben_Aufgabe extends JFrame {
    // Alle Farben_Aufgabe-Objekte teilen diese Daten
    // Punkt oben
    private static final int X1 = 40;
    private static final int Y1 = 40;
    // plus oder minus SETX1 für die zwei Punkte unten
    private static final int SETX1 = 15;
    // plus SETY1 fuer die zwei Punkte unten
    private static final int SETY1 = 20;
    // Versetzung fuer das neue Dreieck
    private static final int NEUESDREICK = 60;
    private static final Color BACKGROUNDFARBE = Color.BLUE;
    private static final Color SCHRIFTFARBE = Color.BLACK;

    private int anzahlDreiecke;

    /**
     * Erstellt ein Fenster mit angegebener Breite, Hoehe und
     * intialisiert die Anzahl der Dreiecke.
     */
    public Farben_Aufgabe(int anzahlDreiecke, int breite, int hoehe) {
        this.anzahlDreiecke = anzahlDreiecke;
        setSize(breite, hoehe);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Zeichnet Dreicke gleicher Groesse nebeneinander.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        getContentPane().setBackground(BACKGROUNDFARBE);
        Random r = new Random();
        int x1 = X1;
        int y1 = X1;
        int x2 = x1 - SETX1;
        int y2 = y1 + SETY1;
        int x3 = x1 + SETX1;
        for (int i = 1; i < (anzahlDreiecke + 1); i++) {
            g.setColor(new Color(r.nextInt(256), r.nextInt(256), r.nextInt(256)));
            g.drawLine(x1, y1, x2, y2);
            g.drawLine(x1, y1, x3, y2);
            g.drawLine(x2, y2, x3, y2);
            g.setColor(SCHRIFTFARBE);
            g.drawString("Dreieck " + i, x2, y2 + 15);
            x1 += NEUESDREICK;
            x2 += NEUESDREICK;
            x3 += NEUESDREICK;
        }
    }

    public static void main(String[] args) {
        new Farben_Aufgabe(3, 400, 200);
    }

}