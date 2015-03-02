// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.fullMenu = Dinner.getFullMenu();

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