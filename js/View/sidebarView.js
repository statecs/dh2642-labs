var SidebarView = function (container, model) {

	this.container = container;
	this.sideConfirmButton = container.find("#sidebarConfirmButton");
	var numberOfGuests = this.numberOfGuests = container.find("#peopleInput");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);

	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		
	}
}
