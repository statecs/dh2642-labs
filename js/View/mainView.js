var MainView = function (container, model) {

	this.container = container;

	var dishesContainer = this.dishesContainer = container.find(".main-container");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);

	var loadDishes = function(type) {
		// clear anything that's in the list
		dishesContainer.html("");
		var starters = model.getAllDishes(type)
		$.each(starters, function(key, dish) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("image");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='img-name' id='" + dish.id + "'>" + dish.name + "</button><br /><p class='description'>" + dish.description + "</p>");

        	dishesContainer.append(stringToAdd);

        });
	}

	// The observer update function, triggered by the model when there are changes
	this.update = function() {
		loadDishes($("#dishType option:selected").text().toLowerCase());
		console.log("MainView, numGuest: " + model.getNumberOfGuests());
	}
	loadDishes($("#dishType option:selected").text().toLowerCase());
}
