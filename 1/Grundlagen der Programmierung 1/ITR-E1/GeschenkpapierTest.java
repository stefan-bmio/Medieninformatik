
public class GeschenkpapierTest {
	public static void main(String[] args){
		Geschenkpapier.druckeMuster(10, 20, "** ");
		
		String[] muster = new String[] {":-) ", " )-:"};
		Geschenkpapier.druckeMuster(10, 20, muster);
	}
}
