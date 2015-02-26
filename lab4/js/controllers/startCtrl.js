var StartCtrl = function(view,model) {
	
	/* If createButton click */
	view.container.find("#createButton").click(function() {
		
		/* #startView change CSS to display:none; */

		$( "#startView" ).hide("slow");

		
		/* #mainView change CSS to display:inline; */
 	 	$("#mainView").show();
		$("#sidebarView").show();
		
		/* Remove background from #startView */
		$(".bg").removeClass("bg");

		$("#uniqueHeader").css("background","rgba(211, 211, 211, 0.5)");
	});

};