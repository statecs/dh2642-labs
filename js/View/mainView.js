var MainView = function (container, model) {

	this.container = container;

	var dishesContainer = this.dishesContainer = container.find(".main-container");
	var btnName = this.btnName = container.find(".thumbnail-dish-button");

	// Register to listen for updates from the model. We need
	// to also implement update method (see bellow) that will 
	// be called by the model on each change.
	model.addObserver(this);

	var loadDishes = function(dishes) {
		// clear anything that's in the list
		dishesContainer.html("");
		dishesContainer.html("<div class='loader'/>");
		$.each(dishes, function(key) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("thumbnail-dish");
        	stringToAdd.html("<img src='" + dishes[key].ImageURL120 + "'><button class='thumbnail-dish-button' id='" + dishes[key].RecipeID + "'>" + dishes[key].Title + "</button><br /><p class='description'>" + dishes[key].Subcategory + "</p>");

        	dishesContainer.append(stringToAdd);

        });
	}

	// The observer update function, triggered by the model when there are changes
	this.update = function(argv) {
		if(typeof(argv) === "object"){
			console.log("Dishes loaded to MainView");
			loadDishes(argv.Results);
		}
		
	}
	model.getRecipeType($("#dishType option:selected").val());
}
