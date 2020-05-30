package application;

/**
 * this class illustrates a possibility to combine
 *  Group and GridPane, and reuse already programmed shapes.
 * The class OurShapes is used to show a scene with 5 stars.
 * @author agathe merceron
 */

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

public class GeometrischeFiguren04 extends Application {
	
	private static final double W = 300;
	private static final double H = 300;
	
	@Override
	public void start(Stage primaryStage) {
		try {
			GridPane root = new GridPane();
			root.setPadding(new Insets(25, 25, 25, 25));
			// it is important to put some space between the columns
			// as a Group is NOT a Region-Object;
			// the method padding cannot be called with a Group-Object
			root.setHgap(10);
			root.setVgap(10);
			
			//adding 5 stars of different colors
			Color[] colors = new Color[]{Color.BLUE, Color.CORNSILK, Color.GREENYELLOW,
					Color.PINK, Color.YELLOW};
			for (int i=0; i<5; i++) {
				Group star1 =  OurShapes.makeStar(60, 60, colors[i]);
				root.add(star1, i, 0);
			}
			Scene scene = new Scene(root, W, H);
			primaryStage.setScene(scene);
			primaryStage.setTitle("GeometrischeFiguren04");
			primaryStage.show();
		} catch (Exception e) {
		e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}

}