// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$cookies,$cookieStore) {

  //Sets number of guests, also stores it in a cookie
  $scope.setNumberOfGuest = function (number) {
        Dinner.setNumberOfGuests(number);
        $cookieStore.put('numberOfGuests', number);
        console.log($cookieStore.get('numberOfGuests'));
  }
  var dinnerMenuIdCookie = $cookieStore.get('dinnerMenuId') || [];
  console.log(dinnerMenuIdCookie);
  $.each(dinnerMenuIdCookie, function(key, value){
      console.log("Add dish from cookie to menu: " + value);
      Dinner.addDishToMenu(Dinner.Dish.get({id:value}));
  });

  //Get dinner menu from Dinner Service, (!need to use cookies!)  
  $scope.fullMenu = Dinner.getFullMenu();

  //Getting number of guests, loads from cookie if defined or use Dinner service
  $scope.numberOfGuests = $cookieStore.get('numberOfGuests') || Dinner.getNumberOfGuests();
  
  //Remove dish from dinner menu
  $scope.removeDishFromMenu = function(event){
    Dinner.removeDishFromMenu(event.target.id);
  }

  //Get total price of dinner menu
  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
  
  /*Get price of single dish 
    IN: dish object
    OUT: total price of dish */
  $scope.getPriceOfDish = function(dish) {
    var totalPriceOfDish = 0;
    $.each(dish.Ingredients, function(key, ingredient) {
      totalPriceOfDish += ingredient.Quantity*$scope.numberOfGuests;
    });   
    return totalPriceOfDish;
  }
});