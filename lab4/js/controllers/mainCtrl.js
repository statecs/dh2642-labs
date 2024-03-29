var MainCtrl = function(view,model) {
	
	// Attach listener to all the buttons in the 
	// canvas view so that we know which shape type
	// is currently active.

	$(document).on('click','.thumbnail-dish-button',function () {
        
		console.log(this.id);
		//Set selected dish
		model.setSelectedDish(this.id);

		/* #pageThree change CSS to display:inline; */
		$("#dishToSelectView").show();
		/* #pageTwo change CSS to display:none; */
		$("#mainView").hide();

	});

	//Update view when type is selected
	view.container.find("#dishType").change(function(){
		model.getAllDishes($("#dishType option:selected").val());
	});

	/* $("input[type=search]").on("search", function(){
		model.getAllDishes($("#dishType option:selected").val(), $(this).val());
		model.notifyObservers();
	}); */

	$("#btn-search").click(function(e) {
		e.preventDefault();
		var searchedFor = document.getElementById('dishFilter').value;
		console.log(searchedFor);
		model.getAllDishes($("#dishType option:selected").val(), searchedFor);
	});
	$('input#dishFilter').on("input", function(e) {
		e.preventDefault();
		var searchedFor = this.value;
		console.log(searchedFor);
		model.getAllDishes($("#dishType option:selected").val(), searchedFor);
	});

	$(document).on({
    	ajaxStart: function() { $(".main-container").addClass("loading");},
     	ajaxStop: function() { $(".main-container").removeClass("loading"); }    
	});

};