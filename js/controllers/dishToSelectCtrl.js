var DishToSelectCtrl = function(view,model) {

	/* If confirmButton click */
	view.container.find("#confirmButton").click(function() {
	  /* #dishToSelectView change CSS to display:none; */
  	  $("#dishToSelectView").hide();
  	  
  	  /*Remove disability of confirm button in sidebar, to make it possible to checkout*/
  	  $("#sidebarView").find("#sidebarConfirmButton").removeAttr("disabled");

  	  //Add dish to menu
	 	model.addDishToMenu(view.getSelectedDish().id);

  	  
  	  /* #mainView change CSS to display:inline; */

	  $("#mainView").show();
	  
	});
	
	/* If backbutton click */
	view.container.find("#back3to2Button").click(function() {
	  /* #pageThree change CSS to display:none; */
  	  $("#dishToSelectView").hide();
  	  /* #pageTwo change CSS to display:inline; */
	  $("#mainView").show();

	});
};