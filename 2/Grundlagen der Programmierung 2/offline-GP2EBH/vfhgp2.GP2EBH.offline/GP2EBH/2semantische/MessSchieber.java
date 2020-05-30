package de.vfh.gp2.ebh;

/**
 * Fenster mit einer Scrollbar auf deren Verschiebung reagiert wird.
 * Variante: Listener implemented as a lambda expression

 * @author skalt
 * @version 1.1, 04/2011 revised with lambda expression 12/2015
 */
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.Scrollbar;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JScrollBar;

public class MessSchieber extends JFrame {
	private JScrollBar scrollbar = null;
	private int schieberWert = 10;

	private final String[] texts = {
			"Bewegen Sie den Schieberegler auf der Bildlaufleiste: ",
			"Sein aktueller Abstand vom linken Rand ", "misst derzeit ",
			" % von der Gesamtlaenge." };

	private JLabel textLabel1, textLabel2, textLabel3;

	/**
	 * Konstruktor.
	 */
	public MessSchieber() {
		// 6 lines, 1 column, vertical and horizontal gaps both 5
		getContentPane().setLayout(new GridLayout(6, 1, 5, 5));

		// scrollbar erzeugen und hinzufuegen
		scrollbar = new JScrollBar(Scrollbar.HORIZONTAL, 10, 1, 0, 101);
		add(scrollbar);

		// AdjustmentListener is a functional interface
		// the method is implemented as a lambda expression
		scrollbar.addAdjustmentListener(adjE -> {
			if (adjE.getSource() == scrollbar) { // duerfte hier fehlen!
					schieberWert = scrollbar.getValue();
				}
				// Wert der Scrollbar in Label anzeigen
				textLabel3.setText(texts[2] + schieberWert + texts[3]);
			}); // Achtung - schliessende Klammer zu Methode addActionListener

		textLabel1 = new JLabel(texts[0]);
		textLabel2 = new JLabel(texts[1]);
		textLabel3 = new JLabel(texts[2] + schieberWert + texts[3]);
		add(textLabel1);
		add(textLabel2);
		add(textLabel3);

		setSize(new Dimension(320, 150));
		setTitle("MessSchieber");
		setLocationRelativeTo(null);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setVisible(true);
	}

	// Main methode.
	public static void main(String[] args) {
		MessSchieber messSchieber = new MessSchieber();
	}
}
