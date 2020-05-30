/**
 * Überschrift  :  Lerneinheit AKI - Interface
 * Datei        :  Kreis.java
 * Beschreibung :  Zeigt wie eine abstrakte Klasse beerbt wird und
 *                 wie die Implementierung erfolgt.
 * Copyright    :  Copyright (c) 2002 TFH Berlin. All Rights Reserved.
 * Organisation :  TFH Berlin - Virtuelle FH
 * @author K. Hornemann (s670583@tfh-berlin.de)
 * @version 1.0
 */

public class Kreis extends Figur {
    private double radius;

    Kreis(double iRadius) {
        super();
        this.radius = iRadius;
    }

    public String getStatus() {
        return "Ich bin ein Kreis";
    }

    public double getFlaeche() {
        final double pi = Math.PI;
        final double flaeche = Math.pow(radius, 2) * pi;
        return flaeche;
    }
}