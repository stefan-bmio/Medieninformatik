import de.vfh.gp1.bib.Konsole;

/**
 * Testklasse fuer die Routenplanung
 * 
 * @author Stefan Berger
 */
public class RouteTest {
	/**
	 * Testet die Klasse Route.java
	 */
	public static void main(String[] args) {
		Route route = new Route();
		route.routeDerRundReiseBerechnen(new String[] { "Aachen", "Berlin", "Dresden", "Chemnitz", "Erfurt" });
		System.out.println();

		System.out.println("Die Eingabe der Entfernungsmatrix erfolgt in 3 Schritten:");
		System.out.println("1. Eingabe der Anzahl der Staedte");
		System.out.println("2. Eingabe der Staedtenamen");
		System.out.println("3. Eingabe der Entfernungen");
		System.out.println();
		
		int anzahl = eingabeAnzahl();
		System.out.println();
		String[] staedteNamen = eingabeStaedte(anzahl);
		System.out.println();
		int[][] entfernungen = eingabeEntfernungen(anzahl, staedteNamen);
		System.out.println();

		route = new Route(staedteNamen, entfernungen);
		route.ausgabeEntfernungsmatrix();
		System.out.println();
		String[] reise = eingabeReise();
		route.routeDerRundReiseBerechnen(reise);
	}

	private static int eingabeAnzahl() {
		int anzahl = Konsole.getInputInt("Bitte die Anzahl der Staedte angeben: ");
		return anzahl;
	}

	/**
	 * Liest die Entfernungsmatrix von der Konsole ein
	 */
	private static String[] eingabeStaedte(int anzahl) {
		String[] staedteNamen = new String[anzahl];
		System.out.println("Bitte " + anzahl + " Staedtenamen eingeben.");
		for (int i = 0; i < anzahl; i++) {
			staedteNamen[i] = Konsole.getInputString("Name der " + (i + 1) + ". Stadt: ");
		}

		return staedteNamen;
	}

	private static int[][] eingabeEntfernungen(int anzahl, String[] staedteNamen) {
		int[][] entfernungen;
		try {
			entfernungen = new int[anzahl][anzahl];
		} catch (NegativeArraySizeException e) {
			throw new IllegalArgumentException("Fehler: Negative Zahl");
		}

		System.out.println("Bitte Entfernungen eingeben.");
		for (int i = 0; i < anzahl; i++) {
			for (int j = i + 1; j < anzahl; j++) {
				int entfernung = Konsole
						.getInputInt("Entfernung von " + staedteNamen[i] + " nach " + staedteNamen[j] + ": ");
				entfernungen[i][j] = entfernungen[j][i] = entfernung;
			}
		}

		return entfernungen;
	}

	private static String[] eingabeReise() {
		int laenge = Konsole.getInputInt("Wieviele Staedte sollen bereist werden? ");
		try {
			String[] reise = new String[laenge];
			for (int i = 0; i < laenge; i++) {
				reise[i] = Konsole.getInputString((i + 1) + ". Stadt: ");
			}
			return reise;
		} catch (NegativeArraySizeException e) {
			throw new IllegalArgumentException("Fehler: Negative Zahl");
		}
	}
}
