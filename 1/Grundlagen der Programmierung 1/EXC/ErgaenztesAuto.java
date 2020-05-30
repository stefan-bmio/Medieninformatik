import java.util.Calendar;

/**
 * Klasse zum Erzeugen von Auto Objekten.
 *
 * @author Sandra Kaltofen
 * @version 1.02, 07/2012
 */

public class ErgaenztesAuto {

    // Instanzvariablen
    private String besitzer;
    private String autotyp;
    private String farbe;
    private int erstzulassung;
    private int leistung;
    private int kmStand;
    
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
     * @param kmStand Kilometerstand des Autos. Der Konstruktor 
     * wirft eine IllegalArgumentException wenn der Wert fuer 
     * kmStand kleiner ist als 0.
     * @param standort Standort des Autos
     * @param fahrgestellnummer Fahrgestellnummer des Autos
     */

    public ErgaenztesAuto(String besitzer, String autotyp, String farbe,
            int erstzulassung, int leistung, int kmStand, String standort, String fahrgestellnummer) {
    	if(kmStand < 0){
    		throw new IllegalArgumentException("Der Wert fuer kmStand ist kleiner als 0");
    	}    	
    	
        this.besitzer = besitzer;
        this.autotyp = autotyp;
        this.farbe = farbe;
        this.erstzulassung = erstzulassung;
        this.leistung = leistung;
        this.kmStand = kmStand;
        
        this.standort = standort;
        this.fahrgestellnummer = fahrgestellnummer;
    }

    /**
     * Die Methode getAlter() dient zur Errechnung des Autoalters ueber die
     * Erstzulassung. Wirft die Exception FalscheErstzulassungAusnahme wenn 
     * die Berechnung des Alters eine negative Zahl ergibt.
     *
     * @return int: Alter des Autos
     */
    public int getAlter() {
        // Ermittlung des aktuellen Jahres
        Calendar aktuellerKalender = Calendar.getInstance();
        int aktuellesJahr = aktuellerKalender.get(Calendar.YEAR);
        
        if(this.erstzulassung > aktuellesJahr){
        	throw new FalscheErstzulassungAusnahme("Der Wert fuer erstzulassung ist groesser als das aktuelle Jahr");
        }
        
        return aktuellesJahr - this.erstzulassung;
    }

    /**
     * Die Methode meldung() gibt die Attribute "farbe" und "besitzer" auf der
     * Standardausgabe aus.
     */
    public void meldung() {
        System.out.print("Hier gruesst das " + this.farbe + "e ");
        System.out.print("Auto von " + this.besitzer);
    }
    
    /**
     * Die Methode setzeNeuesZiel(String, int) aktualisiert die Werte der Attribute standort und kmStand
     * und gibt die neuen Werte auf der Standardausgabe aus.
     * 
     * @param ziel
     * @param entfernung
     */
    public void setzeNeuesZiel(String ziel, int entfernung){
    	System.out.println("Auto fährt von " + standort + " nach " + ziel + "."); 
    	System.out.println("Die Entfernung beträgt " + entfernung + " km." );
    	
    	this.standort = ziel;
    	this.kmStand += entfernung;
    }
    
    /**
     * Die Methode toString() gibt die Werte der Objektattribute als formatierten String zurück.
     */
    @Override
    public String toString(){
    	String string = "Besitzer: " + besitzer;
    	string += "\nFarbe: " + farbe;
    	string += "\nAutotyp: " + autotyp;
    	string += "\nErstzulassung: " + erstzulassung;
    	string += "\nLeistung: " + leistung;
    	string += "\nkmStand: " + kmStand;
    	string += "\nStandort: " + standort;
    	string += "\nFahrgestellnummer: " + fahrgestellnummer;
    	return string;
    }
    
    /**
     * Ausnahmeklasse fuer den Fall dass die Erstzulassung einen fehlerhaften Wert hat. 
     */
    public static class FalscheErstzulassungAusnahme extends Error{
    	public FalscheErstzulassungAusnahme(String message){
    		super(message);
    	}
    }
}