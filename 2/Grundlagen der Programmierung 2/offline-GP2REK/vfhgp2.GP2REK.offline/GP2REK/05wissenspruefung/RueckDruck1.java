/**
* RueckDruck1.java
* Eingegebener String wird mittels rekursiver Methode
* rueckwaerts ausgegeben.
* @author kraft
*/

import java.io.*;

public class RueckDruck1 {

  static int i=0;
  static char buchst = 0;

  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String text = br.readLine();
    br.close();
    StringBuffer alt = new StringBuffer(text);
    StringBuffer neu = new StringBuffer();
    rueckwaerts(alt, neu, text);
  }

  public static void rueckwaerts(StringBuffer alt, StringBuffer neu, String text) {
    if(i<text.length()){
      buchst  = alt.charAt(i);
      neu.append(buchst);
      i++;
      rueckwaerts(alt, neu, text);
    }
    else {
      System.out.println((neu.reverse()).toString());
    }
  }
}