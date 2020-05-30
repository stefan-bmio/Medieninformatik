/**
  * Demoprogramm Vergleich Vector - Array
  * @author VFH, Karsten Hornemann
  * @version 1.0
  */

import java.util.Vector;
import java.util.Date;

public class VectorTest {
    //maximale Elementenzahl
    private static final int SIZE=1300000;

    public static void main(String args[]) {
        //für die Zeitmessung
        long start,end;

        Vector v = new Vector();
        Integer a[] = new Integer[SIZE];

        //Array zuweisen
        start=new Date().getTime();
        for (int i=0; i<SIZE; i++) {
            a[i] = new Integer(i);
        }
        end = new Date().getTime();
        System.out.println("Zuweisen der Arrayelemente dauerte "
            +(end-start)+" ms");

        //auf Array zugreifen
        start = new Date().getTime();
        for (int i=0; i<SIZE; i++) {
            Integer temp = a[i];
            a[i] = new Integer(temp.intValue()+1);
        }
        end=new Date().getTime();
        System.out.println("Zugriff auf Arrayelemente dauerte "
            + (end-start) + " ms");

        //Vektor zuweisen
        start=new Date().getTime();
        for (int i=0; i<SIZE; i++) {
            v.add(new Integer(i));
        }
        end=new Date().getTime();
        System.out.println("Zuweisen der Vektorelemente dauerte "
            + (end-start) + " ms");

        //auf Vektor zugreifen
        start=new Date().getTime();
        for (int i=0; i<SIZE; i++) {
            Integer temp=(Integer)v.get(i);
            v.set(i,new Integer(temp.intValue()+1));
        }
        end=new Date().getTime();
        System.out.println("Zugriff auf Vektorelemente dauerte "
            + (end-start)+ " ms");
    }
}