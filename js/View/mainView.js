var MainView = function (container, model) {

	this.container = container;

	var dishesContainer = this.dishesContainer = container.find(".main-container");
	var startersContainer = container.find("#starters");
	var mainDishContainer = container.find("#main_course");
	var dessertsContainer = container.find("#dessert");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);

	var loadDishes = function() {
		// clear anything that's in the list
		var starters = model.getAllDishes('starter');
		$.each(starters, function(key, dish) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("image");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='img-name' id='" + dish.id + "'>" + dish.name + "</button><br /><p class='description'>" + dish.description + "</p>");

        	startersContainer.append(stringToAdd);

        });

        var maindish = model.getAllDishes('main dish');
        $.each(maindish, function(key, dish) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("image");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='img-name' id='" + dish.id + "'>" + dish.name + "</button><br /><p class='description'>" + dish.description + "</p>");

        	mainDishContainer.append(stringToAdd);

        });

        var dessert = model.getAllDishes('dessert');
        $.each(dessert, function(key, dish) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("image");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='img-name' id='" + dish.id + "'>" + dish.name + "</button><br /><p class='description'>" + dish.description + "</p>");

        	dessertsContainer.append(stringToAdd);

        });
	}

	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadDishes();
		console.log("MainView, numGuest: " + model.getNumberOfGuests());
	}
	loadDishes();
}
