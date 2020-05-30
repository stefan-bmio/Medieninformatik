/**
 *  MausPos.java
 *  Gibt bei Maustastendruck die aktuellen
 *  Positionskoordinaten des Mauszeigers aus.
 *  @author Eisele
 *  @version 2.0
 */
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

public class MausPos extends Applet implements MouseListener {
    private String s = "Mouse-Position: ( 0 | 0 )";
	
    public void init() {
        addMouseListener(this);
    }
	
    public void paint(Graphics g) {
        g.drawString(s, 15, 20);
    }
	
    public void mousePressed(MouseEvent mE) {
        int x = mE.getX();
        int y = mE.getY();
        s = "Mouse-Position: ( " + x + " |  " + y + " )";
        repaint();
    }
	
    public void mouseClicked(MouseEvent mE) {}
    public void mouseEntered(MouseEvent mE) {}
    public void mouseExited(MouseEvent mE) {}
    public void mouseReleased(MouseEvent mE) {}
}
