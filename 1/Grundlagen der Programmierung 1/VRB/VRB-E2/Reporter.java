/**
 * Hilfsklasse zur Ausgabe von Shape-Objekten auf der Standardausgabe
 * 
 * @author Stefan Berger
 *
 */
public class Reporter {
	/**
	 * Gibt das uebergebene Shape-Objekt mit Umfang und Flaecheninhalt auf der Standardausgabe aus.
	 */
	static public void report(Shape s){
		System.out.printf(s.toString() + " / Area: %.1f / Circumference: %.1f\n", s.area(), s.circumference());
	}
}
