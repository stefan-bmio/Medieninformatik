$(document).ready(function (){
	//console.log("GLOSSAR.JS");
	var currentUserAgent = navigator.userAgent;
	var isIOS = false;
	isIOSSystem(currentUserAgent);
  initGlossary();
	openCurrentEntry();
	//console.log(navigator.userAgent);
});
/*
function DoAnker(){
	neu_url = self.location.search;
	
	anker = self.location.search.indexOf('?');
	if ((neu_url.length > 0) && (anker != -1)) {
	self.gitems.location.href = "gitems.html"
			//self.gitems.location.href
				+ '#'
			+ neu_url.substring(anker+1,neu_url.length);
	}
//   else {
//   	self.gitems.location.href = "gitems.html";
//   }
}*/

function initGlossary(uAgent){

	if(isIOS){
		console.log("IPHONE");
		$(".glossarItemDesc").each(function() {
      $(this).css("display", "block");
    });
	}
	else{
		$(".glossarItemHeadline").on ("click", function(){
			// Container mit Glossareintrag finden
			var container_glossar_item = $(this).parent();
			//console.log($(this).parent().parent());
			// Container mit Icon (Pfeil) finden
			var arrowIcon = $(this).parent().parent().find(".glossarArrowZu");
			//console.log(arrowIcon);
			// Item Description
			var glossar_item_desc = container_glossar_item.find(".glossarItemDesc");
			toggleGlossary(glossar_item_desc, arrowIcon);
		
		});
	}
}

function toggleGlossary(glItem, glIcon){
	var glossarItemDesc = glItem;
	var gIcon = glIcon;
	// Eintarg toggeln
	glossarItemDesc.slideToggle('slow', function(){
		console.log(gIcon);
		// Pfeil - Icon anpassen (offen/geschlossen)
		if(glossarItemDesc.css("display") == "none"){
			//console.log("GESCHLOSSEN");
			gIcon.removeClass();
			gIcon.addClass("glossarArrowZu");	
		}
		else if(glossarItemDesc.css("display") == "block"){
			//console.log("Offen");
			gIcon.addClass("glossarArrowAuf");
		}
		
		});

	}
	
function openCurrentEntry(){
	//console.log(window.location.hash);
	// Den Hash herausfiltern -> Anker eines Glossareintrages
	var itemDesc	= $(window.location.hash).next().next();
	var itemSpacer	= itemDesc.parent().parent().children();
	var itemArrow   = itemSpacer.find(".glossarArrowZu");
	//console.log(itemArrow.attr("class"));
	// Beschreibung einblenden, Pfeil-Icon anpassen
	if(isIOS){
		itemDesc.css("display", "block");
		}
	else{	
		toggleGlossary(itemDesc, itemArrow);
	}
}


function isIOSSystem(uAgent){
	if(uAgent.toLowerCase().indexOf('iphone') > -1 | uAgent.toLowerCase().indexOf('ipad') > -1){
		isIOS = true;
		//console.log("IS IOS")
		}
	else{
		isIOS = false;
		//console.log("IS NOT IOS");
		}
}

(function(){
	document.onreadystatechange = function (event) {
		//event.preventDefault();

		if(document.readyState === "interactive") {
			var a = document.querySelectorAll("a[name]");
			//console.log("PARENT:" + parent);
			//console.log(a);

			parent.muteIndexChar(a);


		};
	};
})();