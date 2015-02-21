var FullMenuView = function(container, model) {

	this.container = container;


	var dishesContainer = container.find(".main-container");
	var totalPriceContainer = container.find(".full-menu-totalprice")
	var numberOfGuests = $(".page-bar").find("h3");

	model.addObserver(this);

	var loadFullMenu = function(){
		dishesContainer.html("");
		numberOfGuests.html("");
		totalPriceContainer.html("");

		var totalPrice = 0;

		numberOfGuests.append("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3>");
		$.each(model.getFullMenu(), function(key, dish) {
			var priceOfDish = 0;
			$.each(dish.ingredients, function(key, ingredient){
				priceOfDish += ingredient.price*model.getNumberOfGuests();
			});
			var stringToAdd = $("<div>");
			stringToAdd.addClass("thumbnail-dish");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='thumbnail-dish-button' id='" + dish.id + "'>" + dish.name + "</button><h3>" + priceOfDish + " SEK</h3>");

        	dishesContainer.append(stringToAdd);
        	totalPrice += priceOfDish;
        });
		totalPriceContainer.append("<h2>Total Price:</h2><h3>" + totalPrice + " SEK</h3>");

	};

	this.update = function(){
		loadFullMenu();
	};
}
