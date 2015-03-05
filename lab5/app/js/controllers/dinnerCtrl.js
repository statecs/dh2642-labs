// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$cookies,$cookieStore) {

  //Sets number of guests, also stores it in a cookie
  $scope.setNumberOfGuest = function (number) {
        Dinner.setNumberOfGuests(number);
        $cookieStore.put('numberOfGuests', number);
        console.log($cookieStore.get('numberOfGuests'));
  }
  
  //Get dinner menu from Dinner Service  
  $scope.fullMenu = Dinner.getFullMenu();

  //Getting number of guests, loads from cookie if defined
  if($cookieStore.get('numberOfGuests') === undefined){
    $scope.numberOfGuests = Dinner.getNumberOfGuests();
  }
  else{
    $scope.numberOfGuests = $cookieStore.get('numberOfGuests');
  }
  
  //Remove dish from dinner menu
  $scope.removeDishFromMenu = function(event){
    Dinner.removeDishFromMenu(event.target.id);
  }


  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
  
  $scope.getPriceOfDish = function(dish) {
    var totalPriceOfDish = 0;
    $.each(dish.Ingredients, function(key, ingredient) {
      totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
    });   
    return totalPriceOfDish;
  }
});