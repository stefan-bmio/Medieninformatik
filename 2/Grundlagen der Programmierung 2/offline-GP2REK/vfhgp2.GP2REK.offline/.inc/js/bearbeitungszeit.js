var zeiten = new Array();
$( document ).ready(function() {
	getZeit();
});
function getZeit() {
	i = 0;
	allUEB = $('.UEB');
	allZEIT = $('.bearbeitungszeit').length;
	allCON = $('.uebContainer').length;
	allMULTI = 0;
	$('.MargTextOrange').each( function(){
		wert = $(this).html();
		wert = wert.toString();
		//alert(wert);
		test = "L\u00FCckentext";
		testWert = test.toString();
		// check if exercise is one of the following types
		var isFilm = (wert.indexOf('Film') >= 0 );
		var isMC = (wert.indexOf('Multiple Choice') >= 0 );
		var isDD = (wert.indexOf('Drag and Drop') >= 0 );
		var isZO = (wert.indexOf('Zuordnung') >= 0 );
		var isFT = (wert.indexOf('Freitext') >= 0 );
		var isLT = (wert.indexOf(testWert) >= 0 );
		var isRF = (wert.indexOf('Richtig oder Falsch') >= 0 );
		//alert ("MC: " + isMC + "DD: " + isDD + "FT: " + isFT + "LT: " + isLT);
			if (isMC || isDD || isFT || isLT || isFilm || isRF || isZO){
				//alert("We have found sth!");
					allMULTI++;
			}
			
			/*if (wert == 'Multiple Choice' || wert == 'Drag and Drop' || wert == 'Freitext' || wert == testWert)	{
						
						allMULTI++;
					}*/
	});
	//alert ("allZeit: " + allZEIT +", allMULTI: " + allMULTI + ",  allCON: " + allCON);
	if ((allZEIT+allMULTI) < allCON) {
		alert("Es ist ein Fehler bei der 'Bearbeitungszeit' Anzeige aufgetreten");
	}
	if (allUEB < allCON) {
		alert("Es ist ein Fehler beim Tagen aufgetreten");
	}
	$('.uebContainer').each( function(){
		zeiten[i] = $(this).find('.UEB').attr('minuten');
		$(this).find('.bearbeitungszeit').html("Bearbeitungszeit: " + zeiten[i] +" Minuten");
		i++
	});
}