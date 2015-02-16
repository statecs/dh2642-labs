var PrintMenuCtrl = function(view,model) {
	
	view.container.find("#backToMainButton").click(function() {
		
	  /*Hide printMenuView*/	
  	  $("#printMenuView").hide();
	 
	 /*Show mainView and sidebarView*/
	  $("#mainView").show();
	  $("#sidebarView").show();


	});

};