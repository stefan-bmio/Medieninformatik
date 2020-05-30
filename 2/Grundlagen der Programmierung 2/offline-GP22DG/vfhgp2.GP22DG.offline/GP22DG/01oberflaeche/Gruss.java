/**
 * Gruss.java
 * Demonstartion von Text im Grafik.Modus.
 * Copyright: 2002 TFH Berlin. All Rights Reserved
 * @author Görlitz (goerlitz@tfh-berlin.de), Eisele, Rapsch
 * @version 1.0
 */
import java.awt.Graphics;
import java.applet.Applet;

public class Gruss extends Applet {
    public void paint(Graphics g)
    {
        g.drawString("Gruss an Fritz", 100, 50);
    }
}