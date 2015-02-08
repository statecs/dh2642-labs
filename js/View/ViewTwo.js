var ViewTwo = function (container, model) {

	/* Find #toastButton,bakedbrieButton,sourdoughButton */
	toastButton = container.find("#toast");
	bakedbrieButton = container.find("#bakedbrie");
	sourdoughButton = container.find("#sourdough");

	/* If toastButton  click */
	$( toastButton ).click(function() {
		/* #pageTwo change CSS to display:none; */
		$("#pageTwo").css("display", "none");
		/* #pageThree change CSS to display:inline; */
		$("#pageThree").css("display", "inline");


	});

}
