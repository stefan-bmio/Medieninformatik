package application;
    
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Slider;
import javafx.scene.layout.BorderPane;
import javafx.scene.shape.Circle;


/**
 * this program demonstrates the binding of a Node, here a Circle,
 * to the value of a Slider-Object.
 * Idea borrowed from JavaFX 8 by Anton Epple p. 58
 * @author agathe merceron
 *
 */




public class SliderCircleA extends Application {
    //dimension of the scene
    private static final double WIDTH = 300;
    private static final double HEIGTH = 400;
    
    @Override
    public void start(Stage primaryStage) {
        try {
            BorderPane root = new BorderPane();
            
            double min = WIDTH > HEIGTH ? HEIGTH : WIDTH;
            
            Circle c = new Circle(WIDTH/2, HEIGTH/2, min/2);
            root.setCenter(c);
            
            Slider slider = new Slider(0, 1, 0.5);
            root.setBottom(slider);
            c.scaleYProperty().bind(slider.valueProperty());
            
            Scene scene = new Scene(root,400,400);
            
            primaryStage.setScene(scene);
            primaryStage.setTitle("SliderCircle");
            primaryStage.show();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        launch(args);
    }
}