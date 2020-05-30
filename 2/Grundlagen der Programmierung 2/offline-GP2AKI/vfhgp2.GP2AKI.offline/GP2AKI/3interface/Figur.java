import java.util.Comparator;

public abstract class Figur {
	protected int nummer;
	protected String farbe;
	private static int zaehler = 0;
	private static java.util.Random zufall = new java.util.Random();

	/**
	 * Der Konstruktor initialisiert die Nummer und die Farbe eines
	 * Figur-Objektes. Die Farbe ist eine der 3 folgenden Zeichenketten "Rot",
	 * "Gruen" oder "Blau".
	 */
	protected Figur() {
		final String[] temp = new String[3];
		temp[0] = "Rot";
		temp[1] = "Gruen";
		temp[2] = "Blau";
		// Nummerierung der Figuren wird gezählt
		zaehler++;
		nummer = zaehler;
		// Farbe wird zufällig bestimmt
		farbe = temp[zufall.nextInt(3)];
	}

	/**
	 * gibt die Nummer des Figur-Objektes zurueck
	 * @return die Nummer
	 */
	public int getNummer() {
		return nummer;
	}

	/**
	 * gibt die Farbe des Figur-Objektes zurueck
	 * @return die Farbe als Zeichenkette
	 */
	public String getFarbe() {
		return farbe;
	}

	/**
	 * gibt den Status des Figur-Objektes zurueck
	 * @return den Status des Figur-Objektes
	 */
	public abstract String getStatus();

	/**
	 * gibt die Flaeche des Figur-Objektes zurueck
	 * @return die Flaeche
	 */
	public abstract double getFlaeche();

	@Override
	public String toString() {
		return nummer + ", " + farbe;
	}
}
