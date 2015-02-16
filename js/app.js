$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed views
	var startView = new StartView($("#startView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var mainView = new MainView($("#mainView"), model);
	var dishToSelectView = this.dishToSelectView = new DishToSelectView($("#dishToSelectView"), model);
	var fullMenuView = new FullMenuView($("#fullMenuView"), model);
	var printMenuView = new PrintMenuView($("#printMenuView"), model);

	//And create the needed controllers
	var startCtrl = new StartCtrl(startView, model);
	var mainCtrl = new MainCtrl(mainView, model, dishToSelectView);
	var sidebarCtrl = new SidebarCtrl(sidebarView, model);
	var dishToSelectCtrl = new DishToSelectCtrl(dishToSelectView, model);
	var fullMenuCtrl = new FullMenuCtrl(fullMenuView, model);
	var printMenuCtrl = new PrintMenuCtrl(printMenuView, model);

});