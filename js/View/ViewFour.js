var viewFour = function(container, model) {

	confirmDinner = container.find("#confirmDinner4");
	toastButton = container.find("#toast");


	$( confirmDinner ).click(function() {
		
  	  $("#pageFour").css("display", "none");
	  $("#pageFive").css("display", "inline");


	});

	$( toastButton ).click(function() {
	  $("#pageFour").css("display", "none");
	  $("#pageThree").css("display", "inline");



	});




}
