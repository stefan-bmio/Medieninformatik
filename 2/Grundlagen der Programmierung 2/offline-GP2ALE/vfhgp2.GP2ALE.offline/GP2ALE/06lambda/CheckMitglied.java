/**
* ein Funktionale Interface um eine Bedingung eines Mitglied-Objekt zu prüfen
* @author Agathe Merceron
*
*/
public interface CheckMitglied {
/**
* prüft ob ein Mitglied-Objekt eine bestimmte Bedingung erfuellt
* @param p
* @return true, falls p die Bedingung erfuellt, false sonst
*/
boolean test(Mitglied p);
}
