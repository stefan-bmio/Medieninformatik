/**
 * Diese Klasse bietet verschiedene Methoden zum Zaehlen von Zeichen in Zeichenketten.
 */
public class Zeichenkettenanalyse {
	public static final char[] VOKALE = new char[] {'a', 'e', 'i', 'o', 'u'};
	
	/**
	 * Zaehlt alle Vokale (a, e, i, o, u) in der ihr als Parameter übergebenen Zeichenkette
	 */
	public static int[] vokaleZaehlen(String zeichenkette){
		int[] vokale = new int[5];
		for (int i = 0; i < zeichenkette.length(); i++){
			for (int j = 0; j < VOKALE.length; j++){
				if(zeichenkette.charAt(i) == VOKALE[j]){
					vokale[j]++;
				}
			}
		}
		return vokale;
	}
	
	/**
	 * Zaehlt die Anzahl des ihr als Parameter übergebenen Zeichens in der ihr ebenfalls übergebenen Zeichenkette
	 */
	public static int zeichenZaehlen(String zeichenkette, char zeichen){
		int zeichenAnzahl = 0;
		for(int i = 0; i < zeichenkette.length(); i++){
			if(zeichenkette.charAt(i) == zeichen){
				zeichenAnzahl++;
			}
		}
		return zeichenAnzahl;
	}
	
	/**
	 * Zaehlt die Anzahl der ihr als Array übergebenen Zeichen in der ihr ebenfalls übergebenen Zeichenkette
	 */
	public static int[] zeichenZaehlen(String zeichenkette, char[] zeichen){
		int[] zeichenAnzahlen = new int[zeichen.length];
		for(int i = 0; i < zeichen.length; i++){
			zeichenAnzahlen[i] = zeichenZaehlen(zeichenkette, zeichen[i]);
		}
		return zeichenAnzahlen;
	}
}
