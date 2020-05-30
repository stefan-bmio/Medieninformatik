import java.util.Comparator;

public class NummerComparator implements Comparator<Figur> {
	@Override
	public int compare(Figur o1, Figur o2) {
		return o1.getNummer() - o2.getNummer();
	}
}