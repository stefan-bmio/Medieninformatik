/**
 * <p>Title: DynamicSet-Klasse </p>
 * <p>Description:
 * Die Grundoperationen einer dynamische Datenmenge werden in dieser
 * Schnittstelle definiert </p>
 * @author M.Esponda - A. Merceron - Umstellung auf generic
 * @version 1.1
 */

//public interface DynamicSetGen<E extends Comparable<? super E>> {
	public interface DynamicSetGen<E> {
    /**
     * Einfüge-Operation
     * @param e
     */
    public void insert( E e );

    /**
     * Lösch-Operation
     * @return
     * @throws EmptySetException
     */
    public E delete() throws EmptySetException;

    /**
     * Such-Operation
     * @param o
     * @return
     */
    public boolean contains( E o );

    /**
     * Es wird überprüft, ob die Datenmenge leer ist.
     * @return
     */
    public boolean  isEmpty ();
}