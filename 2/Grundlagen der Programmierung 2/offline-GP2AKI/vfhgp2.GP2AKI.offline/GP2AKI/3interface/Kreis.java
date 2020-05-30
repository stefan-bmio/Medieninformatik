public class Kreis extends Figur {
	private double radius;

	/**
	 * erzeugt ein Kreis-Objekt mit dem angegebenen Radius
	 * @param iRadius
	 */
	public Kreis(double iRadius) {
		super();
		this.radius = iRadius;
	}

	@Override
	public String getStatus() {
		return "Ich bin ein Kreis";
	}

	@Override
	public double getFlaeche() {
		final double pi = Math.PI;
		final double flaeche = Math.pow(radius, 2) * pi;
		return flaeche;
	}

	@Override
	public String toString() {
		return "[" + super.toString() + ", " + radius + "]";
	}
}
