function DoAnker()
{
	neu_url = document.location.search;
   	anker = document.location.search.indexOf('?');
   	console.log(neu_url.substring(anker+1,neu_url.length));
   	if ((neu_url.length > 0) && (anker != -1)) {
   		window.frames[1].location.hash = neu_url.substring(anker+1,neu_url.length);/*
		document.location.hash = neu_url.substring(anker+1,neu_url.length);*/
   	}
   /*neu_url = self.location.search;
   anker = self.location.search.indexOf('#');
   if ((neu_url.length > 0) && (anker != -1)) {
	self.gitems.location.href = "../../litaratur/gheads.html"
        //self.gitems.location.href
			   	+ '#'
				+ neu_url.substring(anker+1,neu_url.length);
   }*/
//   else {
//   	self.gitems.location.href = "gheads.html";
//   }
}



function ABCtags(text){
	var character, ul;
	ul = document.createElement("ul");
	ul.id = text + "List";
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.className = text + "ABC";
	a.setAttribute("name", "0-9");

	a.setAttribute("target", "gitems");

	a.setAttribute("href", "javascript:go09()");
	a.innerHTML = "#";
	li.appendChild(a);
	ul.appendChild(li);
	for (var i = 0; i != 26; ++i) {
		character = String.fromCharCode(i + 65);
		li = document.createElement("li");
		a = document.createElement("a");
		a.className = text + "ABC";
		a.setAttribute("target", "gitems");
		a.setAttribute("onclick", "javascript:goChar('" + character.toLowerCase() + "')");
		a.setAttribute("name", character.toLowerCase());
		a.innerHTML = character;
		li.appendChild(a);
		ul.appendChild(li);
	}
	var div = document.createElement("div");
	div.appendChild(ul);
	var e = ul.getElementsByClassName(text + "ABC");
	return div;
}

(function(){
	document.onreadystatechange = function (event) {
		event.preventDefault();

		if(document.readyState === "complete") {

			var meta = document.getElementsByTagName("script")[0];
			var nmeta = document.createElement("meta");
			nmeta.setAttribute("name", "viewport")
			nmeta.setAttribute("content", "width=device-width, initial-scale=1.0");
			var x = document.getElementsByTagName("head")[0];
			x.insertBefore(nmeta, x.childNodes[1]);

			var tags = ABCtags("glossar");
				var index = window.frames["gtitle"].document.getElementById("glossar_index");
				index.appendChild(tags);	
			
			
		};
	};
})();

