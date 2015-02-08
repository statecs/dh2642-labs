var startView = function (container, model) {

	/* Find #createbutton */
	createButton = container.find("#createButton");

	/* If createButton click */
	$( createButton ).click(function() {

		/* #pageOne change CSS to display:none; */
  	  $("#startView").css("display", "none");
  	  /* #pageTwo change CSS to display:inline; */
	  $("#mainView").css("display", "inline");
	  /* Remove background from #pageOne */
	  $(".bg").removeClass("bg");

	});

}
