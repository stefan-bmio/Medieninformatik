package de.vfh.gp2.aki;

import java.util.Comparator;

/**
 * Zeigt wie innere Klassen vereinbart werden koennen. 
 * Demonstriert werden nur die syntaktischen Eigenschaften.
 * 
 * @author K. Hornemann - A. Merceron
 * @version 1.02, 03/2011
 */
public class InnerClassDemo { // aeussere Klasse

    // Konstruktor
    public InnerClassDemo(String i_s) {
    }

    public void methode1(double i_zahl) {
        // lokale innere Klasse
        class InnerClass1 {
        }
    }

    public void methode2(float i_zahl) {
        // anonyme innere Klasse
        Comparator<String> comp = new Comparator<String>() {
            public int compare(String o1, String o2) {
                String s1 = o1;
                String s2 = o2;
                return s1.compareTo(s2);
            }
        };
    }

    // innere Klasse
    class InnerClass2 {
        public InnerClass2(int i_zahl) {
        }
    }

    // statische innere Klasse
    public static class InnerClass3 {
    }
}