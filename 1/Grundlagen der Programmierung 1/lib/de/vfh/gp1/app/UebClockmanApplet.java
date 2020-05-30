import java.awt.*;
import java.awt.event.*;
import java.applet.*;
import de.vfh.gp1.bib.clockman.*;

/**
 * Dateiname	: UebClockmanApplet.java
 * Beschreibung : Ein erstes Applet zum Kennenlernen.
 *
 * @author      Lena P. (s390815@tfh-berlin.de)
 * @version     1.01, 01.03.2000
 */
public class UebClockmanApplet extends Clockman_Applet
{

  /**
   * Diese Methode wird nur einmal aufgerufen. Hier koennen z.B. Variablen
   * Startwerte zugewiesen werden.
   */
  public void init()
  {
  }

  /**
   * Hier wird die Zeichenflaeche "upgedated".
   */
  public void update(Graphics g)
  {
      this.paint(g);
  }

  /**
   * Diese Methode wird immer aufgerufen, wenn das Applet neu getartet wird.
   */
  public void start()
  {
     starteUhr();
  }

  /**
   * Diese Methode wird immer aufgerufen, wenn das Applet angehalten wird.
   */
  public void stop()
  {
    //stopUhr();
  }

  /**
   * Wird von Browser oder Applet Viewer aufgerufen bevor das Applet zerstoert wird.
   * Damit koennen z.B. Ressourcen freigegeben oder gestartete Threads ordentlich
   * beendet werden.
   */
  public void destroy()
  {
  }

  /**
   * Applet-Information holen
   */
  public String getAppletInfo() {
    return "Applet-Information";
  }

  /**
   * Parameter-Infos holen
   */
  public String[][] getParameterInfo() {
    return null;
  }

}
