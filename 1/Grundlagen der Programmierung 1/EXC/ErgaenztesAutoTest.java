public class ErgaenztesAutoTest {
	public static void main(String[] args){		
		ErgaenztesAuto auto = new ErgaenztesAuto("Max Mustermann", "VW Golf", "Rot", 2015, 110, 500, "München", "123");
		System.out.println(auto);
		System.out.println();
		
		auto.setzeNeuesZiel("Berlin", 600);
		System.out.println();
		
		System.out.println(auto);

		System.out.println("Teste IllegalArgumentException");
		try{
			ErgaenztesAuto auto1 = new ErgaenztesAuto("Max Mustermann", "VW Golf", "Rot", 2015, 110, -1, "München", "123");
		}catch(IllegalArgumentException e){
			e.printStackTrace();
		}
		
		System.out.println("Teste FalscheErstzulassungAusnahme");
		try{
			ErgaenztesAuto auto2 = new ErgaenztesAuto("Max Mustermann", "VW Golf", "Rot", 2021, 110, 0, "München", "123");
			auto2.getAlter();
		}catch(ErgaenztesAuto.FalscheErstzulassungAusnahme e){
			e.printStackTrace();
		}
	}
}
