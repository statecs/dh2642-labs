var FullMenuView = function(container, model) {

	this.container = container;


	var dishesContainer = container.find(".fullmenu-main-container");
	var totalPriceContainer = container.find(".full-menu-totalprice")
	var numberOfGuestsTitle = container.find("#fullmenu-numguests-title");

	model.addObserver(this);

	var loadFullMenu = function(){
		dishesContainer.html("");
		numberOfGuestsTitle.html("");
		totalPriceContainer.html("");

		var totalPrice = 0;
		var numberOfGuests = model.getNumberOfGuests();
		numberOfGuestsTitle.append("<h3>My Dinner: " + numberOfGuests + " people</h3>");
		totalPriceContainer.html("<div class='loader'/>");

		$.each(model.getFullMenu(), function(key, dish) {
			var priceOfDish = 0;
			$.each(dish.Ingredients, function(key, ingredient){
				priceOfDish += ingredient.Quantity*numberOfGuests;
			});
			var stringToAdd = $("<div>");
			stringToAdd.addClass("thumbnail-dish");
        	stringToAdd.html("<img src='" + dish.ImageURL + "'></img><button id='" + dish.RecipeID + "'>" + dish.Title + "</button><h3>" + priceOfDish + " SEK</h3>");

        	dishesContainer.append(stringToAdd);
        	totalPrice += priceOfDish;
        });
		totalPriceContainer.append("<h2>Total Price:</h2><h3>" + totalPrice + " SEK</h3>");

	};

	this.update = function(argv){
		if(argv[0] == "updateMenu"){
			console.log("loadFullMenu");
			loadFullMenu();
		}
	};
}
