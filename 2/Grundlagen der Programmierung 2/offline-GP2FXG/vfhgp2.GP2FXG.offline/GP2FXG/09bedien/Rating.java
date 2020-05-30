package model;

/**
 * An object of this class represents a rating of an item.
 * A rating is a number between 1 and 5
 * and  may have a comment
 * @author agathe merceron
 *
 */

public class Rating {
    private int rating;
    private String comment;
    
    /**
     * creates a Rating-Object with the given rating
     * and an empty comment.
     * If the given rating is not between 1 and 5, the middle value 3 is taken
     * @param rating, a number between 1 and 5
     */
    
    Rating (int rating) {
     this.comment = "";
     if (1 <= rating && rating <= 5) {
         this.rating = rating;
     } else {
         this.rating = 3;
     }
     //remember this other way of programming it?
//       this.rating = (1 <= rating && rating <= 5)? rating : 3;
    }
    
    /**
     * creates a Rating-Object with the given rating
     * and the given comment.
     * If the given rating is not between 1 and 5, the middle value 3 is taken
     * @param rating, a number between 1 and 5
     * @param comment, the given comment
    */
    
    Rating (int rating, String comment) {
     this.comment = comment;
     this.rating = (1 <= rating && rating <= 5)? rating : 3;
    }
    
    /**
     * returns the actual value of the rating
     * @return the actual value
     */
    
    public int getRating(){
     return rating;
    }
    
    /**
     * returns the actual comment of this rating
     * @return the actual comment
     */
    public String getComment(){
     return comment;
    }
    
    /**
     * check whether rating is between 1 and 5
     * @param rating, the rating to be checked
     * @return true if rating is between 1 and 5, false otherwise.
     */
    
    public static boolean checkRating (int rating) {
     return (1 <= rating && rating <= 5);
    }
    
     /**
     * updates the value of the rating if the given rating
     * is between 1 and 5, otherwise does nothing
     * @param rating the given value
     */
 
    
    public void setRating(int rating){
     if (checkRating(rating)) {
         this.rating = rating;
     }
    }
    
    /**
     * updates the current rating with the given comment
     * @param comment, the new comment
     */
    public void setComment(String comment){
     this.comment = comment;
    }
    
    @Override
    public String toString(){
     return rating+" "+comment;
    }
}
