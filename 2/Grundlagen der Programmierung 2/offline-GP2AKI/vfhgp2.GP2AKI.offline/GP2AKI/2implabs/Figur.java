/**
 * Überschrift  :  Lerneinheit AKI - Interface
 * Datei        :  Figur.java
 * Beschreibung :  Zeigt wie eine abstrakte Klasse programmiert wird.
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author K. Hornemann (s670583@tfh-berlin.de)
 * @version 1.0
 */

abstract class Figur {
    protected int nummer;
    protected String farbe;
    private static int zaehler=0;
    private static java.util.Random zufall=new java.util.Random();

    Figur() {
        final String[] temp=new String[3];
        temp[0]="Rot";
        temp[1]="Gruen";
        temp[2]="Blau";
        //Nummerierung der Figuren wird gezählt
        zaehler++;
        nummer = zaehler;
        //Farbe wird zufällig bestimmt
        farbe=temp[zufall.nextInt(3)];
    }

    public int ausgebenNummer() {
        return nummer;
    }

    public String ausgebenFarbe() {
        return farbe;
    }

    //Methode, die in den konkreten Klassen zu implementieren
    //ist einen Text zurückgibt, der besagt um welche Art
    //von Objekt es sich handelt
    abstract String getStatus();

    //ebenso muss ermittelt werden können wie groß
    //die Fläche der Figur ist
    abstract double getFlaeche();
}