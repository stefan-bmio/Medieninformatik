import java.awt.Component;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;


public class MeinFrame extends JFrame{
	
	// Deklaraton der Komponente k
	Komponentenklasse k;
	// Deklaration der Listener-Instanz lausche
	LokaleEmpfaengerklasse lausche;
	public MeinFrame() {
		// Konstruktor der Komponente k aufrufen
		k = new Komponentenklasse();
		// k in den Frame setzen
		add(k);
		//Konstruktoraufruf der Listenerklasse
		lausche = new LokaleEmpfaengerklasse();
		// lausche als Listener bei k anmelden
		k.addActionListener(lausche);
	}
	
	class LokaleEmpfaengerklasse implements ActionListener{
		public LokaleEmpfaengerklasse(){ // Konstruktor
			// Konstruktor Anweisungen
		}

		
		public void actionPerformed(ActionEvent arg0) {
			// mache das was aE immer auslösen soll
			
		}
	}
	
	class Komponentenklasse extends Component implements ActionListener{

		@Override
		public void actionPerformed(ActionEvent arg0) {
			// TODO Auto-generated method stub
			
		}
		
		public void addActionListener(LokaleEmpfaengerklasse l){
			
		}
	}
}