import javax.swing.JFrame;

public class MeinErstesFenster {

    /**
     * @param args
     */
    public static void main(String[] args) {
        JFrame jFenster = new JFrame();
        jFenster.setTitle("MeinErstesFenster");
        jFenster.setSize(400, 300);
        // damit die Anwendung beendet wird, sobald auf das X
        // des Fensters gedrueckt wird
        jFenster.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        // damit das Fenster sichtbar wird
        jFenster.setVisible(true);
    }
}