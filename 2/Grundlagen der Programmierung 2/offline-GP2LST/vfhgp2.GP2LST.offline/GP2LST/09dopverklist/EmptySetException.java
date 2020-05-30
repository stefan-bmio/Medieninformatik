/**
 * Ueberschrift: EmptyStackException-Klasse 
 * Beschreibung: 
 * Exception-Klasse von der beim Zugriff auf einen leeren Stack ein 
 * Objekt erzeugt wird. 
 * Copyright: Copyright (c) 2002 
 * Organisation: BHT-Berlin (Projektgruppe VFH)
 * 
 * @author M.Esponda
 * @version 1.0
 */

public class EmptySetException extends Exception {

    public EmptySetException() {
    }

    public EmptySetException(String reason) {
        super(reason);
    }

}