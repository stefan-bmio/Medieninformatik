<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="styles.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

</head>
<body>

<p>
<form>
<select name="product">
  <option <?php if($_GET["product"] == "s1") echo "selected='selected'" ?>value="s1">
    Test Produkt 1
  </option>
  <option <?php if($_GET["product"] == "s2") echo "selected='selected'" ?>value="s2">
    Test Produkt 2
  </option>
</select>
<input type="submit" value="Submit"/>
</form>
</p>

<script>
function getFilter(){
  return {
    field: "product",
    value: $("[name='product']").val()
  }
}
</script>
<div id="container"></div>
<script src="snippet.js"></script>


</body>
</html>
