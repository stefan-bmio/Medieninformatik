/**
 *  Fenst02.java
 *  Erzeugt ein leeres Fenster mit beschriftetem
 *  Titel - der Schliesse-Button funktioniert hier
 *  durch Implementierung der vom WindowListener
 *  vorgeschriebenen Methode windowClosing().
 *  @author Eisele
 *  @version 2.0
 */
import java.awt.Frame;
import java.awt.event.WindowListener;
import java.awt.event.WindowEvent;

class Fenst02 extends Frame implements WindowListener {

    //Konstruktor
    Fenst02( String titel ) {
        super( titel );
        setSize( 260, 100 );
        setVisible( true );
        addWindowListener( this );
    }
    
    //Ereignis - Fenster schliessen  
    public void windowClosing(WindowEvent e) {
        System.exit(0); //Programm beenden
    }
  
    //leere WindowListener Methoden
    public void windowIconified(WindowEvent e) {}
    public void windowOpened(WindowEvent e) {}
    public void windowClosed(WindowEvent e) {}
    public void windowDeiconified(WindowEvent e) {}
    public void windowActivated(WindowEvent e) {}
    public void windowDeactivated(WindowEvent e) {}
  
    //Main-Methode
    public static void main( String[] args )
    {
        // Fenst02 f =   // anonyme Fenst02-Instanz genuegt hier !
        new Fenst02(" Fenst02 - geht zu schliessen");
    }
}
