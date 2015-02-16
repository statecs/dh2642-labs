var DishToSelectView = function (container, model) {

	this.container = container;
	
	var ingredientsContainer = this.ingredientsContainer = container.find(".ing");
    var ingridentHeader = container.find("#h3-ingridents-dishToSelect");

    var selectedDish = model.getDish(1);
    // Register to listen for updates from the model. We need
    // to also implement update method (see bellow) that will 
    // be called by the model on each change.
    model.addObserver(this);


	var loadIngredientsOfSelected = function() {
        ingridentHeader.html("");
        ingredientsContainer.html("");
        //Can lateron be changed to selected
       var numberOfGuests = model.getNumberOfGuests();
       var totalPrice = 0;
       //Setting header to present number of guests
       $("#h3-ingridents-dishToSelect").html("<h3 id='h3-ingridents-dishToSelect'>Ingredients for " + numberOfGuests + " people</h3>");
        
        //Update information about ingridients
        $.each(selectedDish.ingredients, function(key, ingredient) {
            var quantity = "<div class='col-md-1'>" + ingredient.quantity*numberOfGuests + "</div>";
            var unit = "<div class='col-md-2'>"+ ingredient.unit + "</div>";
            var name = "<div class='col-md-7'>"+ ingredient.name + "</div>";
            var currency = "<div class='col-md-1 text-right'>SEK</div>";
            var price = "<div class='col-md-1 text-right'>"+ ingredient.price*numberOfGuests + "</div>";
            ingredientsContainer.append("<div class='row'>" + quantity + unit + name + currency + price + "</div>");
            totalPrice += ingredient.price*numberOfGuests;
        });

        $("#totalprice-ingridients").html("<div id='totalprice-ingridients' class='text-right'>TOTAL SEK: " + totalPrice + "</div>");
	}

    this.setSelectedDish = function(id){
        selectedDish = model.getDish(id);
        loadIngredientsOfSelected();
    }
    // The observer update function, triggered by the model when there are changes
    this.update = function() {
        loadIngredientsOfSelected();
    }
    loadIngredientsOfSelected();
}