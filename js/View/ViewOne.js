var ViewOne = function (container, model) {

	/* Find #createbutton */
	createButton = container.find("#createButton");

	/* If createButton click */
	$( createButton ).click(function() {

		/* #pageOne change CSS to display:none; */
  	  $("#pageOne").css("display", "none");
  	  /* #pageTwo change CSS to display:inline; */
	  $("#pageTwo").css("display", "inline");
	  /* Remove background from #pageOne */
	  $(".bg").removeClass("bg");

	});

}
