package swt.test.calculator;

public class Calc {
    public int add(int a, int b) {
        return a + b;
    }

    public float div(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero");
        }

        return a / b;
    }
}
