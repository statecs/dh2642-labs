var DishToSelectView = function (container, model) {

	this.container = container;
	
	var ingredientsContainer = this.ingredientsContainer = container.find(".ing");


	var loadIngredientsOfSelected = function(selected) {

        //Can lateron be changed to selected
       var selectedDish = model.getDish(1);

        $.each(selectedDish.ingredients, function(key, ingredient) {
            var stringToAdd = ingredient.quantity + " " + ingredient.unit + "" + ingredient.name + "   SEK   " + ingredient.price;

            ingredientsContainer.append("<span>" + stringToAdd + "</span></br>");
        });
        /*$.each(allIngredients, function(key, ingredient) {
            var stringToAdd = "<span class='floatleft'>" + 
            ingredient.unit + "</span><span class='marginleft'>" + 
            ingredient.name + "</span><span class='floatright'>" + 

            ingredientsContainer.append("<label id='" + ingredient.id + ">" + stringToAdd + "</div>");
        });*/


	}
	loadIngredientsOfSelected();
}