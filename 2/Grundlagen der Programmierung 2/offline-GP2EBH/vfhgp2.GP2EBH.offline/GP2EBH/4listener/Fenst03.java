/**
 *  Fenst03.java
 *  erzeugt ein leeres Fenster mit beschriftetem
 *  Titel - der Schliesse-Button funktioniert hier
 *  durch Implementierung des WindowAdapters.
 *  @author Eisele
 *  @version 2.0
 */
import java.awt.Frame;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

class Fenst03 extends Frame {

    Fenst03(String titel) {
       super(titel);
       setSize(260, 100);
       setVisible(true);
       MeinWindowAdapter mWa = new MeinWindowAdapter();
       addWindowListener(mWa);
    }

    class MeinWindowAdapter extends WindowAdapter {
       public void windowClosing(WindowEvent e) {
          System.exit(0);
       }
    }

    public static void main(String[] args) {
       //  Fenst03 f =   // anonyme Fenst03-Instanz genuegt hier !
       new Fenst03(" Fenst03 - geht zu schliessen");
    }
}
