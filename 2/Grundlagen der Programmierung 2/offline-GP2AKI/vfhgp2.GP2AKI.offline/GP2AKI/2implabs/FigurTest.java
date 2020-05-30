/**
 * Ueberschrift :  Lerneinheit AKI - Interface
 * Datei        :  FigurTest.java
 * Beschreibung :  Der Testtreiber für die einzelnen Figuren.
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author K. Hornemann (s670583@tfh-berlin.de)
 * @version 1.0
 */

public class FigurTest {
    public static void main(String args[]) {
        //damit die Zahlenausgaben formatiert werden können
        java.text.NumberFormat form;
        form=java.text.NumberFormat.getNumberInstance(java.util.Locale.GERMANY);
        //höchstens 2 Nachkommastellen ausgeben
        form.setMaximumFractionDigits(2);
        //im folgenden werden 10 unterschiedliche Figuren erzeugt
        Figur figur[]=new Figur[10];
        figur[0]=new Kreis(20);
        figur[1]=new Rechteck(4,2);
        figur[2]=new Dreieck(3,4,5);
        figur[3]=new Kreis(5.6);
        figur[4]=new Rechteck(100.456,23.54);
        figur[5]=new Dreieck(10.2,10.5,1);
        figur[6]=new Kreis(2);
        figur[7]=new Kreis(5);
        figur[8]=new Kreis(1.2);
        figur[9]=new Rechteck(4,8.5);
        //jetzt werden unabhängig von der Art der Figuren ihre Eigenschaften ausgegeben
        for (int i=0; i<figur.length; i++) {
            System.out.println(figur[i].getStatus()+
                " mit der Flaeche "+
                form.format(figur[i].getFlaeche())+
                ";\nder Farbe "+
                figur[i].ausgebenFarbe()+
                " und der Nummer "+
               (new Integer(figur[i].ausgebenNummer())).toString() + ".");
        }
    }
}