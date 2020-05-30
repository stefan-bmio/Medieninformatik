$("form").submit(function () {
  initLabels('');
  var object = formToObject.bind(this)();
  $.ajax({
          url: "/isp/esa3/php/resources/user.php",
          type: "POST",
          data: JSON.stringify(object),
          success: function(result){
            var alert = $(".alert.alert-success.alert-login-invisible");
            alert.removeClass("alert-login-invisible");
            alert.addClass("alert-login-visible");

            for(var field in ["username", "password", "password", "password_confirm"]){
              var caption = $("#label-" + field).attr("text");
              $("#label-" + field).text(caption);
            }
          },
          error: function(result){
            handleError(result, '');
          },
          contentType: "application/json"
        }
  );

  return false;
});
