var filter=getFilter();
$.get("/4/SWT/OOD/query.php?filter=" + filter.field + "&value=" + filter.value,
  (result) => {
    for (var a of JSON.parse(result)){
      var review = $("<div class='review'></div>");
      $("#container").append(review);
      review.append("<div>" + a.text + "</div");
      var rating = $("<div></div");
      for (var i = 0; i < a.rating; i++){
        rating.append("<span class='fa fa-star checked'></span>");
      }
      for (var i = a.rating; i < 5; i++){
        rating.append("<span class='fa fa-star unchecked'></span>");
      }
      review.append(rating);
    }
 });
