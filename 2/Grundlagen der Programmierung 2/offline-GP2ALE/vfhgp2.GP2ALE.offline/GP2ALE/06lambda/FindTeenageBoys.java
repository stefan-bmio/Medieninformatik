/**
 * Diese Implementierung des Interfaces prueft, ob ein Mitglied maennlich ist,
 * und zwischen 13 und 19 Jahre alt ist.
 * 
 * @author Agathe Merceron
 *
 */
public class FindTeenageBoys implements CheckMitglied {
	/**
	 * prueft, ob ein Mitglied maennlich ist, und zwischen 13 und 19 Jahre alt
	 * ist.
	 */
	@Override
	public boolean test(Mitglied p) {
		return p.gender == Mitglied.Sex.MALE && p.getAge() >= 13
				&& p.getAge() <= 19;
	}
}