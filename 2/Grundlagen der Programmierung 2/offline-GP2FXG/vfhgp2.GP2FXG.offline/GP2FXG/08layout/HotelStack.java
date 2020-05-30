package layouts;

import javafx.scene.paint.Color;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.StackPane;
import javafx.scene.shape.Circle;
import javafx.stage.Stage;

/**
 * This class illustrates StackPane.
 * @author agathe merceron
 *
 */

public class HotelStack extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        try {
            StackPane root = new StackPane();
            

            Circle c1 = new Circle(100);
            c1.setFill(Color.RED);

            Circle c2 = new Circle(80);
            root.getChildren().addAll(c1, c2);
            
            Image image = new Image (getClass().
                    getResource("/resources/ibisMitteBerlin.jpg").toString());
            ImageView imageview = new ImageView(image);
            root.getChildren().add(imageview);
                
            Scene scene = new Scene(root,400,400);
            primaryStage.setTitle("Hotel Stack");
            primaryStage.setScene(scene);
            primaryStage.show();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
        
    public static void main(String[] args) {
        launch(args);
    }
}