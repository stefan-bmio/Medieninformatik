import java.awt.Graphics;
import javax.swing.JApplet;

/**
 * Demonstriert die Ausgabe von Text in Form einer Gruss-Botschaft.
 * 
 * @author Görlitz, Eisele, Rapsch, Merceron
 * @version 1.0
 */
public class GrussApplet extends JApplet {
    private String namen;

    /**
     * Initalisiert das Attribut.
     */
    public void init() {
        namen = getParameter("name");
    }

    /**
     * Schreibt den Text "Gruss an " + Namen, der dem Konstruktor 
     * uebergeben wurde, an die Stelle 100, 50.
     */
    @Override
    public void paint(Graphics g) {
        super.paint(g); // empfohlen, siehe javadoc der paint-
                        // Methode der Klasse java.awt.Window
        g.drawString("Gruss an " + namen, 100, 50);
    }
}