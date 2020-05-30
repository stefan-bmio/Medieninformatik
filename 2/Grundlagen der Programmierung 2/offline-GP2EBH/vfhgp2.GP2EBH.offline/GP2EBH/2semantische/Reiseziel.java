package de.vfh.gp2.ebh;

/**
 *  Fenster mit einer Auswahlliste (JList)
 *  auf deren Selektion reagiert wird.
 *  
 *  @author Strehlow
 *  @version 1.0
 *  2010-10-07
 */
import java.awt.Dimension;
import java.awt.FlowLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JScrollPane;
import javax.swing.ListSelectionModel;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class Reiseziel extends JFrame implements ListSelectionListener {
    private JList list;
    private JLabel textLabel;
    private final String textString = "Wählen Sie Ihr Reiseziel aus! "
            + "Sie wollen nach ";

    /**
     * Konstruktor.
     */
    public Reiseziel() {
        // Verwendung eines einfachen FlowLayouts
        getContentPane().setLayout(new FlowLayout());

        // list instanzieren
        list = new JList();
        // Nur ein Wert soll auswaehlbar sein
        list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        // Liste mit Werten fuellen
        String[] listValues = { "Berlin", "Hamburg", "Hannover", "Köln",
                "Frankfurt", "Stuttgart", "München" };
        list.setListData(listValues);

        // Anzahl sichtbarer Listeneintraege festlegen
        list.setVisibleRowCount(4);
        // Liste in eine ScrollPane einfuegen und anzeigen
        JScrollPane pane = new JScrollPane(list);
        add(pane);

        // Aktuelle Instanz soll auf Aenderung der Listen-Auswahl reagieren
        list.addListSelectionListener(this);

        // textLabel instanzieren, Text setzen, und anzeigen
        textLabel = new JLabel();
        textLabel.setText(textString);
        add(textLabel);

        setSize(new Dimension(340, 250));
        setTitle("Reiseziel");
        setLocationRelativeTo(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }

    /**
     * Methode die aufgerufen wird, wenn sich in der Selektion der Liste etwas
     * aendert.
     */
    public void valueChanged(ListSelectionEvent lse) {
        // Selektierten Wert aus der Liste in das Label schreiben
        String stadt = (String) list.getSelectedValue();
        textLabel.setText(textString + stadt);
    }

    // Main methode.
    public static void main(String[] args) {
        Reiseziel reiseziel = new Reiseziel();

    }

}
