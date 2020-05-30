package view;

import javafx.geometry.Insets;
import javafx.geometry.VPos;
import javafx.scene.control.Label;
import javafx.scene.control.ScrollPane;
import javafx.scene.image.ImageView;
import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import model.Contact;

/**
 * A GridPane that contains contact data
 * 
 * @author Stefan Berger
 */
public class ContactPane extends GridPane {
	private Contact contact;

	/**
	 * Constructs a ContactPane
	 * 
	 * @param contact
	 */
	public ContactPane(Contact contact) {
		this.contact = contact;
		this.setupGrid();
		this.addNodes();
	}

	/**
	 * Sets certain GridPane attributes
	 */
	private void setupGrid() {
		this.getColumnConstraints().add(new ColumnConstraints(190));
		this.setPadding(new Insets(10));
		this.setHgap(10);
	}

	/**
	 * Adds a node for each contact attribute
	 */
	private void addNodes() {
		this.addNames();
		this.addPhoto();
		this.addEmailAddresses();
	}

	/**
	 * Adds nodes for the first and the last name of the contact
	 */
	private void addNames() {
		this.add(new Label(this.contact.getFirstName()), 0, 0);
		this.add(new Label(this.contact.getLastName()), 0, 1);
	}

	/**
	 * Adds a node for the photo of the contact
	 */
	private void addPhoto() {
		ImageView imageView = new ImageView(this.contact.getPhoto());
		this.add(imageView, 1, 0, 1, 3);
		GridPane.setValignment(imageView, VPos.CENTER);
	}

	/**
	 * Adds a node for the list of email addresses of the contact
	 */
	private void addEmailAddresses() {
		VBox eMailAddressesBox = new VBox();
		this.contact.getEmailAddresses()
				.forEach(eMailAddress -> eMailAddressesBox.getChildren().add(new Label(eMailAddress)));
		ScrollPane emailAddressScrollPane = new ScrollPane(eMailAddressesBox);
		emailAddressScrollPane.setMaxHeight(50);
		this.add(emailAddressScrollPane, 0, 2);
	}
}
