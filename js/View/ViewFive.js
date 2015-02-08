var viewFive = function(container, model) {

	printFull = container.find("#printFull");
	back2two = container.find("#back5to2Button");

	$( printFull ).click(function() {
		
  	  $("#pageFive").css("display", "none");
	  $("#pageSix").css("display", "inline");


	});
	$( back2two ).click(function() {
		
  	  $("#pageFive").css("display", "none");
	  $("#pageTwo").css("display", "inline");


	});


}
