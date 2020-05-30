package swt.test.calculator;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;

public class CalcTest {
    Calc c;

    @BeforeEach
    public void setUp() {
        c=new Calc();
    }

    @Test
    public void testAdd() throws Exception {
        assertEquals(42, c.add(40, 2));
    }

    @Test
    public void testDiv() throws Exception {
        assertEquals(42, c.div(84, 2), Double.MIN_VALUE);
    }

    @Test
    public void testDivByZero() throws Exception {
        assertThrows(IllegalArgumentException.class, () -> c.div(42, 0));
    }
}