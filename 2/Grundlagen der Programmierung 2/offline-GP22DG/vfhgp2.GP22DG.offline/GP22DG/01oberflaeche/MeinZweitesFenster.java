/**
 * Ueberschrift  : Lerneinheit 2DG - 2D-Grafik
 * Datei        :  MeinZweitesFenster.java
 * Beschreibung :  MeinZweitesFenster.java -- demonstriert die Erzeugung eines
 *                 GUI-Fensters als JFrame-Objekt
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author Görlitz (goerlitz@tfh-berlin.de), Eisele, Rapsch
 * @version 1.0
 */
import javax.swing.JFrame;
import java.awt.Color;

class MeinZweitesFenster {
    public static void main(String[] args) {
        JFrame  meinFenster = new JFrame();
        meinFenster.setTitle("MeinZweitesFenster");
        meinFenster.setSize(400, 300);
        meinFenster.setBackground(Color.lightGray);
        meinFenster.setVisible(true);
    }
}
