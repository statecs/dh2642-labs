// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.fullMenu = Dinner.getFullMenu();


  //Only need to call this method once (not using $watch) as we only show the value
  $scope.numberOfGuests = Dinner.getNumberOfGuests();


  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }
  
  $scope.getPriceOfDish = function(dish){
	var totalPriceOfDish = 0;
	$.each(dish.Ingredients, function(key, ingredient) {
		totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
	});  	
	return totalPriceOfDish;
  }
  /*$scope.removeDishToMenu = function(e){
  	Dinner.removeDishToMenu($scope.selectedDish.);
  }*/
  $scope.getTotalMenuPrice = function() {
  	return Dinner.getTotalMenuPrice();
  }
});