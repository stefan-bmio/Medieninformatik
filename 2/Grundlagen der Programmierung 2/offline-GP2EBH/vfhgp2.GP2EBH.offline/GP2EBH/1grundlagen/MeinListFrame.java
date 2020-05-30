import java.awt.Component;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;





public class MeinListFrame extends JFrame{
	// Deklaraton der Komponente k
			Komponentenklasse k;
			
			public MeinListFrame(){
				k = new Komponentenklasse(); // Konstruktor aufrufen
				add(k);						 // k in den Frame setzen
				k.addActionListener(new ActionListener(){

					public void actionPerformed(ActionEvent e) {
						// mache das was aE immer auslösen soll						
					}
				}); // schließende Klammer der Parametereingabe
			} // Ende Konstruktor
//}// Ende der Klasse MeinListFrame
			
			
			
			class Komponentenklasse extends Component implements ActionListener{

				@Override
				public void actionPerformed(ActionEvent arg0) {
					// TODO Auto-generated method stub
					
				}
				
				public void addActionListener(ActionListener actionListener){
					
				}
			}

}
