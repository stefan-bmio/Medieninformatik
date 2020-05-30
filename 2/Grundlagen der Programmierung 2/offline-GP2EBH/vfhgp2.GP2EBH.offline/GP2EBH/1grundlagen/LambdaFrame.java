import java.awt.Component;
import java.awt.Event;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JFrame;



public class LambdaFrame extends JFrame {
	 private KomponentKlasse k;
	 	  
	    public LambdaFrame() {
	        k = new  KomponentKlasse();
	        add(k);

	        // Klammer und Typ werden weggelassen, 
	        // da es nur einen Parameter gibt       
	        k.addActionListener(e -> { 
	        	// Implementierung der Methode 
	        	// actionPerformed
	        	});                               
	    }
	        
	        class KomponentKlasse extends Component implements ActionListener{

				@Override
				public void actionPerformed(ActionEvent arg0) {
					// TODO Auto-generated method stub
					
				}
				
				public void addActionListener(ActionListener actionListener){
					
				}
			}
}


