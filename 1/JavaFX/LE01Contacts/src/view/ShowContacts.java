package view;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.ScrollPane;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.stage.Stage;
import model.Contact;

/**
 * A contacts application with sample data.
 * 
 * @author Stefan Berger
 */
public class ShowContacts extends Application {
	/**
	 * Entry point of the JavaFX application
	 */
	@Override
	public void start(Stage primaryStage) {
		// create the main scene
		BorderPane root = new BorderPane();
		Scene scene = new Scene(root, 400, 400);
		scene.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
		primaryStage.setScene(scene);

		// decorate the view
		Pane leftPane = new Pane();
		leftPane.setPrefSize(80, 400);
		leftPane.setBackground(
				new Background(new BackgroundFill(Color.rgb(195, 192, 190), CornerRadii.EMPTY, Insets.EMPTY)));
		root.setLeft(leftPane);

		// create the contacts pane and add 5 contacts
		GridPane contactsPane = new GridPane();
		for (int i = 0; i < 5; i++) {
			contactsPane.add(new ContactPane(Contact.getDefaultContact(i)), 0, i);
		}

		// display the contacts pane in a scroll pane
		ScrollPane scrollPane = new ScrollPane();
		scrollPane.setContent(contactsPane);
		root.setCenter(scrollPane);

		// show the main window
		primaryStage.setTitle("Show Contacts");
		primaryStage.show();
	}

	public static void main(String[] args) {
		launch(args);
	}
}
