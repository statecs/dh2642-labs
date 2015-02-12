var MainView = function (container, model) {

	this.container = container;

	var dishesContainer = this.dishesContainer = container.find(".main-container");

	var loadDishes = function() {
		// clear anything that's in the list
		var allDishes = model.getAllDishes('starter');
		$.each(allDishes, function(key, dish) {
			var div = $("<div>");
        	div.attr('id', dish.id);
        	div.addClass("col-md-3");
        	div.html("<img src='images/" + dish.image + "'></br>" + dish.name);
        	this.dishesContainer.append(div);
        });
	}
	loadDishes();
}
