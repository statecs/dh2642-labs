var SidebarCtrl = function(view,model) {
	
	/* If toastButton  click */
	view.container.find("#sidebarConfirmButton").click(function() {
		/* Hide mainView and sidebarView */
		$("#mainView").hide();
		$("#sidebarView").hide();
				
		/*Show fullMenuView*/
		$("#fullMenuView").show();

	});

	//Set numberOfGuests when input change
	view.container.find("#peopleInput").change(function(){
		var numGuest = $("#peopleInput").val();
		model.setNumberOfGuests(numGuest);
	});

	SidebarCtrl.prototype.removeButtonPressed = function (dishId) {
    this.model.removeDishFromMenu(dishId);
};

};