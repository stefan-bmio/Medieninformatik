// JavaScript Document
$(document).ready(function() {
	addNumbersToPre();


	function addNumbersToPre() {
		//Suchte jedes PRE-Tag mit der Klasse "source", dort soll der Quelltext stehen
		var startpos;
		var offset;
		$("pre.source").each(function(){
			if ($(this).find('.numbers').attr("title")){
			startpos = parseFloat($(this).find('.numbers').attr("title"));
			offset = startpos-1;
			console.log(startpos);
			}
			else {
				startpos = 0;	
				offset = parseFloat(startpos);
				console.log("kein Offset")
			}
		//Schaue wieviele Zeilen der Quelltext hat
			var arr = $(this).find('.code').text().split('\n');
			//Für jede Zeile...
			for (var i = 0; i < arr.length; i++){
				if (i == 0){
					// <code> - Element darf nicht leer sein, sonst wird es in der Druckversion
					// nicht angezeigt - daher wird es mit einem geschützten Leerzeichen gefuellt
					// und muss an dieser stelle wieder geleert werden.        
					$(this).find(".numbers").empty();
				}
				//...finde im PRE-Tag die Klasse "numbers" und füge die Nummer mit Zeilenbruch hinzu
				if(i+offset<9){
					$(this).find(".numbers").append('<span>00' + (i+1+offset)+'</span><br>');
				}
				else if(i+offset<99){
					$(this).find(".numbers").append('<span>0' + (i+1+offset)+'</span><br>');
					}
				else
				$(this).find(".numbers").append('<span>' + (i+1+offset)+'</span><br>');
			}
		});	
	}
})