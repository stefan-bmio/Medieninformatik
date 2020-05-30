import de.vfh.gp1.bib.Konsole;

/**
 * Diese Klasse beschreibt die Benutzeroberflaeche des Programms zur Berechnung
 * des Bremswegs.
 * 
 * @author Stefan Berger
 */
public class BremswegBenutzerobeflaeche {
	private double geschwindigkeit;
	private double bremsverzoegerung;

	/**
	 * erstellt ein Objekt vom Typ BremswegBenutzeroberflaeche
	 */
	public BremswegBenutzerobeflaeche() {
		erklaereProgramm();
	}

	/**
	 * gibt eine Beschreibung des Programms auf der Standardausgabe aus
	 */
	private void erklaereProgramm() {
		System.out.println("Dieses Programms ermittelt den Bremsweg eines Fahrzeugs nach Eingabe der Geschwindigkeit.");
		System.out.println(
				"Wahlweise kann zusaetzlich der Bremsweg in m/s eingegeben werden, dann wird der Bremsweg des Fahrzeugs");
		System.out.println(
				"mit dem angegebenen Wert berechnet. Wird kein Bremsweg in m/s angegeben werden 6 m/s angenommen.");
	}

	/**
	 * nimmt eine Eingabe zur Geschwindigkeit in km/h entgegen
	 */
	public void erfrageGeschwindigkeit() {
		do {
			geschwindigkeit = Konsole
					.getInputDouble("Fuer welche Geschwindigkeit (km/h) soll der Bremsweg ermittelt werden? ");
		} while (this.geschwindigkeit <= 0.0);
	}

	/**
	 * gibt die eingegebene Geschwindigkeit zurueck
	 */
	public double getGeschwindigkeit() {
		return this.geschwindigkeit;
	}

	/**
	 * nimmt eine Eingabe zum Bremsweg in m/s entgegen
	 */
	public void erfrageBremswegMS() {
		this.bremsverzoegerung = Konsole.getInputDouble(
				"Mit welchem Bremsweg in m/s soll gerechnet werden? (bei Eingabe 0.0 wird mit 6.0 m/s gerechnet) ");
	}

	/**
	 * gibt den eingegebenen Bremsweg zurueck
	 */
	public double getBremsweg() {
		return this.bremsverzoegerung;
	}

	/**
	 * gibt die fuer die Bremswegberechnung eingegebenen Werte als formatierten
	 * String zurueck
	 */
	public String toString() {
		String string = "Diese Werte wurden eingegeben:";
		string += "\nGeschwindigkeit: %.2f km/h";
		string += "\nBremsweg: %.2f m/s";
		return String.format(string, this.geschwindigkeit, this.bremsverzoegerung);
	}
}
