package utilities;

import java.text.NumberFormat;

/**
 * A class to define various utilities.
 * @author agathe merceron
 *
 */

public class Mix {
    
    /**
     * This methods formats a number to two decimals
     * and returns its String representation
     * @param f, number to format
     * @return the String representation of the number with max 2 decimals
     */
    
    public static String formatTo2Decimals(float f) {
     
     NumberFormat format2 = NumberFormat.getInstance();
     format2.setMaximumFractionDigits(2);
     return format2.format(f);
    }
}