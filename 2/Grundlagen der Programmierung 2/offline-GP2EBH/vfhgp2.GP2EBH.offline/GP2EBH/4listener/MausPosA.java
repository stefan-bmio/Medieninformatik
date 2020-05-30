/**
 *  MausPosA.java
 *  Gibt bei Maustastendruck die aktuellen
 *  Positionskoordinaten des Mauszeigers aus.
 *  @author Eisele
 *  @version 2.0
 */
import java.applet.Applet;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class MausPosA extends Applet
{
    private String s = "Mouse-Position: ( 0 | 0 )";
	
    public void init()  {
        MeinMausAdapter mMa = new MeinMausAdapter();
        addMouseListener( mMa );
    }
	
    public void paint(Graphics g) {
        g.drawString(s, 15, 20);
    }
  
    class MeinMausAdapter extends MouseAdapter {
        public void mousePressed(MouseEvent mE) {
            int x = mE.getX();
            int y = mE.getY();
            s = "Mouse-Position: ( " + x + " |  " + y + " )";
            repaint();
        }
    }
}

