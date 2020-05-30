package application;

/**
 * this class contains methods to generate ready-made shapes,
 * that can be used in other programs.
 * Dear students: any kind of shape is allowed!
 * Program a shape and add it to this class. Thank you!
 * @author Agathe Merceron
 */

import javafx.scene.Group;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import javafx.scene.shape.Polygon;
import javafx.scene.shape.Shape;

public class OurShapes {
    
    /**
     * this method generates a star that fits in a frame with the given width
     * and the given height, and filled with the given color
     * @param w, width of the frame for the star
     * @param h, height of the frame for the star
     * @param c, color or gradient to fill the star
     * @return a frame with a star in it
     */
    
    public static Group makeStar(double w, double h, Paint c) {
        // for more flexibility a color for the edge of the star
        // could be added as a parameter. Presently, the edge is black.
        double space = h/6;
        Group root = new Group();
        
        // one triangle
        Polygon poly1 = new Polygon(w/2, space, w/2 + w/4, h - 2*space,
                w/2 - w/4 , h - 2*space);
        
        // the second triangle
        Polygon poly2 = new Polygon(w/2 - w/4, 2*space, w/2 + w/4,  2*space,
                w/2 , h - space);
        
        //star as union of 2 triangles
        Shape union = Shape.union(poly1, poly2);
        union.setFill(c);
        union.setStroke(Color.BLACK);
        
        root.getChildren().addAll(union);
        return root;
        
    }

}