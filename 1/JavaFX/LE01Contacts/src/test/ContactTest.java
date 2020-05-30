package test;

import java.util.ArrayList;
import java.util.List;

import model.Contact;

/**
 * Test class for program logic
 * 
 * @author Stefan Berger
 */
public class ContactTest {
	public static void main(String[] args) {
		List<String> emailAddresses = new ArrayList<>();
		emailAddresses.add("a@b.c");
		emailAddresses.add("ab");
		emailAddresses.add("@abc");
		emailAddresses.add("test@test.test");
		emailAddresses.add("abc@");
		Contact contact = new Contact("first", "last", null, emailAddresses);
		System.out.println(contact);
	}
}
