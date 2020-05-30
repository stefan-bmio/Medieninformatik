public class Rectangle extends Figure {
	private double a;
	private double b;

	/**
	 * erzeugt ein Rectangle-Objekt mit 2 Seiten
	 * @param pA, die Laenge einer Seite
	 * @param pB, die Laenge der anderen Seite
	 */
	public Rectangle(double pA, double pB) {
		super();
		this.a = pA;
		this.b = pB;
	}

	@Override
	public String getStatus() {
		return "ich bin ein " + IFigure.STATUS_RECHTECK;
	}

	@Override
	public double getFlaeche() {
		return a * b;
	}

	@Override
	public String toString() {
		return "<" + super.toString() + ", " + a + ", " + b + ">";
	}
}
