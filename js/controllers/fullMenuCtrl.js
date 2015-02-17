var FullMenuCtrl = function(view,model) {

	view.container.find("#printFull").click(function() {
		
  	  $("#fullMenuView").hide();
	  $("#printMenuView").show();
	});
	view.container.find("#backToMainButton").click(function() {
		
  	  $("#fullMenuView").hide();
	  $("#mainView").show();
	  $("#sidebarView").show();


	});

};