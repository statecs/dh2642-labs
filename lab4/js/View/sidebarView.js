var SidebarView = function (container, model) {

	this.container = container;
	this.sideConfirmButton = container.find("#sidebarConfirmButton");
	var numberOfGuests = this.numberOfGuests = container.find("#peopleInput");
	var sidebarPriceContainer = container.find("#sidebar-totalprice");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);


	var loadMenu = function() {

		var numberOfGuests = model.getNumberOfGuests();
		var totalPrice = 0;

		//Initialization of containers
		sidebarPriceContainer.html("");
		$("#sidebar-fullmenu").html("<div class='row sidebar-header'><div class='col-md-6'>Dish Name</div><div class='col-md-6 text-right'>Cost</div></div>");

		//Update information about ingridients
        $.each(model.getFullMenu(), function(key, dish) {
        	var totalPriceOfDish = 0;
            var name = "<div class='col-md-6'>"+ dish.Title + "</div>";
            //Update information about ingridients
        	$.each(dish.Ingredients, function(key, ingredient) {
	            totalPriceOfDish += ingredient.Quantity*numberOfGuests;
        	});
            var cost = "<div class='col-md-6 text-right'>"+  Math.floor(totalPriceOfDish * 100) / 100 + "</div>";
            $("#sidebar-fullmenu").append("<div class='row'>" + name + cost + "</div>");

            var removeButton = $("<button>");
            removeButton.addClass("removeButton");
            removeButton.attr("id", "remove_" + dish.Category);
            removeButton.attr("value", dish.RecipeID);
 			 $("#sidebar-fullmenu").append(removeButton);

 			 totalPrice += totalPriceOfDish;
        });
        if(model.getFullMenu().length == 0){
 			 $("#sidebar-fullmenu").append("<div class='row text-center'>Nothing in menu</div>");  
 			 sidebarPriceContainer.append("Total Price: 0 SEK");     	
        }
        else{
        	sidebarPriceContainer.append("Total price: " + Math.floor(totalPrice * 100) / 100  + "SEK");
        }

	};
	// The observer update function, triggered by the model when there are changes
	this.update = function(argv) {
		if(argv[0] == "updateMenu" || argv[0] == "numberOfGuests"){
			loadMenu();
		}
	}
	loadMenu();
}
