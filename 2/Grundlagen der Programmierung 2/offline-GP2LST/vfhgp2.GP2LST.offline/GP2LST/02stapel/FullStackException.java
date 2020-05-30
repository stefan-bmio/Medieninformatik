/**
 * Überschrift:   FullStackException-Klasse
 * Beschreibung:  Exception-Klasse von der beim Hinzufügen eines Elements
 *                auf einen vollen Stack ein Objekt erzeugt wird.
 * Copyright:     Copyright (c) 2002
 * Organisation: BHT-Berlin (Projektgruppe VFH)
 * @author  M.Esponda
 * @version 1.0
 */
public class FullStackException extends Exception {

    /**
     * erzeugt ein  FullStackException-Objekt
     */
    
    public FullStackException() {
    }
    
    /**
     * erzeugt ein  FullStackException-Objekt mit der Nachricht problem
     * @param problem Nachricht der Ausnahme
     */

    public FullStackException(String problem) {
        super(problem);
    }

}