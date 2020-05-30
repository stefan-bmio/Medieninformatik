
public class Raute {
	/**
	 * Die Methode druckeRaute gibt eine Raute, die aus dem im Parameter muster
	 * angegebenen Muster besteht, auf der Standardausgabe aus. Die Groesse in
	 * Zeilen wird im Parameter groesse angegeben. Diese muss ungerade sein,
	 * anderenfalls wird die Groesse um 1 reduziert. Eine Raute besteht aus
	 * mindestens drei Zeilen.
	 */
	public static void druckeRaute(int groesse, String muster) {
		if (groesse % 2 == 0) {
			groesse -= 1;
			System.out.println(
					"Die Anzahl der Zeilen muss ungerade sein und wurde deshalb auf " + groesse + " reduziert");
		}

		if (groesse < 3) {
			System.out.println("Eine Raute muss aus mindestens 3 Zeilen bestehen.");
			return;
		}

		// Anzahl der Leerzeichen vor dem ersten Zeichen des Musters:
		int leerzeichenAnzahl = groesse / 2;
		// mal Breite des Musters
		leerzeichenAnzahl *= muster.length();

		// oberer Teil der Raute
		int musterAnzahl = 1;
		while (musterAnzahl < groesse) {
			druckeZeile(leerzeichenAnzahl, musterAnzahl, muster);
			leerzeichenAnzahl -= muster.length();
			musterAnzahl += 2;
		}

		// unterer Teil der Raute ab Mitte
		for (int i = 0; i <= groesse / 2; i++) {
			druckeZeile(leerzeichenAnzahl, musterAnzahl, muster);
			leerzeichenAnzahl += muster.length();
			musterAnzahl -= 2;
		}
	}

	/**
	 * Die Methode druckeZeile gibt eine Zeile der Raute auf der Standardausgabe aus.
	 */
	private static void druckeZeile(int leerzeichenAnzahl, int musterAnzahl, String muster) {
		// Leerzeichen
		for (int i = 0; i < leerzeichenAnzahl; i++) {
			System.out.print(' ');
		}

		// Muster
		for (int i = 0; i < musterAnzahl; i++) {
			System.out.print(muster);
		}

		System.out.println();
	}
}
