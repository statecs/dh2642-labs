var DishToSelectView = function (container, model) {

	this.container = container;
	
	var ingredientsContainer = this.ingredientsContainer = container.find(".ing");


	var loadIngredientsOfSelected = function(selected) {

        //Can lateron be changed to selected
       var selectedDish = model.getDish(1);

        $.each(selectedDish.ingredients, function(key, ingredient) {
            var quantity = "<div class='col-md-1'>" + ingredient.quantity + "</div>";
            var unit = "<div class='col-md-2'>"+ ingredient.unit + "</div>";
            var name = "<div class='col-md-7'>"+ ingredient.name + "</div>";
            var currency = "<div class='col-md-1 text-right'>SEK</div>";
            var price = "<div class='col-md-1 text-right'>"+ ingredient.price + "</div>";
            ingredientsContainer.append("<div class='row'>" + quantity + unit + name + currency + price + "</div>");
        });
	}
	loadIngredientsOfSelected();
}