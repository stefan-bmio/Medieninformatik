import java.time.LocalDate;

/**
 * Diese Klasse beschreibt Mitglieder eines Vereins.
 * @author Agathe Merceron
 */
public class Mitglied {
	public enum Sex {
		MALE, FEMALE
	}

	// all attributes are visible in the package not 
	// to write getters and setters ;-)
	String name;
	LocalDate birthday;
	Sex gender;
	String emailAddress;

	/**
	 * erzeugt ein Mitglied Objekt
	 * 
	 * @param name, Name des Mitglieds
	 * @param year, Geburtsjahr
	 * @param month, Geburtsmonat
	 * @param dayOfMonth, Geburtstag
	 * @param male, false wenn weiblich, true sonst
	 * @param email, Email-Adresse
	 */
	public Mitglied(String name, int year, int month, int dayOfMonth,
			boolean male, String email) {
		this.name = name;
		this.birthday = LocalDate.of(year, month, dayOfMonth);
		if (male) {
			this.gender = Sex.MALE;
		} else {
			this.gender = Sex.FEMALE;
		}
		this.emailAddress = email;
	}

	/**
	 * gibt das Alter zurueck
	 * @return das Alter dieses Mitglieds
	 */
	public int getAge() {
		int birthYear = birthday.getYear();
		int actualYear = LocalDate.now().getYear();
		return actualYear - birthYear;
	}

	/**
	 * gibt das Geschlecht zurueck
	 * @return das Geschlecht des Mitgliedes
	 */
	public Mitglied.Sex getGender() {
		return this.gender;
	}

	@Override
	public String toString() {
		return this.name + " " + this.birthday.toString() + " "
				+ this.gender.toString() + " " + this.emailAddress;
	}

	/**
	 * Gibt die Zeichenkette-Darstellung von this Mitglied zu Bildschirm aus
	 */
	public void printMitglied() {
		System.out.println(toString());
	}
}
