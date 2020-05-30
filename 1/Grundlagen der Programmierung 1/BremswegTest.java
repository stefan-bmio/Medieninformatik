
public class BremswegTest {
	public static void main(String[] args) {
		BremswegBenutzerobeflaeche bremswegBenutzerobeflaeche = new BremswegBenutzerobeflaeche();
		
		for (int i = 0; i < 5; i++) {
			bremswegBenutzerobeflaeche.erfrageGeschwindigkeit();
			bremswegBenutzerobeflaeche.erfrageBremswegMS();

			System.out.println(bremswegBenutzerobeflaeche);

			Bremsweg bremsweg;
			if (bremswegBenutzerobeflaeche.getBremsweg() == 0.0) {
				bremsweg = new Bremsweg(bremswegBenutzerobeflaeche.getGeschwindigkeit());
			} else {
				bremsweg = new Bremsweg(bremswegBenutzerobeflaeche.getGeschwindigkeit(),
						bremswegBenutzerobeflaeche.getBremsweg());
			}

			bremsweg.berechne();

			System.out.println(bremsweg);
			System.out.println();
		}
	}
}
