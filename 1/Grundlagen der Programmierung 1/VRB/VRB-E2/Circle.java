/**
 * Subklasse von Shape, die Kreis-Objekte erzeugt
 * 
 * @author Stefan Berger
 *
 */
public class Circle extends Shape {
	// Attribute
	// Der Radius des Kreises
	private double radius;

	/**
	 * Konstruktor zum Erstellen eines Objektes vom Typ Circle.
	 * 
	 * @param x
	 * @param y
	 * @param radius
	 */
	public Circle(double x, double y, double radius) {
		super(x, y);
		this.radius = radius;
	}

	/**
	 * Methode zur Berechnung des Kreisumfangs
	 */
	@Override
	public double circumference() {
		return 2 * Math.PI * this.radius;
	}

	/**
	 * Methode zur Berechnung des Flaecheninhalts des Kreises
	 */
	@Override
	public double area() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	/**
	 * Gibt diesen Kreis als formatierten String zurueck
	 */
	@Override
	public String toString() {
		return "Circle with origin: " + this.origin() + " and radius: " + this.radius;
	}
}
