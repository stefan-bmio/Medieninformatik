import java.util.Arrays;

/**
 * Testklasse für Reihungen
 */
public class ReihungTest {
	public static void main(String[] args) {
		int[] test1 = new int[] { -5, -4, -2, -1, 0, 2, 3, 4, 5 };
		Reihung testReihung1 = new Reihung(test1);
		System.out.println(testReihung1);
		System.out.println();

		Reihung testReihung2 = new Reihung(0, 10, 5);
		testReihung2.einlesen();
		System.out.println("Sortierte Reihung: " + Arrays.toString(testReihung2.sortierteReihung()));
		System.out.println();
	}
}
