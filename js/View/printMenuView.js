var printMenuView = function(container, model) {

	backpage = container.find("#backToMainButton");

	$( backpage ).click(function() {
		
  	  $("#printMenuView").css("display", "none");
	  $("#mainView").css("display", "inline");


	});

}