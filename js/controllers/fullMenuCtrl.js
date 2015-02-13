var FullMenuCtrl = function(view,model) {

	view.container.find("#printFull").click(function() {
		
  	  $("#fullMenuView").css("display", "none");
	  $("#printMenuView").css("display", "inline");

	});
	view.container.find("#backToMainButton").click(function() {
		
  	  $("#fullMenuView").css("display", "none");
	  $("#mainView").css("display", "inline");
	  $("#sidebarView").css("display", "inline");


	});

};