package de.vfh.gp2.gbs.cardLayout;

import java.awt.CardLayout;
import java.awt.Container;

import javax.swing.JFrame;

/**
 * Klasse zum Anzeigen verschiedener JPanels die in einem CardLayout 
 * enthalten sind. Die Anzeige erfolgt gesteuert ueber einen Thread.
 * 
 * @author Agathe Merceron
 * @version 1.0, 03/2011
 */
public class TesteCardLayout extends JFrame {
    private Container c;
    // die 2 Panel die sich abwechseln sollen
    private JPanel1 panel1;
    private JPanel2 panel2;
    // fuer den Zugriff auf die Panel
    final private String SPANEL1 = "Panel1";
    final private String SPANEL2 = "Panel2";;

    /**
     * Konstruktor.
     */
    public TesteCardLayout() {
        c = getContentPane();
        // Layoutmanager setzen
        c.setLayout(new CardLayout());
        // Panels erzeugen und dem Fenster hinzufuegen
        panel1 = new JPanel1();
        panel2 = new JPanel2("start");
        c.add(panel1, SPANEL1);
        c.add(panel2, SPANEL2);
        // Fenstereigenschaften setzen
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // Fenster anzeigen
        setVisible(true);
    }

    /**
     * Main-Methode.
     * 
     * @param args Uebergabeparameter
     * @throws InterruptedException
     */
    public static void main(String[] args) throws InterruptedException {
        // Instanz der Klasse erzeugen
        TesteCardLayout tcl = new TesteCardLayout();
        // Die 2 Panels 10 mal abwechselnd zeigen
        for (int i = 0; i < 10; i++) {
            // Der main-Thread fuehrt keine Befehle fuer 2000 Millisekunden
            Thread.sleep(2000);
            // Das 2. Panel anzeigen
            CardLayout cl = (CardLayout) tcl.c.getLayout();
            cl.show(tcl.c, tcl.SPANEL2);
            // Der main Thread fuehrt keine Befehle fuer 2000 Millisekunden
            Thread.sleep(2000);
            // Das 1. Panel anzeigen
            cl = (CardLayout) tcl.c.getLayout();
            cl.show(tcl.c, tcl.SPANEL1);
        }
    }
}
