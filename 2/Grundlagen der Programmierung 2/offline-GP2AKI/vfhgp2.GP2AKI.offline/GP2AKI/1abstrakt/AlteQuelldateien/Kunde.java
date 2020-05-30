/**
 * Programmname: Kunde.java
 * Programmtyp: Application
 * Klasse Kunde.java ist von abstrakter Klasse Person
 * abgeleitet, wodurch die abstrakten Methoden getAdresse und
 * getName ueberschrieben wurden. Konstuktor und Methoden wurden
 * von Firma.java aus aufgerufen.
 *
 * @author Anka Shergowski
 * @version 2.3
 */


import java.io.*;

public class Kunde extends Person{

   public int kundennummer;
   public Angestellter kundenbetreuer;

   public Kunde(Angestellter angest){
      allesEinlesen();
      kundennummer= getInputInt(" Kundennummer: ");
      kundenbetreuer=angest;
   }
/**
 * Die Methode getKundenNr gibt die Kundennummer aus.
 *
 * @param keine
 * @return int kundennummer
 *
 */
   public int getKundenNr(){
      return kundennummer;
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
