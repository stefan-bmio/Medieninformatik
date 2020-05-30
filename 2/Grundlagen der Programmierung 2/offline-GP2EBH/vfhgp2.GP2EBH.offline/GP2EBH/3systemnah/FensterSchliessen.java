package de.vfh.gp2.ebh;

/**
 *  Erzeugt ein leeres Fenster mit beschriftetem
 *  Titel - der Schliessen-Button funktioniert hier
 *  durch Implementierung der vom WindowListener
 *  vorgeschriebenen Methode windowClosing().
 *  Variante: Lokale Implementierung der
 *  Listener-Schnittstelle in einer inneren Klasse.
 *  
 *  @author skalt
 *  @version 1.0, 04/2011
 */
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import javax.swing.JFrame;

class FensterSchliessen extends JFrame {
    
    //private FensterReaktion fensterReaktion; 
    
    // Konstruktor
    FensterSchliessen(String titel) {
        super(titel);
        // Instanz des Listeners an dem Fenster anmelden
        addWindowListener(new FensterReaktion());
        setSize(350, 100);
        setVisible(true);
    }

    // Main-Methode
    public static void main(String[] args) {
        // FensterSchliessen f = // anonyme FensterSchliessen-Instanz genuegt
        // hier !
        new FensterSchliessen(" FensterSchliessen - geht zu schliessen");
    }
    
    // Empfaengerklasse FensterReaktion wertet die Ereignisse die 
    // das Fensters empfaengt aus.
    class FensterReaktion implements WindowListener {
        @Override
        public void windowActivated(WindowEvent arg0) {
        }

        @Override
        public void windowClosed(WindowEvent arg0) {
        }

        // Ereignis - Fenster schliessen
        @Override
        public void windowClosing(WindowEvent arg0) {
            System.exit(0); // Programm beenden
        }

        @Override
        public void windowDeactivated(WindowEvent arg0) {
        }

        @Override
        public void windowDeiconified(WindowEvent arg0) {
        }

        @Override
        public void windowIconified(WindowEvent arg0) {
        }

        @Override
        public void windowOpened(WindowEvent arg0) {
        }
    }
}
