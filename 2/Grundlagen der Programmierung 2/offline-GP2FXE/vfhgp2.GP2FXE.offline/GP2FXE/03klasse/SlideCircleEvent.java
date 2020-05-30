package application;
    
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Slider;
import javafx.scene.layout.BorderPane;
import javafx.scene.shape.Circle;

/**
 * this program demonstrates the scaling of a Node, here Circle,
 * when the mouse is released from another Node, here Slider.
 * @author agathe merceron
 *
 */


public class SlideCircleEvent extends Application {
    //dimension of the scene
    private static final double WIDTH = 300;
    private static final double HEIGTH = 400;
    
    @Override
    public void start(Stage primaryStage) {
        try {
            BorderPane root = new BorderPane();
            
            double min = WIDTH > HEIGTH ? HEIGTH : WIDTH;
            
            Circle c = new Circle(WIDTH/2, HEIGTH/2, min/3);
            root.setCenter(c);
            
            Slider slider = new Slider(0, 1, 0.5);
            root.setBottom(slider);
            
            // Slider inherits from Node and so
            // from all the properties related to the
            // movements of the mouse.
            // When the mouse is released from slider, 
            // the ActionHandler programmed as lambda expression
            // causes the Circle c to scale
            slider.setOnMouseReleased(e -> {
                c.setScaleX(slider.getValue());
                c.setScaleY(slider.getValue());
            });

            
            Scene scene = new Scene(root,400,400);
            
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