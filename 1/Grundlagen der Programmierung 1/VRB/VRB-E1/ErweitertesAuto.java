/**
 * Klasse zum Erzeugen von ErgaenztesAuto Objekten.
 *
 * @author Stefan Berger
 */

public class ErweitertesAuto extends EinfachesAuto{
	// Attribute
	private String standort;
	private String fahrgestellnummer;
	
	 /**
     * Konstruktor fuer die Klasse ErgaenztesAuto
     *
     * @param besitzer  Name des Autobesitzers
     * @param autotyp Typ des Autos
     * @param farbe  Farbe des Autos
     * @param erstzulassung Jahreszahl der Autozulassung
     * @param leistung PS-Zahl des Autos
     * @param kmStand Kilometerstand des Autos
     * @param standort Standort des Autos
     * @param fahrgestellnummer Fahrgestellnummer des Autos
     */
    public ErweitertesAuto(String besitzer, String autotyp, String farbe,
            int erstzulassung, int leistung, int kmStand, String standort, String fahrgestellnummer) {
		super(besitzer, autotyp, farbe, erstzulassung, leistung, kmStand);
		this.standort = standort;
		this.fahrgestellnummer = fahrgestellnummer;
	}    
    
    /**
     * Die Methode setzeNeuesZiel(String, int) aktualisiert die Werte der Attribute standort und kmStand
     * und gibt die neuen Werte auf der Standardausgabe aus.
     * 
     * @param ziel
     * @param entfernung
     */
    public void setzeNeuesZiel(String ziel, int entfernung){
    	System.out.println("Auto fährt von " + this.standort + " nach " + ziel + "."); 
    	System.out.println("Die Entfernung beträgt " + entfernung + " km." );
    	
    	this.standort = ziel;
    	this.kmStand += entfernung;
    }
    
    /**
     * Die Methode toString() gibt die Werte der Objektattribute als formatierten String zurück.
     */
    @Override
    public String toString(){
    	String string = "Besitzer: " + this.besitzer;
    	string += "\nFarbe: " + this.farbe;
    	string += "\nAutotyp: " + this.autotyp;
    	string += "\nErstzulassung: " + this.erstzulassung;
    	string += "\nLeistung: " + this.leistung;
    	string += "\nkmStand: " + this.kmStand;
    	string += "\nStandort: " + this.standort;
    	string += "\nFahrgestellnummer: " + this.fahrgestellnummer;
    	return string;
    }
}