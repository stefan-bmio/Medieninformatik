function formToObject(){
  var formArray = $(this).serializeArray();
  var object = {};
  for (var i = 0; i < formArray.length; i++){
    object[formArray[i]['name']] = formArray[i]['value'];
  }

  return object;
}

function handleError(result, idprefix){
  console.log(result.responseText);
  result = JSON.parse(result.responseText);
  for (var field in result.messages){
    var caption = $("#label-" + idprefix + field).attr("text");
    if(caption !== undefined){
      $("#label-" + idprefix + field).html($("<span class=\"label-error\">" + caption + " " + result.messages[field] + "</span>"));
    }
  }
}

function initLabels(idprefix){
  var labels = $("label[id^=label-" + idprefix + "]");
  labels.each((i) => {
    var caption = $("#" + labels[i].id).attr("text");
    $("#" + labels[i].id).text(caption);
  });
}
