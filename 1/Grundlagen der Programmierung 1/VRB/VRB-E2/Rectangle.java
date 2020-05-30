/**
 * Subklasse von Shape, die Rechteck-Objekte erzeugt
 * 
 * @author Stefan Berger
 *
 */
public class Rectangle extends Shape {
	// Attribute
	// Haelfte der Seitenlaenge in x-Richtung
	protected double xDelta;
	// Haelfte der Seitenlaenge in y-Richtung
	protected double yDelta;

	/**
	 * Konstruktor zum Erstellen eines Objektes vom Typ Rectangle.
	 * 
	 * @param x
	 * @param y
	 * @param xDelta
	 * @param yDelta
	 */
	public Rectangle(double x, double y, double xDelta, double yDelta) {
		super(x, y);
		this.xDelta = xDelta;
		this.yDelta = yDelta;
	}

	/**
	 * Methode zur Berechnung des Umfangs
	 */
	@Override
	public double circumference() {
		return (this.xDelta * 2 + this.yDelta * 2) * 2;
	}

	/**
	 * Methode zur Berechnung des Flaecheninhalts
	 */
	@Override
	public double area() {
		return this.xDelta * 2 * this.yDelta * 2;
	}

	/**
	 * Gibt das Rechteck als formatierten String zurueck
	 */
	@Override
	public String toString() {
		return "Rectangle with origin: " + this.origin() + ", xDelta: " + this.xDelta + ", yDelta: " + this.yDelta;
	}
}
