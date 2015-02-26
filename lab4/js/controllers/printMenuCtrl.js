var PrintMenuCtrl = function(view,model) {
	
	view.container.find("#backToMainButton").click(function() {
		
	  /*Hide printMenuView*/	
  	  $("#printMenuView").hide("slow");
	 
	 /*Show mainView and sidebarView*/
	  $("#mainView").show("slow");
	  $("#sidebarView").show("slow");


	});

};