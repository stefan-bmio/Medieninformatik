/**
 * Programmname: Angestellter.java
 * Programmtyp: Application Beispielaufgabe zu Lerneinheit AKI
 * Die abstrakte Klasse Person wird vererbt und getAdresse() wird
 * ueberschrieben. Methoden und Konstruktor werden von Klasse Firma.java
 * aufgerufen.
 *
 * @author Anka Shergowski
 * @version 2.3
 */
public class Angestellter extends Person {

    private float gehalt;

    /**
     * Mit diesem Konstruktor erfolgt die Initialisierung der Attribute ueber
     * die Konsole
     *
     */
    public Angestellter() {
        allesEinlesen();
        gehalt = Konsole.getInputFloat(" Hoehe des Bruttogehalts: ");
    }

    /**
     * Die Methode getGehalt dient zur Ausgabe der Gehaltskosten. Sie wird
     * aufgerufen von Klasse Firma.java *
     *
     * @param keine
     * @return float gehalt
     */
    public float getGehalt() {
        return gehalt;
    }

    /**
     * Die Methode getAdresse dient zur Ausgabe der Adresse. Sie wird aufgerufen
     * von Klasse Firma.java.
     *
     * @param keine
     * @return Stringarray adresse
     */
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
