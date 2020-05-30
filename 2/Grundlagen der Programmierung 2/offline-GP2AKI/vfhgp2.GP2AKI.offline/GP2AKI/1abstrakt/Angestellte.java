package de.vfh.gp2.aki.firma;

/**
 * Klasse mit Attributen und Methoden fuer einen Angestellten einer Firma. Die
 * abstrakte Klasse Person wird vererbt und getAdresse() wird ueberschrieben.
 * Methoden und Konstruktor werden von der Klasse Firma aufgerufen.
 * 
 * @author S. Kaltofen
 * @version 2.4
 */
public class Angestellte extends Person {

    // Instanzvariable gehalt
    private float gehalt;

    /**
     * Parameterloser Konstruktor.
     */
    public Angestellte() {
        super(); // macht deutlich, dass der Konstruktor der Oberklasse
                 // aufgerufen wird
    }

    /**
     * Mit diesem Konstruktor erfolgt die Initialisierung der Attribute durch
     * die uebergebenen Parameter.
     * 
     * @param nachname Nachname des Angestellten
     * @param vorname Vorname des Angestellten
     * @param strasse Strasse zur Adresse des Angestellten
     * @param hausnummer Hausnummer zur Adresse des Angestellten
     * @param ort Ort zur Adresse des Angestellten
     * @param plz PLZ zur Adresse des Angestellten
     * @param weiblich Flag ob Angestellter weiblich ist
     * @param gehalt Gehalt des Angestellten
     */
    public Angestellte(String nachname, String vorname, String strasse,
            String hausnummer, String ort, String plz, boolean weiblich,
            float gehalt) {
        // Aufruf des Konstruktors der Oberklasse
        super(nachname, vorname, strasse, hausnummer, ort, plz, weiblich);
        // Gehalt initialisieren
        this.gehalt = gehalt;
    }

    /**
     * Die Methode getGehalt() dient zur Ausgabe der Gehaltskosten. 
     * Sie wird von der Klasse Firma aufgerufen. 
     * 
     * @param keine
     * @return float Gehalt des Angestellten
     */
    public float getGehalt() {
        return gehalt;
    }

    /**
     * Die Methode getAdresse() dient zur Ausgabe der Adresse. 
     * Sie wird von der Klasse Firma aufgerufen.
     * 
     * @return Stringarray Adresse des Angestellten
     */
    @Override
    public String[] getAdresse() {
        String[] adresse = new String[4];
        if (istWeiblich()) {
            adresse[0] = " Frau Angestellte";
        } else {
            adresse[0] = " Herrn Angestellte";
        }
        adresse[1] = getTeilAdresse()[0];
        adresse[2] = getTeilAdresse()[1];
        adresse[3] = getTeilAdresse()[2];
        return adresse;
    }
}
