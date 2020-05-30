/**
 * Programmname: Person.java
 * Programmtyp: Application
 * @author Anka Shergowski
 * @version 2.3
 **/


import java.io.*;

public abstract class Person extends Konsole{

   public String nachname,
                 vorname,
                 strasse,
                 hausnummer,
                 ort;
   public int plz;
   public boolean weiblich;   // Ist Person maennlich=> weiblich=false, ist sie weiblich: weiblich=true

 /**
  * Die Methode allesEinlesen() ist die einzige nicht abstrakte Methode
  * von Person.java. Sie dient zum Einlesen von Personendaten und weist
  * den zuvor deklarierten Variablen Werte zu.
  * @param keine
  * @return String vorname und nachname
  **/
   public void allesEinlesen(){
      nachname = getInputString(" Name: ");
      vorname= getInputString(" Vorname: ");
      String a= getInputString(" Ist die Person weiblich (j/n): ");
      if(a.equals("j") || a.equals("J")){
         weiblich=true;
      }
      else {weiblich=false;}
      strasse= getInputString(" Strasse: ");
      hausnummer= getInputString(" Hausnummer: ");
      plz=getInputInt(" Postleitzahl: ");
      ort=getInputString(" Ort: ");
   }

 /**
  * Die Methode getAdresse() ist abstrakt und wird erst bei
  * der Weitervererbung (an Kunde und Angestellter) weiter
  * deffiniert.
  *
  * @param keine
  * @return keine
  **/
   public abstract String[] getAdresse();
 /**
  * Die Methode getName() ist abstrakt und wird erst bei
  * der Weitervererbung (an Kunde und Angestellter) weiter
  * deffiniert.
  *
  * @param keine
  * @return keine
  **/

   public abstract String getName();

}
