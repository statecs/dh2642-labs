// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner,$cookies,$cookieStore) {

	//Need to improve error handling like in search control
	$scope.selectedDish = Dinner.Dish.get({id:$routeParams.dishId});
	
 //Litening to changes of number of guests in the Dinner Service
 $scope.$watch(function() { return Dinner.getNumberOfGuests(); }, function(lastVal) {
     $scope.numberOfGuests = $cookieStore.get('numberOfGuests') || lastVal;
 }, true);

  $scope.getPriceOfSelectedDish = function(){
    var totalPriceOfDish = 0;
    if(typeof($scope.selectedDish.Ingredients) === 'object'){
      $.each($scope.selectedDish.Ingredients, function(key, ingredient) {
        totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
      });   
    }
    return totalPriceOfDish;
  }

  $scope.addDishToMenu = function(e){
       e.preventDefault();
       Dinner.addDishToMenu($scope.selectedDish);
    }

});