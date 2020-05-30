import java.awt.Component;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;




public class GlobaleEmpfaengerklasse  extends JFrame implements ActionListener{
	// Deklaraton der Komponente k
		Komponentenklasse k;
	
		public GlobaleEmpfaengerklasse(){
			k = new Komponentenklasse(); // Konstruktor aufrufen
			add(k);						 // k in den Frame setzen
			// GlobaleEmpfaengerKlasse als Listener bei k anmelden
			k.addActionListener(this);
		}

	@Override
	public void actionPerformed(ActionEvent e) {
		// mache das was aE immer auslösen soll
		
	}
	
	class Komponentenklasse extends Component implements ActionListener{

		@Override
		public void actionPerformed(ActionEvent arg0) {
			// TODO Auto-generated method stub
			
		}
		
		public void addActionListener(GlobaleEmpfaengerklasse g){
			
		}
	}
	

}
