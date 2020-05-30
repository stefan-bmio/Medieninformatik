import de.vfh.gp1.bib.Konsole;

public class ZeichenkettenanalyseTest {
	public static void main(String[] args) {
		String zeichenkette = Konsole.getInputString("Bitte Zeichenkette eingeben: ");
		int[] vokaleAnzahlen = Zeichenkettenanalyse.vokaleZaehlen(zeichenkette);
		System.out.println("Die Zeichenkette " + zeichenkette + " enthaelt die folgenden Anzahlen an Vokalen:");
		for(int i = 0; i < vokaleAnzahlen.length; i++){
			System.out.println(Zeichenkettenanalyse.VOKALE[i] + ": " + vokaleAnzahlen[i]);
		}
		
		zeichenkette = Konsole.getInputString("Bitte weitere Zeichenkette eingeben: ");
		char zeichen = Konsole.getInputChar("Bitte zu zaehlendes Zeichen eingeben: ");
		int zeichenAnzahl = Zeichenkettenanalyse.zeichenZaehlen(zeichenkette, zeichen);
		System.out.println("Das Zeichen '" + zeichen + "' kommt in der Zeichenkette '" + zeichenkette + "' " + zeichenAnzahl + " mal vor.");
		
		zeichenkette = Konsole.getInputString("Bitte noch eine weitere Zeichenkette eingeben: ");
		char[] gezaehlteZeichen = new char[zeichenkette.length()];
		int gezaehlteZeichenAnzahl = 0;
		do{
			zeichen = Konsole.getInputChar("Bitte Zeichen eingeben, das gezaehlt werden soll (Tab zum Beenden): ");
			System.out.println(zeichen);
			if(zeichen == '\t'){
				break;
			}
			gezaehlteZeichen[gezaehlteZeichenAnzahl++] = zeichen;
		}while(gezaehlteZeichenAnzahl < zeichenkette.length());
		
		int[] zeichenAnzahlen = Zeichenkettenanalyse.zeichenZaehlen(zeichenkette, gezaehlteZeichen);
		System.out.println("In der Zeichenkette '" + zeichenkette + "' wurden folgende Zeichen gezaehlt:");
		for(int i = 0; i < gezaehlteZeichenAnzahl; i++){
			System.out.println(gezaehlteZeichen[i] + ": " + zeichenAnzahlen[i]);
		}
	}
}
