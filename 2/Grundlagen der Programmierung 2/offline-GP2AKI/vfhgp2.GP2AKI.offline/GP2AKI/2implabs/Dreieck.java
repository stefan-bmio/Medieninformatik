/**
 * Überschrift  :  Lerneinheit AKI - Interface
 * Datei        :  Dreieck.java
 * Beschreibung :  Zeigt wie eine abstrakte Klasse beerbt wird und
                   wie die Implementierung erfolgt.
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author K. Hornemann (s670583@tfh-berlin.de)
 * @version 1.0
 */

public class Dreieck extends Figur {
    private double a;
    private double b;
    private double c;

    //dem Konstruktor werden die Seitenlängen des Dreiecks mitgegeben
    Dreieck(double pA, double pB, double pC) {
        super();
        this.a = pA;
        this.b = pB;
        this.c = pC;
    }

    public String getStatus() {
        return "Ich bin ein Dreieck";
    }

    public double getFlaeche() {
        double temp;
        temp = Math.pow(c, 2) - Math.pow(a, 2) - Math.pow(b,2);
        temp = temp / -(2 * a * b);
        temp = Math.acos(temp);
        temp = 0.5 * a * b * Math.sin(temp);
        return temp;
    }
}