import java.util.Comparator;

public class FarbeComparator implements Comparator<Figur> {
	@Override
	public int compare(Figur o1, Figur o2) {
		return o1.getFarbe().compareTo(o2.getFarbe());
	}
}