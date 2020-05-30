import java.util.Arrays;

public class Route {
	private final String[] STAEDTE_DEFAULT = new String[] { "Aachen", "Berlin", "Chemnitz", "Erfurt", "Dresden" };
	private final int[][] ENTFERNUNGEN_DEFAULT = new int[][] { { 0, 640, 580, 440, 650 }, { 640, 0, 280, 300, 220 },
			{ 580, 280, 0, 152, 80 }, { 440, 300, 152, 0, 215 }, { 650, 220, 80, 215, 0 } };

	String[] staedteNamen;
	int[][] entfernungen;

	/**
	 * Standardkonstruktor initialisiert die Entfernungsmatrix mit
	 * Standardwerten
	 */
	public Route() {
		this.staedteNamen = STAEDTE_DEFAULT;
		this.entfernungen = ENTFERNUNGEN_DEFAULT;
		System.out.println("Default Entfernungsmatrix wird verwendet.");
		System.out.println();

		ausgabeEntfernungsmatrix();
	}

	/**
	 * Konstruktor zur Initialisierung der Entfernungsmatrix per
	 * Konstruktorargument
	 * 
	 * @param entfernungen
	 */
	public Route(String[] staedteNamen, int[][] entfernungen) {
		this.staedteNamen = staedteNamen;
		this.entfernungen = entfernungen;
	}

	/**
	 * Berechnet die Entfernung der Rundreise
	 * 
	 * @param reise
	 */
	public void routeDerRundReiseBerechnen(String[] reise) {
		int indexErsteStadt = findeStadtIndex(reise[0]);
		int indexStadtVon = indexErsteStadt;
		int indexStadtNach;
		int gesamtlaenge = 0;
		int entfernung;
		for (int i = 1; i < reise.length; i++) {
			indexStadtNach = findeStadtIndex(reise[i]);
			entfernung = entfernungen[indexStadtVon][indexStadtNach];
			System.out.println(i + ". Von " + reise[i - 1] + " nach " + reise[i] + ": " + entfernung + " km");

			gesamtlaenge += entfernung;
			indexStadtVon = indexStadtNach;
		}

		entfernung = entfernungen[indexStadtVon][indexErsteStadt];
		System.out.println(
				reise.length + ". Von " + reise[reise.length - 1] + " nach " + reise[0] + ": " + entfernung + " km");

		gesamtlaenge += entfernung;
		System.out.println("Gesamtlaenge der Tour: " + gesamtlaenge + " km");
	}

	private int findeStadtIndex(String stadtName) {
		for (int j = 0; j < staedteNamen.length; j++) {
			if (stadtName.equals(staedteNamen[j])) {
				return j;
			}
		}

		throw new IllegalArgumentException("Die Stadt " + stadtName + " existiert in der Entfernungsmatrix nicht.");
	}

	public void ausgabeEntfernungsmatrix() {
		System.out.println("Staedte: " + Arrays.toString(staedteNamen));

		System.out.println();
		System.out.println("Entfernungen: ");
		for (int i = 0; i < entfernungen.length; i++) {
			for (int j = 0; j < entfernungen[i].length; j++) {
				System.out.print(entfernungen[i][j] + "\t");
			}
			System.out.println();
		}
		System.out.println();
	}
}
