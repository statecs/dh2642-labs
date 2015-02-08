var selectedDishView = function(container, model) {

	confirmDinner = container.find("#confirmDinner4");
	toastButton = container.find("#toast");


	$( confirmDinner ).click(function() {
		
  	  $("#selectedDishView").css("display", "none");
	  $("#fullMenuView").css("display", "inline");


	});

	$( toastButton ).click(function() {
	  $("#selectedDishView").css("display", "none");
	  $("#dishToSelectView").css("display", "inline");



	});




}
