var StartCtrl = function(view,model) {
	
	/* If createButton click */
	view.container.find("#createButton").click(function() {
		
		/* #startView change CSS to display:none; */
	  	$("#startView").css("display", "none");
		
		/* #mainView change CSS to display:inline; */
 	 	$("#mainView").css("display", "inline");
		$("#sidebarView").css("display", "inline");
		
		/* Remove background from #startView */
		$(".bg").removeClass("bg");

		$("#uniqueHeader").css("background","rgba(211, 211, 211, 0.5)");
	});

};