var SidebarView = function (container, model) {

	this.container = container;
	this.sideConfirmButton = container.find("#sidebarConfirmButton");
	var numberOfGuests = this.numberOfGuests = container.find("#peopleInput");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);


	var loadMenu = function() {

		var numberOfGuests = model.getNumberOfGuests();
		$("#sidebar-fullmenu").html("");
		//Update information about ingridients
        $.each(model.getFullMenu(), function(key, dish) {
        	var totalPriceOfDish = 0;
            var name = "<div class='col-md-6'>"+ dish.name + "</div>";
            
            //Update information about ingridients
        	$.each(dish.ingredients, function(key, ingredient) {
	            totalPriceOfDish += ingredient.price*numberOfGuests;
        	});
            var cost = "<div class='col-md-6 text-right'>"+ totalPriceOfDish + "</div>";
            $("#sidebar-fullmenu").append("<div class='row'>" + name + cost + "</div>");

            var removeButton = $("<button>");
            removeButton.addClass("removeButton");
            removeButton.attr("id", "remove_" + dish.type);
            removeButton.attr("value", dish.id);

 			 $("#sidebar-fullmenu").append(removeButton);

        });
	};
	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadMenu();	
	}
	loadMenu();
}
