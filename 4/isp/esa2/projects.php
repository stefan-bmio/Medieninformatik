<?php
session_start();
if(!isset($_SESSION['user_id'])){
  header("Location: /isp/esa2/login.php");
  die();
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
<link href="css/attributes.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand attrlogo">attributes</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Projekte</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Angemeldet als <span class="name"><?php echo $_SESSION['username']?> </span><span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="logout.php">Abmelden</a></li>
          </ul>
        </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <h2>Projekte</h2>

      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="collapsible-text">
              1. Projekt</a>
            </h4>
          </div>
          <div id="collapse1" class="panel-collapse collapse in">
            <div class="panel-body">
              <div class="row">
                  <div class="col-sm-8">
                    <form id="pform" role="form">
                      <div class="form-group">
                        <select class="selectpicker" id="projects">
                        </select>
                      </div>
                      <div class="form-group form-label">
                        <label for="pname" id="label-p_name" text="Name">Name</label>
                        <input type="text" class="form-control" id="pname" name="name">
                      </div>
                      <div class="form-group form-label">
                        <label for="pdescription">Beschreibung</label>
                        <textarea class="form-control" id="pdescription" name="description" rows="1"></textarea>
                      </div>
                    </form>
                </div>

                <div class="col-sm-4">
                  <div class="panel panel-default details">
                      <div class="panel-heading">
                          <h3 class="panel-title">
                              Projektdetails
                          </h3>
                      </div>
                      <div class="panel-body">
                          Hier k&ouml;nnen Projekte erstellt und deren Eigenschaften festgelegt werden.
                      </div>
                  </div>

                  <hr class="details"/>

                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-block" id="psave">Projekt speichern</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="collapsible-text">
              2. Anforderungen</a>
            </h4>
          </div>
          <div id="collapse2" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="row">
                <div class="col-sm-8">
                  <form id="rform" role="form">
                    <div class="form-group form-label col-sm-12">
                      <select class="selectpicker" id="requirements">
                        <option value="0" data-content="<i class='fas fa-plus' style='color:green'></i> Neue Anforderung"> Neue Anforderung</option>
                      </select>
                    </div>
                    <div class="form-row">
                      <div class="form-group form-label col-sm-4">
                        <label for="rname" id="label-r_name" text="Name">Name</label>
                        <input type="text" class="form-control" id="rname" name="name">
                      </div>
                      <div class="form-group form-label col-sm-4">
                        <label for="author">Author</label>
                        <input type="text" class="form-control" id="author" name="author">
                      </div>
                      <div class="form-group form-label col-sm-4">
                        <label for="ac">Abnahmekriterium</label>
                        <input type="text" class="form-control" id="ac" name="ac">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group form-label col-sm-4">
                        <label for="use-case">Use Case</label>
                        <input type="text" class="form-control" id="use-case" name="use_case">
                      </div>
                      <div class="form-group form-label col-sm-4">
                        <label for="priority" id="label-r_priority" text="Priorit&auml;t">Priorit&auml;t</label>
                        <input type="text" class="form-control" id="priority" name="priority">
                      </div>
                      <div class="form-group form-label col-sm-4">
                        <label for="dependencies">Abh&auml;ngigkeiten</label>
                        <input type="text" class="form-control" id="dependencies" name="dependencies">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group form-label col-sm-6">
                        <label for="history" class="textarea">Verlauf</label>
                        <textarea class="form-control" id="history" name="history"></textarea>
                      </div>
                      <div class="form-group form-label col-sm-6">
                        <label for="description">Beschreibung</label>
                        <textarea class="form-control" id="rdescription" name="description"></textarea>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="col-sm-4">
                  <div class="panel panel-default details">
                    <div class="panel-heading">
                      <h3 class="panel-title">Anforderungsdetails</h3>
                    </div>
                    <div class="panel-body">
                      Hier k&ouml;nnen Anforderungen des Projekts erzeugt
                      und zum Projekt hinzugef&uuml;gt werden.
                    </div>
                  </div>

                  <hr class="details"/>
                  <div class="form-group">
                    <button type="button" class="btn btn-primary btn-block" id="rsave">Anforderung speichern</button>
                    <label for="rsave" id="label-r_save" text=""></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div class="container">
          <div class="table-responsive">
            <table class="table" cols=3>
              <thead>
                <tr><th>Name</th><th>Priorit&auml;t</th><th>Abnahmekriterium</th></tr>
              </thead>
            </table>
          </div>
      </div>
    </div>
  </div>

  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js"></script>
  <script src="js/attributes.js"></script>
  <script src="js/projects.js"></script>
</body>
</html>
