public abstract class AbstractClass2 {
    private final String test = "Ich bin ein Teststring!";

    abstract void method1();

    abstract String method2();

    public void ausgabe() {
        System.out.println(test);
    }
}