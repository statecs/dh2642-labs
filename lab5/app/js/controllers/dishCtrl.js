// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

	//Need to improve error handling like in search control
	$scope.selectedDish = Dinner.Dish.get({id:$routeParams.dishId});
	
 //Litening to changes of number of guests in the Dinner Service
 $scope.$watch(function() { return Dinner.getNumberOfGuests(); }, function(newVal) { 
    /* Do the stuff */
     $scope.numberOfGuests = newVal;
 }, true);

  //Not working yet in dish.html
  $scope.getPriceOfDish = function(){
	var totalPriceOfDish = 0;
	$.each($scope.selectedDish.Ingredients, function(key, ingredient) {
		totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
	});  	
	return totalPriceOfDish;
  }

  $scope.addDishToMenu = function(e){
  	e.preventDefault();
  	console.log($scope.selectedDish);
  	Dinner.addDishToMenu($scope.selectedDish);
  }


});