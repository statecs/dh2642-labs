var DishToSelectView = function (container, model) {

	this.container = container;
	
	var dishesContainer = this.dishesContainer = container.find(".ing");


	var loadDishes = function() {

       var allIngredients = model.getAllIngredients();

        $.each(allIngredients, function(key, ingredient) {
            var stringToAdd = "<span class='floatleft'>" + 
            ingredient.unit + "</span><span class='marginleft'>" + 
            ingredient.name + "</span><span class='floatright'>" + 

            dishesContainer.append("<label id='" + ingredient.id + ">" + stringToAdd + "</div>");
        });


	}
	loadDishes();
}