var fullMenuView = function(container, model) {

	printFull = container.find("#printFull");
	back2two = container.find("#back5to2Button");

	$( printFull ).click(function() {
		
  	  $("#fullMenuView").css("display", "none");
	  $("#printMenuView").css("display", "inline");


	});
	$( back2two ).click(function() {
		
  	  $("#fullMenuView").css("display", "none");
	  $("#mainView").css("display", "inline");


	});


}
