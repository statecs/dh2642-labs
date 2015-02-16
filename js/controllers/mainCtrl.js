var MainCtrl = function(view,model, dishToSelectView) {
	
	// Attach listener to all the buttons in the 
	// canvas view so that we know which shape type
	// is currently active.
	$(".image").find(".img-name").click(function() {

		//Set selected dish
		dishToSelectView.setSelectedDish(this.id);

		/* #pageTwo change CSS to display:none; */
		$("#mainView").css("display", "none");
		/* #pageThree change CSS to display:inline; */
		$("#dishToSelectView").css("display", "inline");
	});

};