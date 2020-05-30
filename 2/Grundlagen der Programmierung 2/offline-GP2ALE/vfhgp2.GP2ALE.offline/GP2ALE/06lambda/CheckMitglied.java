/**
* ein Funktionale Interface um eine Bedingung eines Mitglied-Objekt zu pr�fen
* @author Agathe Merceron
*
*/
public interface CheckMitglied {
/**
* pr�ft ob ein Mitglied-Objekt eine bestimmte Bedingung erfuellt
* @param p
* @return true, falls p die Bedingung erfuellt, false sonst
*/
boolean test(Mitglied p);
}
