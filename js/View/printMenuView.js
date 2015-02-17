var PrintMenuView = function(container, model) {

	this.container = container;

	var dishesContainer = container.find(".page-6-content");
	var numberOfGuests = $(".page-bar").find("h3");

	model.addObserver(this);

	var loadPrintMenu = function(){
		dishesContainer.html("");
		numberOfGuests.html("");

		numberOfGuests.append("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3>");
		$.each(model.getFullMenu(), function(key, dish) {
        	var stringToAdd = "<div class='col-md-2'><img src='images/" + dish.image + "'></img></div>" +
					"<div class='col-md-3'><h3>" + dish.name + "</h3><p>INGREDIENTS</p></div>" + 
        			"<div class='col-md-5'><h4>Preparations</h4><p class='description'>" + dish.description + "</p></div>";

        	dishesContainer.append("<div class='row'>" + stringToAdd + "</div>");

        });
	};

	this.update = function(){
		loadPrintMenu();
	};
}