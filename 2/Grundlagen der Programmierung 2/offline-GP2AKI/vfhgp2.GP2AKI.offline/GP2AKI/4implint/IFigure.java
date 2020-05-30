public interface IFigure {
	String STATUS_KREIS = "Kreis";
  String STATUS_RECHTECK = "Rechteck";
  String STATUS_DREICK = "Dreieck";


	/**
	 * gibt die Farbe des Figur-Objektes zurueck
	 * @return die Farbe als Zeichenkette
	 */
	String getFarbe();

	/**
	 * gibt den Status des Figur-Objektes zurueck 
	 * @return den Status des Figur-Objektes
	 */
	String getStatus();

	/**
	 * gibt die Flaeche des Figur-Objektes zurueck 
	 * @return die Flaeche
	 */
	double getFlaeche();

	/**
	 * Hilfsmethode um die Flaeche eines Kreises ru rechnen
	 * @param radius des Kreises
	 * @return Flaeche des Kreises
	 */
	static double kreisFlaeche(double radius) {
		return Math.pow(radius, 2) * Math.PI;
	}
}
