var DishToSelectCtrl = function(view,model) {

	/* If confirmButton click */
	view.container.find("#confirmButton").click(function() {
	  /* #dishToSelectView change CSS to display:none; */
  	  $("#dishToSelectView").css("display", "none");
  	  
  	  /*Remove disability of confirm button in sidebar, to make it possible to checkout*/
  	  $("#sidebarView").find("#sidebarConfirmButton").removeAttr("disabled");

  	  /*Fixed for now: change later to be dynamic!!!*/
//	  $("#sidebarView").find("#sidebar-placeholder-dish").text("Toast");
//	  $("#sidebarView").find("#sidebar-placeholder-cost").text("10.0");
	
	  model.addDishToMenu(1);
  	  /* #mainView change CSS to display:inline; */
	  $("#mainView").css("display", "inline");

	});
	
	/* If backbutton click */
	view.container.find("#back3to2Button").click(function() {
	  /* #pageThree change CSS to display:none; */
  	  $("#dishToSelectView").css("display", "none");
  	  /* #pageTwo change CSS to display:inline; */
	  $("#mainView").css("display", "inline");

	});
};