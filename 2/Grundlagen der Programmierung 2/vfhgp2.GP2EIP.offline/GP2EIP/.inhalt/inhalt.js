// ===============================================================================================
// All Javascript done by Grischa Brockhaus
// (c)1999 bei Virtuelle Fachhochschule, Arbeitsgruppe Beuth Hochschule Berlin
// Funktionen für das Inhaltsverzeichnis
// ===============================================================================================
 
// ===============================================================================================
// Wo ist die Lerneinheit zu finden ?
// ===============================================================================================
/*myLocation = "";
buildMyLocation();

// ===============================================================================================
// Es wird das Verzeichnis der Lerneinheit ermittelt.
function buildMyLocation(){
	str = self.document.location.pathname;
        dirset = str.split("/");
        myLocation = "/"+dirset[1]+"/"+dirset[2]+"/"+dirset[3]+"/";
}
// ===============================================================================================
// Wird in den Inhaltsverzeichnis Einträgen aufgerufen und löst ein Füllen des Ursprungsfensters
// mit dem ausgewählten Link aus. (Fernsteuerung)
function openPage( what ){
	parent.opener.location.href=what+"?inhalt=true";
}*/

// ===============================================================================================
// hya = "here you are" (english by S.M. ;)
// Wenn der Funktionsparameter der aktuellen URL im Hauptfenster entspricht, wird HTML Code
// zur Darstellung des kleinen Dreieck-Pointers zurückgegeben, ansonsten ein Leerzeichen.
function hya( link ){
	str = parent.opener.location.pathname;

	//str = document.location + "";
	if(str.indexOf("file:///") >= 0) return "&nbsp;";
	//str = parent.location.pathname;
	// Eventuelle URL Parameter wegnehmen
	if (str.indexOf("?")>-1) {
		str = str.substr(0,str.indexOf("?"));
	}
	var strIndex = str + "index.html";
	//if( (str == (myLocation + link) ) || (str +"index.html" == (myLocation+link) )
	if( str.indexOf(link) > -1 || strIndex.indexOf(link) > -1 )
        {
        	return "<img src=\"hereareyou.gif\" align=\"right\">";
        }
        else {
        	return "&nbsp;"
	};
}

// ===============================================================================================
// Beim Schliessen der Inhaltsseite muss dem Opener diese mitgeteilt werden. Im Falle eines
// Ändern des Inhaltes auf Glossar oder Hilfe würde der Opener den geschlossenen Inhalt nicht
// mitbekommen und ihn in das geänderte Fenster restaurieren.
function goClose(){
	parent.opener.winInhalt = null;
}

// ===============================================================================================
// wenn das Inhaltsfenster gestartet wird, dann muss es beim
// Aufrufer bekannt gemacht werden.
parent.opener.winInhalt = parent;