var ViewThree = function (container, model) {

	/* Find #confirmButton,backButton */
	confirmButton = container.find("#confirmButton");
	backButton = container.find("#back3to2Button");

	/* If confirmButton click */
	$( confirmButton ).click(function() {
	/* #pageThree change CSS to display:none; */
  	  $("#pageThree").css("display", "none");
  	  /* #pageFour change CSS to display:inline; */
	  $("#pageFour").css("display", "inline");

	});
	/* If backbutton click */
	$( backButton ).click(function() {
	  /* #pageThree change CSS to display:none; */
  	  $("#pageThree").css("display", "none");
  	  /* #pageTwo change CSS to display:inline; */
	  $("#pageTwo").css("display", "inline");



	});


}
