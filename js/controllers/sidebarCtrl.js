var SidebarCtrl = function(view,model) {
	
	/* If toastButton  click */
	view.container.find("#sidebarConfirmButton").click(function() {
		/* Hide mainView and sidebarView */
		$("#mainView").css("display", "none");
		$("#sidebarView").css("display", "none");
				
		/*Show fullMenuView*/
		$("#fullMenuView").css("display", "inline");

	});

	//Set numberOfGuests when input change
	view.container.find("#peopleInput").change(function(){
		var numGuest = $("#peopleInput").val();
		model.setNumberOfGuests(numGuest);
	});

};