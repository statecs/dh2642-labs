$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	window.startView = new startView($("#startView"), model);
	window.mainView = new mainView($("#mainView"), model);
	window.dishToSelectView = new dishToSelectView($("#dishToSelectView"), model);
	window.selectedDishView = new selectedDishView($("#selectedDishView"), model);
	window.fullMenuView = new fullMenuView($("#fullMenuView"), model);
	window.printMenuView = new printMenuView($("#printMenuView"), model);

});