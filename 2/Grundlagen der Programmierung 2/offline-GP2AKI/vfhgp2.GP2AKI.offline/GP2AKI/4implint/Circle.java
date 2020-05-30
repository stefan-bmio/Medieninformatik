public class Circle extends Figure {
	private double radius;

	/**
	 * erzeugt ein Circle-Objekt mit dem angegebenen Radius
	 * 
	 * @param iRadius
	 */
	public Circle(double iRadius) {
		super();
		this.radius = iRadius;
	}

	@Override
	public String getStatus() {
		return "ich bin ein " + IFigure.STATUS_KREIS;
	}

	@Override
	public double getFlaeche() {
		return IFigure.kreisFlaeche(radius);
	}

	@Override
	public String toString() {
		return "<" + super.toString() + ", " + radius + ">";
	}
}