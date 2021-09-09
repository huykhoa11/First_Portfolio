$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 350) { 		/* && ($(window).width() >= 1201)) */
		  $(".navbar").css("background" , "#001933");
		}
  
		else{
			$(".navbar").css("background" , "transparent");  	
		}
	})
  })