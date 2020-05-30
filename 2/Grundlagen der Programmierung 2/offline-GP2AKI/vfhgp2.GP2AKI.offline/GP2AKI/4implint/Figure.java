public abstract class Figure implements IFigureNumber {
	protected int nummer;
	protected String farbe;
	private static int zaehler = 0;
	private static java.util.Random zufall = new java.util.Random();

	/**
	 * Der Konstruktor initialisiert die Nummer und die Farbe eines
	 * Figure-Objektes. Die Farbe ist eine der 3 folgenden Zeichenketten "Rot",
	 * "Gruen" oder "Blau".
	 */
	protected Figure() {
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

	@Override
	public String getFarbe() {
		return farbe;
	}

	@Override
	public abstract String getStatus();

	@Override
	public abstract double getFlaeche();

	@Override
	public int getNummer() {
		return nummer;
	}

	@Override
	public String toString() {
		return nummer + ", " + farbe;
	}
}
