public class Geschenkpapier {
	public static void druckeMuster(int anzahlZeilen, int anzahlProZeile, String muster) {
		while (anzahlZeilen-- > 0) {
			for (int i = 0; i < anzahlProZeile; i++) {
				System.out.print(muster);
			}
			System.out.println();
		}
	}

	public static void druckeMuster(int anzahlZeilen, int anzahlProZeile, String[] muster) {
		do {
			for (int i = 0; i < muster.length; i++) {
				for (int j = 0; j < anzahlProZeile; j++) {
					System.out.print(muster[i]);
				}
				System.out.println();
			}
			anzahlZeilen -= muster.length;
		} while (anzahlZeilen > 0);
	}
}
