// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$cookies,$cookieStore) {

  //Sets number of guests, also stores it in a cookie
  $scope.setNumberOfGuest = function (number) {
        Dinner.setNumberOfGuests(number);
        $cookieStore.put('numberOfGuests', number);
        console.log($cookieStore.get('numberOfGuests'));
  }
  var fullMenuIds = $cookieStore.get('dinnerMenuId') || [];
  if(fullMenuIds == []){
    $scope.fullMenu = Dinner.getFullMenu();
  }
  else{
    $scope.fullMenu = [];
    $.each(fullMenuIds, function(key, value){
        console.log("Add dish from cookie to menu: " + value);
        var dinnerToPush = Dinner.Dish.get({id:value});
        $scope.fullMenu.push(dinnerToPush);
        Dinner.addDishToMenu(dinnerToPush);
    });
  }

  //Getting number of guests, loads from cookie if defined or use Dinner service
  $scope.numberOfGuests = $cookieStore.get('numberOfGuests') || Dinner.getNumberOfGuests();
  
  //Remove dish from dinner menu
  $scope.removeDishFromMenu = function(event){
    Dinner.removeDishFromMenu(event.target.id);
    var newCookie = $cookieStore.get('dinnerMenuId');
    newCookie.splice(newCookie.indexOf(event.target.id),1);
    $cookieStore.remove('dinnerMenuId');
    $cookieStore.put('dinnerMenuId', newCookie);
  }

  $scope.$watch(function() { return Dinner.getTotalMenuPrice(); }, function(lastVal) {
     $scope.getTotalMenuPrice = lastVal;
 }, true);
  //Get total price of dinner menu
  //$scope.getTotalMenuPrice = Dinner.getTotalMenuPrice();
  
  /*Get price of single dish 
    IN: dish object
    OUT: total price of dish */
  $scope.getPriceOfDish = function(dish) {
    var totalPriceOfDish = 0;
    if(typeof(dish.Ingredients) === 'object'){
      $.each(dish.Ingredients, function(key, ingredient) {
        totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
      });
    }
    return totalPriceOfDish;
  }
});