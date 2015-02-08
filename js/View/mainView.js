var mainView = function (container, model) {

	/* Find #toastButton,bakedbrieButton,sourdoughButton */
	toastButton = container.find("#toast");
	bakedbrieButton = container.find("#bakedbrie");
	sourdoughButton = container.find("#sourdough");

	/* If toastButton  click */
	$( toastButton ).click(function() {
		/* #pageTwo change CSS to display:none; */
		$("#mainView").css("display", "none");
		/* #pageThree change CSS to display:inline; */
		$("#dishToSelectView").css("display", "inline");


	});

}
