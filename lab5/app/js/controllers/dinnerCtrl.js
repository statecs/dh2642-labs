// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$cookies,$cookieStore) {


 $scope.setNumberOfGuest = function (number) {
  
  Dinner.setNumberOfGuests(number);

        var lastVal = $cookieStore.get('numberOfGuest');

        if (!lastVal) {
            $scope.lastVal = number;
        } else {
            $scope.lastVal = number;
        }
        $cookieStore.put('numberOfGuest', $scope.lastVal);
    }
    

  $scope.fullMenu = Dinner.getFullMenu();


  //Only need to call this method once (not using $watch) as we only show the value
  $scope.numberOfGuests = $cookieStore.get('numberOfGuest');
// $scope.numberOfGuests = Dinner.getNumberOfGuests();
  
  $scope.removeDishFromMenu = function(event){
    Dinner.removeDishFromMenu(event.target.id);
  }

  $scope.getPriceOfDish = function(dish){
    if(dish === undefined){
      return;
    }
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