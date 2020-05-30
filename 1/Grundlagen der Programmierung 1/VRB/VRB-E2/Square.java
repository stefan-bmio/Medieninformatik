/**
 * Subklasse von Rectangle, die Quadrat-Objekte erzeugt
 * 
 * @author Stefan Berger
 *
 */
public class Square extends Rectangle {

	/**
	 * Konstruktor zum Erstellen eines Objektes vom Typ Square.
	 * 
	 * @param x
	 * @param y
	 * @param delta
	 */
	public Square(double x, double y, double delta) {
		super(x, y, delta, delta);
	}

	/**
	 * Gibt dieses Quadrat als formatierten String zurueck
	 */
	@Override
	public String toString() {
		return "Square with origin: " + this.origin() + " and delta: " + this.xDelta;
	}
}
