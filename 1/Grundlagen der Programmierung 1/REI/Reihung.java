import java.util.Arrays;

import de.vfh.gp1.bib.Konsole;

public class Reihung {
	private int[] reihung;

	private int maximaleAnzahl;
	private int untereGrenze;
	private int obereGrenze;

	/**
	 * Konstruktor mit Argument pro Attribut
	 * 
	 * @param untereGrenze
	 * @param obereGrenze
	 * @param maximaleAnzahl
	 */
	public Reihung(int untereGrenze, int obereGrenze, int maximaleAnzahl) {
		this.untereGrenze = untereGrenze;
		this.obereGrenze = obereGrenze;
		this.maximaleAnzahl = maximaleAnzahl;
		this.reihung = new int[this.maximaleAnzahl];
	}

	/**
	 * Konstruktor mit einem einzelnen Array für die drei Attribute
	 */
	public Reihung(int[] reihung) {
		this.reihung = reihung;
		this.untereGrenze = getMin();
		this.obereGrenze = getMax();
		this.maximaleAnzahl = reihung.length;
	}

	/**
	 * liest die Ganzzahlen von der Konsole ein
	 */
	public void einlesen() {
		int richtige = 0;
		int falsche = 0;
		do {
			int eingabe = Konsole
					.getInputInt("Geben Sie eine Zahl zwischen " + untereGrenze + " und " + obereGrenze + " ein:");

			if (eingabe == 0) {
				break;
			}

			if (eingabe < untereGrenze || eingabe > obereGrenze) {
				System.out.println("Die Zahl muss zwischen " + untereGrenze + " und " + obereGrenze + " liegen.");
				falsche++;
			} else {
				System.out.println("Die Eingabe ist korrekt.");
				reihung[richtige] = eingabe;
				richtige++;
			}
		} while (richtige < reihung.length);
		System.out.println(richtige + " richtige und " + falsche + " falsche Eingaben");
	}

	/**
	 * Gibt den kleinsten Wert der Reihung zurueck
	 */
	public int getMin() {
		int min = reihung[0];
		for (int i = 1; i < reihung.length; i++) {
			if (reihung[i] < min) {
				min = reihung[i];
			}
		}
		return min;
	}

	/**
	 * Gibt den kleinsten Wert der Reihung zurueck
	 */
	public int getMax() {
		int max = reihung[0];
		for (int i = 1; i < reihung.length; i++) {
			if (reihung[i] > max) {
				max = reihung[i];
			}
		}
		return max;
	}

	/**
	 * Berechnet die Summe der Werte der Reihung und gibt diese zurück
	 */
	public int berechneSumme() {
		int summe = 0;
		for (int i = 0; i < reihung.length; i++) {
			summe += reihung[i];
		}
		return summe;
	}

	/**
	 * Erstellt eine sortierte Kopie der Reihung und gibt sie zurück. Die
	 * originale Reihung bleibt dabei unverändert
	 */
	public int[] sortierteReihung() {
		int[] reihungKopie = Arrays.copyOf(reihung, reihung.length);
		Arrays.sort(reihungKopie);
		return reihungKopie;
	}

	/**
	 * Gibt eine Zeichenkettendarstellung für die untere Grenze, die obere
	 * Grenze und die Zahlen der Reihung als String zurück.
	 */
	@Override
	public String toString() {
		return "untere Grenze: " + untereGrenze + ", obere Grenze: " + obereGrenze + ", Werte: "
				+ Arrays.toString(reihung);
	}
}
