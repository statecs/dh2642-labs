// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner,$cookies,$cookieStore) {


 //Litening to changes of number of guests in the Dinner Service
 $scope.$watch(function() { return Dinner.getNumberOfGuests(); }, function(lastVal) {
     $scope.numberOfGuests = $cookieStore.get('numberOfGuests') || lastVal;
 }, true);


 $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
  //Sets number of guests, also stores it in a cookie
  $scope.setNumberOfGuest = function (number) {
        Dinner.setNumberOfGuests(number);
        $cookieStore.put('numberOfGuests', number);
        console.log($cookieStore.get('numberOfGuests'));
  }

  $scope.fullMenu = function(){
    var fullMenuIds = $cookieStore.get('dinnerMenuId') || [];
    //console.log(Dinner.getFullMenu());
    var currentFullMenu = Dinner.getFullMenu();
    //console.log(currentFullMenu === 'object');
    if(fullMenuIds != [] && typeof(currentFullMenu) === 'object' && currentFullMenu.length == 0){
      $.each(fullMenuIds, function(key, value){
          var dinnerToPush = Dinner.Dish.get({id:value});
          Dinner.addDishToMenu(dinnerToPush);
      });
    }
    return Dinner.getFullMenu();
  }
    

  //Getting number of guests, loads from cookie if defined or use Dinner service
//  $scope.numberOfGuests = $cookieStore.get('numberOfGuests') || Dinner.getNumberOfGuests();


  
  //Remove dish from dinner menu
  $scope.removeDishFromMenu = function(event){
    Dinner.removeDishFromMenu(event.target.id);
    var fullMenuIds = $cookieStore.get('dinnerMenuId') || [];

    if(typeof(fullMenuIds) === 'object' && fullMenuIds != []){
          fullMenuIds.splice(fullMenuIds.indexOf(event.target.id),1);
          $cookieStore.put('dinnerMenuId', fullMenuIds);
    }
  }


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