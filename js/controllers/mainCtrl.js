var MainCtrl = function(view,model, dishToSelectView) {
	
	// Attach listener to all the buttons in the 
	// canvas view so that we know which shape type
	// is currently active.

	/* var listenForClicks = function(view) {

        view.container.find("div").click(function() {
            id = dishToSelectView.setSelectedDish(this.id);
            console.log("Clicked " + id);
            window.navigate.details(id);
        });
    };
        listenForClicks(view);
*/

var listenForClicks = function(view) {
	$(".img-name").click(function() {

		console.log(this.id);
		//Set selected dish
		dishToSelectView.setSelectedDish(this.id);

		/* #pageThree change CSS to display:inline; */
		$("#dishToSelectView").show();
		/* #pageTwo change CSS to display:none; */
		$("#mainView").hide();
	});
  };

  	listenForClicks(view);

	//Update view when type is selected
	view.container.find("#dishType").change(function(){
		model.notifyObservers();
	});

	/* $("input[type=search]").on("search", function(){
		model.getAllDishes($("#dishType option:selected").val(), $(this).val());
		model.notifyObservers();
	}); */

	$("#btn-search").click(function(e) {
		e.preventDefault();
		var searchedFor = document.getElementById('dishFilter').value;
		var searchedList = model.getAllDishes(view.selectedDishType, searchedFor);
		console.log(searchedFor);
		console.log(searchedList);
		
		model.notifyObservers();

	});

};