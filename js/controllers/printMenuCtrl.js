var PrintMenuCtrl = function(view,model) {
	
	view.container.find("#backToMainButton").click(function() {
		
	  /*Hide printMenuView*/	
  	  $("#printMenuView").css("display", "none");
	 
	 /*Show mainView and sidebarView*/
	  $("#mainView").css("display", "inline");
	  $("#sidebarView").css("display", "inline");


	});

};