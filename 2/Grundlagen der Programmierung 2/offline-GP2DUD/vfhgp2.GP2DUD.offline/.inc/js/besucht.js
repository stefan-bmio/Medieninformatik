// ===============================================================================================
// All Javascript done by Grischa Brockhaus
// (c)1999 bei Virtuelle Fachhochschule, Arbeitsgruppe Beuth Hochschule Berlin
// Diese Funktionen gehören zu den HTML Seiten der Lerneinheit.
// Diese Datei muss in alle Lernseiten eingebunden werden, die sich die Lerneinheit als
// "zuletzt besucht" merken soll !
// ===============================================================================================
// Ich gehe davon aus, dass die Lerneinheit wie folgt gespeichert
// wird: http://server/lernraum/modul/lerneinheit/kapitel/seite.shtml
// Siehe SaveCookie !

// ===============================================================================================
//      SetCookie (myCookieVar, cookieValueVar, null, "/myPath", null, true);
//
function SetCookie (name,value,expires,path,domain,secure) {
	//console.log("Nummer der aktuellen Seite: " + nrActPage());
	// Auf der Startseite einer Lerneiheit werden keine Cookies gesetz, 
	// da es sich um die "landing page" der Lerneinheit handelt und man sonst
	// den Cookie mit der letzten besuchten Seite wieder überschreiben würde.
	if(nrActPage() != 1){
		document.cookie = name + "=" + escape (value) +
			((expires) ? "; expires=" + expires.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	}
}

// ===============================================================================================
// Die aktuelle URL wird in einen Cookie im Userbrowser hinterlegt.
function SaveCookie(){
	str = self.document.location.pathname;
        dirset = str.split("/");
	SetCookie ("PAGE_LAST_VISITED", str, null,"/"+dirset[1]+"/"+dirset[2]+"/"+dirset[3]+"/");
}

// ===============================================================================================
// Aktuelle Seite automatisch abspeichern.
SaveCookie();
