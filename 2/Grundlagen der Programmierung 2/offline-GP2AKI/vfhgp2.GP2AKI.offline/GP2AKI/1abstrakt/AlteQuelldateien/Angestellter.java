/**
 * Programmname: Angestellter.java
 * Programmtyp: Application
 * Beispielaufgabe zu Lerneinheit AKI
 * Die abstrakte Klasse Person wird vererbt und
 * damit getAdresse() und getName() ueberschrieben.
 * Methoden und Konstruktor werden von Klasse Firma.java aufgerufen.
 *
 * @author Anka Shergowski
 * @version 2.3
 */

import java.io.*;

public class Angestellter extends Person{

   public float gehalt;

// Konstruktor

   public Angestellter(){
      allesEinlesen();
      gehalt=getInputFloat(" Hoehe des Bruttogehalts: ");
   }
 /**
  * Die Methode getGehalt dient zur Ausgabe der Gehaltskosten.
  * Sie wird aufgerufen von Klasse Firma.java  *
  * @param keine
  * @return float gehalt
  *
  **/

   public float getGehalt(){
      return gehalt;
   }

  /**
   * Die Methode getAdresse dient zur Ausgabe der Adresse.
   * Sie wird aufgerufen von Klasse Firma.java.
   * @param keine
   * @return Stringarray adresse
   **/

   public String[] getAdresse(){
      String[] adresse= new String[4];
      for(int i=0;i<4;i++){
         if(weiblich){adresse[0]= " Frau";}
         else{adresse[0]=" Herrn";}
         adresse[1]= " " + vorname + " " + nachname;
         adresse[2]= " " + strasse + " " + hausnummer;
         adresse[3]= " " + plz + " " + ort;

      }
      return adresse;
   }
 /**
  * Die Methode getName() gibt den Namen des Angestellten aus. sie wird
  * von der Klasse Firma.java aus aufgerufen.
  *
  * @param keine
  * @return String vorname und nachname
  **/

   public String getName(){
         return vorname + " " + nachname;
   }
}
