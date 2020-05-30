

/**
 *  Erzeugt Schaltflaeche, die beim Anklicken
 *  den JFrame-Hintergrund zwischen eine vordefinierte Farbe 
 *  und die Farbe vom Objekt wechselt.
 *  Variante: Lokale Implementierung der
 *  Listener-Schnittstelle in einer inneren Klasse.
 *  @author  Strehlow
 *  @version 1.0 
 *  2010-09-02
 */
import java.awt.Color;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;

public class Klick2 extends JFrame {
	// alle Listener benutzen dieselbe Farbe daher das Klassen-Attribut
	private static final Color ROT = Color.RED;

	Color farbe;

	/**
	 * erzeugt ein Klick-Objekt mit den angegebenen Hintergrundsfarbe
	 * @param farbe, die Hintergrundsfarbe
	 */
    public Klick2(Color farbe) {
    	this.farbe = farbe;
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Button b instanziieren und in Fenster einfuegen
        JButton b = new JButton(" Vollbremsung ");
        getContentPane().add(b);
        getContentPane().setBackground(this.farbe);

        // faerbeRot instanziieren und als ActionListener bei b anmelden
        FarbReaktion faerbeRot = new FarbReaktion();
        b.addActionListener(faerbeRot);

        setSize(new Dimension(400, 200));
        setTitle("Klick");
        setLocationRelativeTo(null);
        // Die Anwendung beenden, sobald das Kreuz im Fenster geklickt wird.
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    // Main-Methode
    public static void main(String[] args) {
        Klick2 klick = new Klick2(Color.YELLOW);

    }

    // Empfaengerklasse Farbreaktion wechselt die Hintergrundfarbe,
    // nachdem die Schaltflaeche b gedrueckt wurde.
    // Diese Klasse kann nicht mit static deklariert werden
    // da der Aufruf getContentPane() auf das Klick-Objekt this 
    // der äusseren Klasse zugreift.
    // Ausserdem die Klasse greift auch auf das Objekt-Attribut farbe.
    private class FarbReaktion implements ActionListener {

        public void actionPerformed(ActionEvent knopfdruck) {
            // Hintergrund des JFrame-Objektes wechseln
            Color c = getContentPane().getBackground();
            if (c.equals(ROT)) {
            	getContentPane().setBackground(farbe);
            } else {
            	getContentPane().setBackground(ROT);
            }
        }
    }

}
