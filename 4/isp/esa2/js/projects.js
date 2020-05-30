$(document).ready(function() {
  initProjects();
});

$("#projects").change(function () {
  initLabels("p_");
  $("#pname").val("");
  $("#pdescription").val("");
  if(this.value != "0"){
    $.get("/isp/esa2/php/resources/project.php?id=" + this.value, (result) => {
      result = JSON.parse(result);
      $("#pname").val(result.name);
      $("#pdescription").val(result.description);
    });
  }

  initRequirements(this.value);
});

$("#psave").click(function () {
  initLabels("p_");
  var object = formToObject.bind($("#pform"))();
  object.id = $("#projects").val();
  if ($("#projects").val() === "0"){
    $.ajax({
            url: "/isp/esa2/php/resources/project.php",
            type: "POST",
            data: JSON.stringify(object),
            success: function(result){
              result = JSON.parse(result);
              initProjects(result.messages.id);
              initRequirements(this.value);
            },
            error: function(result){
              handleError(result, "p_");
            },
            contentType: "application/json"
          }
    );
  }else{
    $.ajax({
            url: "/isp/esa2/php/resources/project.php",
            type: "PUT",
            data: JSON.stringify(object),
            success: function(result){
              initProjects(object.id);
            },
            contentType: "application/json"
          }
    );
  }

  return false;
});

function initProjects(selectedValue) {
  $.get("/isp/esa2/php/resources/project.php", (result) => {
    $("#projects").html($("<option value=\"0\" data-content=\"<i class='fas fa-plus' style='color:green'></i> Neues Projekt erstellen\"> Neues Projekt erstellen</option>"));
    var projects = JSON.parse(result);
    projects.forEach(p => {
      $("#projects")
        .append($('<option value="' + p.id + '">' + p.name + "</option>"));
    });
    $("#projects").val(selectedValue);
    $("#projects").selectpicker({
      size: 7.64
    });

    $("#projects").selectpicker("refresh");
  });
}

$("#requirements").change(function () {
  resetRequirements();
  initLabels("r_");
  if(this.value != "0"){
    $.get("/isp/esa2/php/resources/requirement.php?id=" + this.value, (result) => {
      result = JSON.parse(result);
      $("#rname").val(result.name);
      $("#author").val(result.author);
      $("#ac").val(result.ac);
      $("#use-case").val(result.use_case);
      $("#priority").val(result.priority);
      $("#dependencies").val(result.dependencies);
      $("#history").val(result.history);
      $("#rdescription").val(result.description);
    });
  }
});

$("#rsave").click(function () {
  initLabels("r_");
  var object = formToObject.bind($("#rform"))();
  object.project_id = $("#projects").val();

  if ($("#requirements").val() === "0"){
    $.ajax({
            url: "/isp/esa2/php/resources/requirement.php",
            type: "POST",
            data: JSON.stringify(object),
            success: function(result){
              result = JSON.parse(result);
              initRequirements(object.project_id, result.messages.id);
            },
            error: function(result){
              handleError(result, "r_");
            },
            contentType: "application/json"
          }
    );
  }else{
    object.id = $("#requirements").val();
    $.ajax({
            url: "/isp/esa2/php/resources/requirement.php",
            type: "PUT",
            data: JSON.stringify(object),
            success: function(result){
              initRequirements(object.project_id, object.id);
            },
            contentType: "application/json"
          }
    );
  }

  return false;
});

function initRequirements(projectId, selectedValue){
  if(projectId === "0"){
    resetRequirements();
    resetTable();
  }else{
    $.get("/isp/esa2/php/resources/requirement.php?project_id=" + projectId, (result) => {
      $("#requirements").html($("<option value=\"0\" data-content=\"<i class='fas fa-plus' style='color:green'></i> Neue Anforderung\"> Neue Anforderung</option>"));
      var requirements = JSON.parse(result);
      requirements.forEach(r => {
        $("#requirements")
          .append($('<option value="' + r.id + '">' + r.name + "</option>")) ;
      });
      $("#requirements").val(selectedValue);
      $("#requirements").selectpicker("refresh");
      $("#requirements").selectpicker({
        size: 10.64
      });
      initTable(requirements);
    });
  }
}

function resetRequirements(){
  var fields = ["rname", "author", "ac", "use-case", "priority", "dependencies", "history", "rdescription"];
  fields.forEach((field) => {
    $("#" + field).val("");
  });
}

function initTable(requirements){
  resetTable();
  requirements.forEach((r) => {
    $("table").append($("<tr><td>" + r.name + "</td><td>" + r.priority + "</td><td>" + r.ac + "</td></tr>"));
  });
}

function resetTable(){
  $("table").html("<tr><th>Name</th><th>Priorit&auml;t</th><th>Abnahmekriterium</th></tr>");
}
