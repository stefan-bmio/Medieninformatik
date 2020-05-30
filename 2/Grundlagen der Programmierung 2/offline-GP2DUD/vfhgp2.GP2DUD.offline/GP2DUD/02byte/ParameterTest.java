/**
 * Pruefen und Ausgeben von Uebergabeparametern.
 * 
 * @author skalt
 * @version 2.0 07/2009
 */
class ParameterTest {

    public static void main(String[] args) {
        // Pruefen ob Parameter uebergeben wurden
        if (args.length > 0) {
            System.out.println("Es wurden " + args.length
                    + " Parameter uebergeben.");
            // alle uebergebenen Parameter ausgeben
            for (int i = 0; i < args.length; i++) {
                System.out.println("Parameter " + i + ": " + args[i]);
            }
        }
        // keine Parameter uebergeben
        else {
            System.out.println("Es wurden keine Parameter uebergeben.");
        }
    }
}