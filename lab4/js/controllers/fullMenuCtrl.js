var FullMenuCtrl = function(view,model) {

	view.container.find("#printFull").click(function() {
		
  	  $("#fullMenuView").hide("slow");
	  $("#printMenuView").show();
	});
	view.container.find("#backToMainButton").click(function() {
		
  	  $("#fullMenuView").hide("slow");
	  $("#mainView").show("slow");
	  $("#sidebarView").show("slow");


	});

};