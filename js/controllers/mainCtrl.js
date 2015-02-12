var MainCtrl = function(view,model) {
	
	/* If toastButton  click */
	view.container.find("#1").click(function() {
		/* #pageTwo change CSS to display:none; */
		$("#mainView").css("display", "none");
		/* #pageThree change CSS to display:inline; */
		$("#dishToSelectView").css("display", "inline");


	});
};