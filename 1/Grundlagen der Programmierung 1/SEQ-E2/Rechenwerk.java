/** Rechenwerk.java
  *  Klasse zur Ausfuehrung der vier Grundrechenarten
  *  fuer ganze Zahlen
  *
  *  @author Stefan Berger, s68065@beuth-hochschule.de
  *  @version 1.0, 06.11.2016
  */
 public class Rechenwerk {
	 /**
	  * Fuehrt die Operationen Addition, Subtraktion, Multiplikation und Division für jeweils zwei ganze Zahlen aus .
	  * 
	  * @param zahl1 die erste Zahl
	  * @param zahl2 die zweite Zahl
	  * @param op einer der Operatoren + - * /
	  * @return Das Ergebnis der Operation
	  */
     public int rechnen (int zahl1, int zahl2, char op) {
    	 int ergebnis;
    	 if (op == '+') { 
    		 ergebnis = zahl1 + zahl2;
    	 }
    	 else if (op == '-') { 
    		 ergebnis = zahl1 - zahl2;
    	 }
    	 else if (op == '*') { 
    		 ergebnis = zahl1 * zahl2;
    	 }
    	 else /* op == '/' */ { 
    		 ergebnis = zahl1 / zahl2;
    	 }
    	 return ergebnis;
     }
 }