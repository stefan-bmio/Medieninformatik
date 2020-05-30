/**
 * Diese Klasse beschreibt den Bremsweg in Meter, der anhand der Geschwindigkeit in km/h, des Bremswegs in m/s
 * sowie der Formel Geschwindigkeit^2 / (2 * Bremsweg) berechnet wird.
 * 
 * @author Stefan Berger
 */
public class Bremsweg {
	private double geschwindigkeit;
	private double bremsverzoegerung;
	private double bremsweg;
	
	/**
	 * Erstellt ein Objekt vom Typ Bremsweg mit dem angegebenen Wert fuer die Geschwindigkeit in km/h und 6 m/s fuer den Bremsweg.
	 */
	public Bremsweg(double geschwindigkeit){
		this.geschwindigkeit = geschwindigkeit * 1000 / 60 / 60;
		this.bremsverzoegerung = 6;
	}
	
	/**
	 * Erstellt ein Objekt vom Typ Bremsweg mit den angegebenen Werten fuer die Geschwindigkeit in km/h und den Bremsweg in m/s
	 */
	public Bremsweg(double geschwindigkeit, double bremsverzoegerung){
		this.geschwindigkeit = geschwindigkeit * 1000 / 60 / 60;
		this.bremsverzoegerung = bremsverzoegerung;
	}
	
	/**
	 * berechnet den Bremsweg anhand der Formel v^2 / 2b
	 */
	public void berechne(){
		this.bremsweg = Math.pow(this.geschwindigkeit, 2) / (2 * this.bremsverzoegerung);
	}
	
	/**
	 * Gibt den ermittelten Bremsweg zurueck
	 */
	public double getBremsweg(){
		return this.bremsweg;
	}

	/**
	 * Gibt die Attribute des Objekts als formatierten String zurueck
	 */
	public String toString(){
		String string = "Bei Geschwindigkeit %.2f";
		string += "\nund Bremsverzoegerung %.2f m/s";
		string += "\nbetraegt der Bremsweg %.2f";
		return String.format(string, this.geschwindigkeit, this.bremsverzoegerung, this.bremsweg);
	}
}
