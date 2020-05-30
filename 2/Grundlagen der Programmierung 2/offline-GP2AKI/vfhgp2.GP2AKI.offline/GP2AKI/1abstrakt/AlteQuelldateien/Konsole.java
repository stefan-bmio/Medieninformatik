

/**
 * Überschrift:   Konsole Bibliothek
 * Beschreibung:  Diese Klasse enthält Methoden, um Benutzereingaben von der Konsole zu lesen.
 * Copyright:     Copyright (c) 2001, TFH Berlin. Alle Rights Reserved.
 * Organisation:  TFH Berlin - Virtuelle FH
 * @author Anka Shergowski (anka@irgendwo.com)
 * @author Alexander Schmidt (aschmidt@tfh-berlin.de)
 * @version 1.0
 **/

import java.io.*;

public class Konsole {

  static BufferedReader br = new BufferedReader (new InputStreamReader(System.in));

  /** Die Methode liest eine Benutzereingabe von der Konsole
   *  @param text Enthält die Eingabeaufforderung für den Benutzer
   *  @return String
   */
  static String getInputString(String text) {
    while (true) {
      System.out.print(text);
      try {
        return br.readLine();
      }
      catch (Exception e) {
        System.err.println("Fehler bei der Verarbeitung: " + e.getLocalizedMessage());
      }
    }
  }

  /** Die Methode liest eine Benutzereingabe von der Konsole
   *  @param text Enthält die Eingabeaufforderung für den Benutzer
   *  @return Integer
   */
  static int getInputInt(String text) {
    while (true) {
      System.out.print(text);
      try {
        return Integer.parseInt(br.readLine());
      }
      catch (Exception e) {
        System.err.println("Fehler bei der Verarbeitung: " + e.getLocalizedMessage());
      }
    }
  }

  /** Die Methode liest eine Benutzereingabe von der Konsole
   *  @param text Enthält die Eingabeaufforderung für den Benutzer
   *  @return Float
   */
  static float getInputFloat(String text) {
    while (true) {
      System.out.print(text);
      try {
        return Float.parseFloat(br.readLine());
      }
      catch (Exception e) {
        System.err.println("Fehler bei der Verarbeitung: " + e.getLocalizedMessage());
      }
    }
  }

  /** Die Methode liest eine Benutzereingabe von der Konsole
   *  @param text Enthält die Eingabeaufforderung für den Benutzer
   *  @return Char
   */
  static char getInputChar(String text) {
    String buffer;
    while (true) {
      System.out.print(text);
      try {
        buffer = br.readLine();
        return buffer.charAt(0);
      }
      catch (Exception e) {
        System.err.println("Fehler bei der Verarbeitung: " + e.getLocalizedMessage());
      }
    }
  }
}