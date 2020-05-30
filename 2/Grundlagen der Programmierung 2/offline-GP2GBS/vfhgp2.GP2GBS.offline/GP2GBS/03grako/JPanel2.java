package de.vfh.gp2.gbs.cardLayout;

import javax.swing.JLabel;
import javax.swing.JPanel;

/**
 * Einfache Panelklasse mit zwei Beschriftungen.
 * 
 * @author Agathe Merceron
 * @version 1.0, 03/2011
 */
public class JPanel2 extends JPanel {
	
    private JLabel label2;
	
    /**
     * Konstruktor.
     * @param s Beschriftungstext für zweites Label
     */
	public JPanel2(String s){
	    // Erste Beschriftung erzeugen und einfuegen
		JLabel label1 = new JLabel("Panel 2");
		add(label1);
		// Zweite Beschriftung erzeugen und einfuegen
		label2 = new JLabel(s);
		add(label2);
	}
	
	/**
	 * Setter für den Text von label2.
	 * @param s Beschriftungstext
	 */
	public void setL(String s){
		label2.setText(s);
	}
}
