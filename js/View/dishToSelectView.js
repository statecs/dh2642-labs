var DishToSelectView = function (container, model) {

	this.container = container;
	
	var ingredientsContainer = this.ingredientsContainer = container.find(".ing");
    var ingridentHeader = container.find("#h3-ingridents-dishToSelect");
    var dishesContainerSelect = container.find(".food");

    var selectedDish = this.selectedDish = {};
    // Register to listen for updates from the model. We need
    // to also implement update method (see bellow) that will 
    // be called by the model on each change.
    model.addObserver(this);

    var loadDishOfSelected = function(){

    dishesContainerSelect.html("");

    // get the current dish
    dishesContainerSelect.append("<h3 id='dishHeader'" + selectedDish.Title + "</h3></br>" + "<div class='imageSelect'><img src='" + selectedDish.ImageURL + "'></div></br><h3>PREPARATION</h3><p class='description'>" + selectedDish.Instructions + "</p><button class='image' id='back3to2Button'>Back to Select Dish</button>");

    }

	var loadIngredientsOfSelected = function() {
        ingridentHeader.html("");
        ingredientsContainer.html("");
        //Can lateron be changed to selected
       var numberOfGuests = model.getNumberOfGuests();
       var totalPrice = 0;
       //Setting header to present number of guests
       $("#h3-ingridents-dishToSelect").html("<h3 id='h3-ingridents-dishToSelect'>Ingredients for " + numberOfGuests + " people</h3>");
        
        //Update information about ingridients
        $.each(selectedDish.Ingredients, function(key, ingredient) {
            var quantity = "<div class='col-md-1'>" + ingredient.Quantity*numberOfGuests + "</div>";
            var unit = "<div class='col-md-2'>"+ ingredient.MetricUnit + "</div>";
            var name = "<div class='col-md-7'>"+ ingredient.Name + "</div>";
            var currency = "<div class='col-md-1 text-right'>SEK</div>";
            var price = "<div class='col-md-1 text-right'>"+ ingredient.Quantity*numberOfGuests + "</div>";
            ingredientsContainer.append("<div class='row'>" + quantity + unit + name + currency + price + "</div>");
            totalPrice += ingredient.Quantity*numberOfGuests;
        });

        $("#totalprice-ingridients").html("<div id='totalprice-ingridients' class='text-right'>TOTAL SEK: " + totalPrice + "</div>");
	}

    // The observer update function, triggered by the model when there are changes
    this.update = function(argv) {
        if(argv[1] == "dishToSelect"){
            this.selectedDish = selectedDish = argv[0];
            console.log(this.selectedDish);
            loadIngredientsOfSelected();
            loadDishOfSelected();
        }
    }
}