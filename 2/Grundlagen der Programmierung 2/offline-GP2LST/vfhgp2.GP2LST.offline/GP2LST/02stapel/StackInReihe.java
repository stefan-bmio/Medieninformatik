
/**
 * Überschrift: Stapel-Schnittstelle
 * Beschreibung: Schnittstelle zur Implementierung des Stapel
 * Copyright:     Copyright (c) 2002
 * Organisation: TFH-Berlin (Projektgruppe VFH)
 * @author   M. Esponda
 * @version 1.0
 */


public interface StackInReihe {

   /**
    * Falls der Stapel noch nicht voll ist, wird das Objekt 'o' dem Stapels als
    * oberstes Element hinzugefügt, andernfalls wird ein FullStackException-Objekt erzeugt.
    * @param o
    * @throws FullStackException
    */
   public void push( Object o )  throws FullStackException;

   /**
    * Falls der Stapel nicht leer ist, wird das oberste Element des Stapels entfernt
    * und als Ergebnis zurückgegeben, andernfalls wird ein EmptyStackException-Objekt erzeugt.
    * @return
    * @throws EmptyStackException
    */
   public Object pop()           throws EmptyStackException;

   /**
    * Überprüft, ob der Stapel leer ist.
    * @return
    */
   public boolean empty();

   /**
    * Überprüft, ob der Stapel voll ist.
    * @return
    */
   public boolean full();
}