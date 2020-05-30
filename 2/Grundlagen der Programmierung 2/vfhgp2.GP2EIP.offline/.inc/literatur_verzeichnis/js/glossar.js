function DoAnker()
{
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
}
