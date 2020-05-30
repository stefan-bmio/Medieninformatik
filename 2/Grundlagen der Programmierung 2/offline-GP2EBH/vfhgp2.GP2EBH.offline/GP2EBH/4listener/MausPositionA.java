package de.vfh.gp2.ebh;

/**
 *  Gibt bei Maustastendruck die aktuellen
 *  Positionskoordinaten des Mauszeigers aus.
 *  @author Strehlow
 *  @version 1.0
 *  2010-09-03
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MausPositionA extends JFrame {

    private String s = "Mouse-Position: ( 0 | 0 )";
    private JLabel l;

    // Konstruktor
    public MausPositionA() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // Label l instanziieren und dem Fenster hinzufuegen
        l = new JLabel(s);
        getContentPane().add(l);

        // Instanz von MeinMausAdapter erzeugen
        MeinMausAdapter mMa = new MeinMausAdapter();
        // mMa beim Fenster als MouseListener anmelden
        getContentPane().addMouseListener(mMa);

        setSize(new Dimension(400, 200));
        setTitle("MausPosition");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    // Innere Klasse MeinMausAdapter
    class MeinMausAdapter extends MouseAdapter {
        public void mousePressed(MouseEvent mE) {
            // Maus-Koordinaten zwischenspeichern
            int x = mE.getX();
            int y = mE.getY();

            // aktuelle Maus-Position im Label anzeigen
            s = "Mouse-Position: ( " + x + " |  " + y + " )";
            l.setText(s);
        }
    }

    // Main-Methode
    public static void main(String[] args) {
        MausPositionA mausPosition = new MausPositionA();
    }
}
