package sb.net.dev.level.view;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

public class MapView extends JPanel {

    private Validator validator = new ScrollValidator();
    private JLabel map;

    public MapView() {
        setLayout(new BorderLayout());
        try {
            map = new JLabel(new ImageIcon(ImageIO.read(new File("/Users/stefan/Downloads/steppe.jpg"))));
            map.setAutoscrolls(true);
            add(new JScrollPane(map));

            map.addMouseListener(ma);
            map.addMouseMotionListener(ma);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public Dimension getPreferredSize() {
        return new Dimension(200, 200);
    }

}
