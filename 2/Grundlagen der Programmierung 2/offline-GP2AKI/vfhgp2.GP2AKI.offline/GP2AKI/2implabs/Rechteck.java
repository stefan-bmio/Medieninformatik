/**
 * Überschrift  :  Lerneinheit AKI - Interface
 * Datei        :  Rechteck.java
 * Beschreibung :  Zeigt wie eine abstrakte Klasse beerbt wird und
 *                  wie die Implementierung erfolgt.
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author K. Hornemann (s670583@tfh-berlin.de)
 * @version 1.0
 */

public class Rechteck extends Figur {
    private double a;
    private double b;

    //die Seitenlängen des Rechteckes werden mitgegeben
    Rechteck(double pA, double pB) {
        super();
        this.a = pA;
        this.b = pB;
    }

    public String getStatus() {
        return "Ich bin ein Rechteck";
    }

    public double getFlaeche() {
        return a * b;
    }
}