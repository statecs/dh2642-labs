$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed views
	var startView = new StartView($("#startView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	window.mainView = new mainView($("#mainView"), model);
	window.dishToSelectView = new dishToSelectView($("#dishToSelectView"), model);
	window.selectedDishView = new selectedDishView($("#selectedDishView"), model);
	window.fullMenuView = new fullMenuView($("#fullMenuView"), model);
	window.printMenuView = new printMenuView($("#printMenuView"), model);

	//And create the needed controllers
	var startCtrl = new StartCtrl(startView, model);
	var mainCtrl = new MainCtrl(mainView, model);
	var sidebarCtrl = new MainCtrl(sidebarView, model);

});