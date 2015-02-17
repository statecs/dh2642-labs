var FullMenuView = function(container, model) {

	this.container = container;


	var dishesContainer = container.find(".main-container");
	var numberOfGuests = $(".page-bar").find("h3");

	model.addObserver(this);

	var loadFullMenu = function(){
		dishesContainer.html("");
		numberOfGuests.html("");

		numberOfGuests.append("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3>");
		$.each(model.getFullMenu(), function(key, dish) {
			var stringToAdd = $("<div>");
			stringToAdd.addClass("image");
        	stringToAdd.html("<img src='images/" + dish.image + "'><button class='img-name' id='" + dish.id + "'>" + dish.name + "</button><br /><p class='description'>" + dish.description + "</p>");

        	dishesContainer.append(stringToAdd);

        });
	};

	this.update = function(){
		loadFullMenu();
	};
}
