package cocktail;

import java.util.*;
import java.io.*;

/**
 * Speichert Cocktailnamen, Zutaten und dazugehoerige Mengen fuer einen
 * bestimmten Cocktail ab.
 * @author VFH, Anka Shergowski, Karsten Hornemann
 * @version 2.0
 */
public class Menge implements Serializable {

  public String cName; // Cocktailname
  private String zName; //  Zutat-Objekt
  private String menge; // menge als String, da Einheit dazu angegeben wird z.B. 2 cl

  /**
   * Liest alle benoetigten Informationen ein.
   * Die Informationen wurden von Cocktail.java uebergeben.
   * @param cName Cocktailname
   * @param zName Zutatenname
   * @param menge Mengenangabe
   */
  public Menge(String cName, String zName, String menge) {
    this.cName=cName;
    this.zName=zName;
    this.menge=menge;
  }
  /**
   * Methode zur Rueckgabe der gespeicherten Werte; Hier: Menge.
   * @return Mengenangabe
   */
  public String getMenge(){
    return menge;
  }

  /**
   * Methode zur Rueckgabe der gespeicherten Werte; Hier: Zutat
   * @return Zutatenname
   */
  public String getZutat(){
    return zName;
  }
}