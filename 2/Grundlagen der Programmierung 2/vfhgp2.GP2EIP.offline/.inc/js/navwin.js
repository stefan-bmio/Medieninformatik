// ===============================================================================================
// Javascript - edited by S. Mueller
// (c)2006 Labor Online Learning | Beuth Hochschule Berlin
// Diese Funktionen gehören zu den HTML Seiten der Lerneinheit.
// ===============================================================================================

// ===============================================================================================
// Bookmark setzen

function
setBookmark(param1,param2) {
 if (document.all && window.external) {
  window.external.AddFavorite(param1,param2);
  window.sidebar.addPanel(param1,param2,"")
 } else {
  alert("Um ein Bookmark zu setzen, bitte bei Netscape <Strg-D> und bei Opera <Strg-T> druecken!");
 }
}

// ===============================================================================================
// Schließen eines Dokuments

function schliessen() {
parent.window.close();
}


// ===============================================================================================
// Drucken eines Dokuments

function drucken(){
parent.window.print();
}