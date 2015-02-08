$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
<<<<<<< HEAD
	window.viewOne = new viewOne($("#pageOne"), model);
	window.viewTwo = new viewTwo($("#pageTwo"), model);
	window.viewThree = new viewThree($("#pageThree"), model);
	window.viewFour = new viewFour($("#pageFour"), model);
	window.viewFive = new viewFive($("#pageFive"), model);
	window.viewSix = new viewSix($("#pageSix"), model);
=======
	var exampleView = new ExampleView($("#exampleView"), model);
>>>>>>> origin/lab2

});