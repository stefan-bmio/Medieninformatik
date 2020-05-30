package swt.ant;

import org.junit.Test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;


public class AntTestTest {
    @Test
    public void test() throws Exception {
        assertThat(AntTest.testMe(), is("test"));
    }
}