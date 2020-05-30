import javax.swing.JFrame;

public class ErstesFenster extends JFrame {
    public ErstesFenster() {
        setTitle("Mein erstes Fenster");
        setSize(400, 300);
        // damit die Anwendung beendet wird, sobald auf das X
        // des Fensters gedrueckt wird
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // damit das Fenster sichtbar wird
        setVisible(true);
    }
}