$( document ).ready(function(){
	
     $('#mainText h1').each(function(){
     		if(!$(this).hasClass('modulTitle') && !$(this).hasClass('appendixTitle')){
     			if(!$(this).hasClass('no-pg-break')){
			     	var ist_link = $(this).parent().find('.paragraphTopDesc').find('a').length;
			     	if(ist_link == 1){
			     		$(this).parent().addClass('pg-break-before');
			     	}
			    }
     	}
     })

});