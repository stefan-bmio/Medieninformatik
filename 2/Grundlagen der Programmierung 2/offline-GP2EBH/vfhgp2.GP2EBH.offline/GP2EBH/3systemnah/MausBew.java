/**
 *  MausBew.java
 *  Verfolgt Mauszeigerbewegung und gibt
 *  staendig die aktuellen Koordinaten aus.
 *  @author Eisele
 *  @version 2.0
 */
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.MouseMotionListener;
import java.awt.event.MouseEvent;

public class MausBew extends Applet implements MouseMotionListener {
    private String s = "Mouse-Position: ( 0 | 0 )";
	
    public void init() {
        addMouseMotionListener(this);
    }
	
    public void paint(Graphics g) {
        g.drawString(s, 15, 20);
    }
	
    public void mouseDragged( MouseEvent mE ) {
        int x = mE.getX();
        int y = mE.getY();
        s = "Mouse-Position: ( " + x + " |  " + y + " )";
        repaint();
    }
	
    public void mouseMoved( MouseEvent mE ) {}
}