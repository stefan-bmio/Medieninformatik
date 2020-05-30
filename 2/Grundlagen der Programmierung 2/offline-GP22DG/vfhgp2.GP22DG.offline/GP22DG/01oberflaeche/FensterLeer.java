import javax.swing.JFrame;

public class FensterLeer {

    /**
     * @param args
     */
    public static void main(String[] args) {
        JFrame jFenster = new JFrame();
        // damit die Anwendung beendet wird, sobald auf das X
        // des Fensters gedrueckt wird
        jFenster.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // damit das Fenster sichtbar wird
        jFenster.setVisible(true);
    }
}