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
    var dishToAdd = $scope.selectedDish;
    console.log(dishToAdd);
    var fullMenuIds = $cookieStore.get('dinnerMenuId') || [];
    var fullDinnerMenuCookie = [];
    var notFound = true;          //To check if type is already in the menu
    

    //Adding to dinner service
    Dinner.addDishToMenu(dishToAdd);
    
    //Getting the full menu from cookie
    if(typeof(fullMenuIds) === 'object'){
      $.each(fullMenuIds, function(key, value){
          var dinnerToPush = Dinner.Dish.get({id:value});
          fullDinnerMenuCookie.push(dinnerToPush);
      });
    }

    $.each(fullDinnerMenuCookie,function(index) {
      //Check if dish of type found and replace it
      if(fullDinnerMenuCookie[index].Category === dishToAdd.Category) {
        notFound = false;
        fullMenuIds[index] = dishToAdd.RecipeID;
        //console.log(dinnerMenuToUpdate);
        $cookieStore.put('dinnerMenuId', fullMenuIds);
      }
      });
    //If not found in menu, just add dish in the end
    if(notFound){
      fullDinnerMenuCookie.push(dishToAdd.RecipeID);
      $cookieStore.put('dinnerMenuId', fullDinnerMenuCookie);
    }


  }


});