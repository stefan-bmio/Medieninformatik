/**
 *  Fenst00.java
 *  Erzeugt ein leeres Fenster mit beschriftetem
 *  Titel - ohne Reaktionsfaehigkeit des Schliesse-
 *  Knopfes rechts-oben im Fensterrahmen.
 *  @author Eisele
 *  @version 2.0
 */
import java.awt.Frame;

class Fenst00 extends Frame {

    Fenst00(String titel) {
        super(titel);
        setSize(260, 100);
        setVisible(true );
    }
	
    public static void main(String[] args) {
        Fenst00 f = new Fenst00(" Fenst00 - nicht zu schliessen");
    }
}
