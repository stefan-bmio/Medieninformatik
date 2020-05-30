package de.vfh.gp2.gbs.cardLayout;

import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

/**
 * Einfache Panelklasse mit einer Beschriftung
 * und einem Textfeld.
 * 
 * @author Agathe Merceron
 * @version 1.0, 03/2011
 */
public class JPanel1 extends JPanel {
	/**
	 * Konstruktor.
	 */
    public JPanel1(){
        // Beschriftung erzeugen und einfuegen
		JLabel label = new JLabel("Panel 1");
		add(label);
		// Textfeld einfuegen
		JTextField textField = new JTextField("Textfeld ");
		add(textField);
	}
}
