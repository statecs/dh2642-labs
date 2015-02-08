var dishToSelectView = function (container, model) {

	/* Find #confirmButton,backButton */
	confirmButton = container.find("#confirmButton");
	backButton = container.find("#back3to2Button");

	/* If confirmButton click */
	$( confirmButton ).click(function() {
	/* #pageThree change CSS to display:none; */
  	  $("#dishToSelectView").css("display", "none");
  	  /* #pageFour change CSS to display:inline; */
	  $("#selectedDishView").css("display", "inline");

	});
	/* If backbutton click */
	$( backButton ).click(function() {
	  /* #pageThree change CSS to display:none; */
  	  $("#dishToSelectView").css("display", "none");
  	  /* #pageTwo change CSS to display:inline; */
	  $("#mainView").css("display", "inline");



	});


}
