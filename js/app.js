$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	window.viewOne = new ViewOne($("#pageOne"), model);
	window.viewTwo = new ViewTwo($("#pageTwo"), model);
	window.viewThree = new ViewThree($("#pageThree"), model);
	window.viewFour = new ViewFour($("#pageFour"), model);
	window.viewFive = new ViewFive($("#pageFive"), model);
	window.viewSix = new ViewSix($("#pageSix"), model);

});